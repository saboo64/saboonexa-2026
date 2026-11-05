import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  MdArrowBack,
  MdCloudUpload,
  MdDeleteOutline,
  MdOpenInNew,
} from 'react-icons/md';
import { db } from '../../lib/firebase';
import { imagekitUrl } from '../../lib/imagekit';
import { logChange } from '../../lib/changeLog';
import { PostContent } from '../blog/BlogPost';
import RichEditor from './RichEditor';
import ImageUploadDialog from './ImageUploadDialog';

const EMPTY_POST = {
  title: '',
  excerpt: '',
  coverImage: '',
  coverImageAlt: '',
  category: '',
  author: 'Popular Nexa',
  body: '',
  metaTitle: '',
  metaDescription: '',
  status: 'draft',
  publishedAt: '',
  createdAt: '',
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

const bodyIsEmpty = (html) =>
  !/<img\b/i.test(html) && !html.replace(/<[^>]*>/g, '').trim();

const hasImageWithoutDescription = (html) =>
  (html.match(/<img\b[^>]*>/gi) || []).some(
    (tag) => !/\balt="[^"]*\S[^"]*"/i.test(tag)
  );

const inputClass =
  'w-full px-3 py-2 mt-1 text-sm font-normal border border-gray-300 rounded-lg focus:border-nexa focus:outline-none focus:ring-2 focus:ring-nexa/20';
const cardClass = 'p-4 bg-white rounded-xl';
const cardTitleClass = 'mb-3 text-sm font-bold text-gray-900';

const PostEditor = () => {
  const { slug: existingSlug } = useParams();
  const navigate = useNavigate();
  const isNew = !existingSlug;

  const [post, setPost] = useState(EMPTY_POST);
  const [slug, setSlug] = useState(existingSlug || '');
  const [slugEdited, setSlugEdited] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [loadError, setLoadError] = useState('');
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [errors, setErrors] = useState([]);
  const [tab, setTab] = useState('write');
  const [dialog, setDialog] = useState(null);
  const editorRef = useRef(null);
  // After a new post's first save the URL changes, but this page already has the
  // latest content. Reloading would reset the editor and its undo history.
  const justCreatedSlug = useRef(null);

  useEffect(() => {
    if (isNew || existingSlug === justCreatedSlug.current) return;
    setLoading(true);
    getDoc(doc(db, 'posts', existingSlug))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPost({ ...EMPTY_POST, ...snapshot.data() });
        } else {
          setLoadError('This post no longer exists.');
        }
      })
      .catch((err) => {
        console.error('Could not load post:', err);
        setLoadError(
          'We couldn’t load this post. Please refresh the page to try again.'
        );
      })
      .finally(() => setLoading(false));
  }, [existingSlug, isNew]);

  // Warn before closing the tab with unsaved work.
  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const update = (field, value) => {
    setPost((current) => ({ ...current, [field]: value }));
    setDirty(true);
    if (field === 'title' && isNew && !slugEdited) setSlug(toSlug(value));
  };

  const onImageUploaded = ({ url, alt, size }) => {
    if (dialog === 'cover') {
      setPost((current) => ({
        ...current,
        coverImage: url,
        coverImageAlt: alt,
      }));
      setDirty(true);
    } else {
      editorRef.current.insertImage({ url, alt, size });
    }
    setDialog(null);
  };

  const validate = (publishing) => {
    const problems = [];
    if (!post.title.trim()) problems.push('Add a title.');
    if (!SLUG_PATTERN.test(slug)) {
      problems.push(
        'The page URL can only use lowercase letters, numbers, and single hyphens.'
      );
    }
    if (publishing) {
      if (!post.excerpt.trim()) problems.push('Add a short summary.');
      if (!post.coverImage) problems.push('Upload a cover image.');
      if (post.coverImage && !post.coverImageAlt.trim()) {
        problems.push('Add a description for the cover image.');
      }
      if (bodyIsEmpty(post.body)) problems.push('Write the post text.');
      if (hasImageWithoutDescription(post.body)) {
        problems.push('Add a description to every image in the post text.');
      }
    }
    return problems;
  };

  const save = async (status) => {
    const problems = validate(status === 'published');
    setErrors(problems);
    if (problems.length) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSaving(true);
    try {
      const ref = doc(db, 'posts', slug);
      if (isNew && (await getDoc(ref)).exists()) {
        setErrors(['Another post already uses this URL. Please change it.']);
        return;
      }
      const now = new Date().toISOString();
      const next = {
        ...post,
        status,
        updatedAt: now,
        createdAt: post.createdAt || now,
        // Stays fixed when a published post is edited or republished.
        publishedAt:
          status === 'published' ? post.publishedAt || now : post.publishedAt,
      };
      await setDoc(ref, next);
      await logChange(
        'blog',
        status === 'published' ? 'published' : 'saved a draft of',
        next.title
      );
      setPost(next);
      setDirty(false);
      setLastSaved(new Date());
      toast.success(
        status === 'published'
          ? 'Published. It will be live within about a minute.'
          : 'Saved as a draft.'
      );
      if (isNew) {
        justCreatedSlug.current = slug;
        navigate(`/admin/edit/${slug}`, { replace: true });
      }
    } catch (err) {
      console.error('Could not save post:', err);
      toast.error('The post could not be saved. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className='p-4 text-gray-500 bg-white rounded-xl'>Loading post…</p>;
  }
  if (loadError) {
    return (
      <div className='p-4 bg-white rounded-xl'>
        <p role='alert' className='mb-2 text-red-600'>
          {loadError}
        </p>
        <Link to='/admin/posts' className='font-semibold underline text-nexa'>
          Back to posts
        </Link>
      </div>
    );
  }

  const isPublished = post.status === 'published';
  const savedAt = lastSaved
    ? lastSaved.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
      })
    : null;
  const saveMessage = dirty
    ? 'Unsaved changes'
    : savedAt
    ? `Saved at ${savedAt}`
    : isNew
    ? 'Not saved yet'
    : 'All changes saved';

  return (
    <>
      <div className='z-20 flex flex-wrap items-center justify-between gap-3 p-3 mb-4 bg-white shadow-sm rounded-xl xl:sticky xl:top-0'>
        <div className='flex flex-wrap items-center gap-3'>
          <Link
            to='/admin/posts'
            aria-label='Back to posts'
            title='Back to posts'
            className='p-2 text-gray-600 rounded-md hover:bg-gray-100'
          >
            <MdArrowBack size={20} />
          </Link>
          <h1 className='text-lg font-bold text-gray-900'>
            {isNew ? 'New post' : 'Edit post'}
          </h1>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              isPublished
                ? 'bg-green-100 text-green-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {isPublished ? 'Published' : 'Draft'}
          </span>
          <span
            aria-live='polite'
            className={`text-sm ${dirty ? 'text-amber-700' : 'text-gray-500'}`}
          >
            {saveMessage}
          </span>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          {isPublished && (
            <a
              href={`/blog/${slug}`}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700'
            >
              View live <MdOpenInNew aria-hidden />
            </a>
          )}
          <button
            type='button'
            disabled={saving}
            onClick={() => save('draft')}
            className='px-4 py-2 font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-60'
          >
            {isPublished ? 'Move to draft' : 'Save draft'}
          </button>
          <button
            type='button'
            disabled={saving}
            onClick={() => save('published')}
            className='px-4 py-2 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d] disabled:opacity-60'
          >
            {isPublished ? 'Update post' : 'Publish'}
          </button>
        </div>
      </div>

      {errors.length > 0 && (
        <ul
          role='alert'
          className='p-3 mb-4 text-sm text-red-700 list-disc list-inside border border-red-200 rounded-xl bg-red-50'
        >
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <div className='grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]'>
        <div className='min-w-0'>
          <div className='p-4 mb-4 bg-white rounded-xl'>
            <label className='block text-sm font-semibold'>
              Title
              <input
                value={post.title}
                onChange={(event) => update('title', event.target.value)}
                placeholder='e.g. 5 ways to keep your Baleno running well'
                className='w-full px-0 py-1 mt-1 text-2xl font-bold text-gray-900 border-0 border-b border-gray-200 focus:border-nexa focus:outline-none'
              />
            </label>
            <label className='block mt-4 text-sm font-semibold'>
              Short summary
              <textarea
                rows={2}
                value={post.excerpt}
                onChange={(event) => update('excerpt', event.target.value)}
                placeholder='One or two sentences shown on the blog page.'
                className={inputClass}
              />
            </label>
          </div>

          <div
            className='flex gap-1 p-1 mb-3 bg-gray-200 rounded-lg w-max'
            role='tablist'
            aria-label='Editor view'
          >
            {['write', 'preview'].map((name) => (
              <button
                key={name}
                type='button'
                role='tab'
                aria-selected={tab === name}
                onClick={() => setTab(name)}
                className={`px-4 py-1.5 text-sm font-semibold capitalize rounded-md ${
                  tab === name ? 'bg-white text-nexa shadow-sm' : 'text-gray-600'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Stays mounted in the preview, so undo history and text are kept. */}
          <div className={tab === 'write' ? '' : 'hidden'}>
            <RichEditor
              ref={editorRef}
              initialContent={post.body}
              onChange={(html) => update('body', html)}
              onAddImage={() => setDialog('body')}
            />
          </div>
          {tab === 'preview' && (
            <div className='p-6 bg-white rounded-xl'>
              <div className='max-w-3xl mx-auto'>
                <PostContent
                  post={{
                    ...post,
                    title: post.title || 'Your post title',
                    body: editorRef.current
                      ? editorRef.current.getHTML()
                      : '',
                    publishedAt: post.publishedAt || new Date().toISOString(),
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <aside className='space-y-4'>
          <section className={cardClass}>
            <h2 className={cardTitleClass}>Cover image</h2>
            {post.coverImage ? (
              <>
                <img
                  src={imagekitUrl(post.coverImage, 'w-640,f-auto')}
                  alt={post.coverImageAlt}
                  className='object-cover w-full h-40 rounded-lg'
                />
                <div className='flex justify-between mt-2'>
                  <button
                    type='button'
                    onClick={() => setDialog('cover')}
                    className='text-sm font-semibold text-nexa'
                  >
                    Replace
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      update('coverImage', '');
                      update('coverImageAlt', '');
                    }}
                    className='flex items-center gap-1 text-sm font-semibold text-red-600'
                  >
                    <MdDeleteOutline aria-hidden /> Remove
                  </button>
                </div>
                <label className='block mt-3 text-sm font-semibold'>
                  Cover image description
                  <input
                    value={post.coverImageAlt}
                    onChange={(event) =>
                      update('coverImageAlt', event.target.value)
                    }
                    className={inputClass}
                  />
                </label>
              </>
            ) : (
              <button
                type='button'
                onClick={() => setDialog('cover')}
                className='flex flex-col items-center justify-center w-full h-40 text-gray-600 transition border-2 border-gray-300 border-dashed rounded-lg hover:border-nexa hover:text-nexa'
              >
                <MdCloudUpload size={32} aria-hidden />
                <span className='mt-1 text-sm font-semibold'>
                  Upload cover image
                </span>
              </button>
            )}
          </section>

          <section className={cardClass}>
            <h2 className={cardTitleClass}>Post details</h2>
            <label htmlFor='post-slug' className='block text-sm font-semibold'>
              Page URL
            </label>
            <div className='flex items-center mt-1 text-sm'>
              <span className='mr-1 text-gray-500'>/blog/</span>
              <input
                id='post-slug'
                value={slug}
                disabled={!isNew}
                onChange={(event) => {
                  setSlugEdited(true);
                  setDirty(true);
                  setSlug(event.target.value);
                }}
                className='w-full px-2 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-500'
              />
            </div>
            {!isNew && (
              <p className='mt-1 text-xs text-gray-500'>
                The URL stays fixed so existing links keep working.
              </p>
            )}
            <label className='block mt-3 text-sm font-semibold'>
              Category (optional)
              <input
                value={post.category}
                onChange={(event) => update('category', event.target.value)}
                className={inputClass}
              />
            </label>
            <label className='block mt-3 text-sm font-semibold'>
              Author
              <input
                value={post.author}
                onChange={(event) => update('author', event.target.value)}
                className={inputClass}
              />
            </label>
          </section>

          <section className={cardClass}>
            <h2 className={cardTitleClass}>Google search preview</h2>
            <div className='p-3 mb-3 border border-gray-200 rounded-lg'>
              <p className='text-xs text-gray-600 break-all'>
                saboonexa.in/blog/{slug || 'your-post'}
              </p>
              <p className='text-base leading-snug text-[#1a0dab] break-words'>
                {post.metaTitle ||
                  (post.title
                    ? `${post.title} | Popular Nexa`
                    : 'Your post title')}
              </p>
              <p className='text-xs text-gray-600 break-words'>
                {post.metaDescription ||
                  post.excerpt ||
                  'Your summary appears here.'}
              </p>
            </div>
            <label className='block text-sm font-semibold'>
              Google title (optional)
              <input
                value={post.metaTitle}
                onChange={(event) => update('metaTitle', event.target.value)}
                className={inputClass}
              />
            </label>
            <label className='block mt-3 text-sm font-semibold'>
              Google description (optional)
              <textarea
                rows={2}
                value={post.metaDescription}
                onChange={(event) =>
                  update('metaDescription', event.target.value)
                }
                className={inputClass}
              />
            </label>
          </section>
        </aside>
      </div>

      {dialog && (
        <ImageUploadDialog
          mode={dialog}
          onClose={() => setDialog(null)}
          onUploaded={onImageUploaded}
        />
      )}
    </>
  );
};

export default PostEditor;
