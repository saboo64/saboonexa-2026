import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import {
  MdAdd,
  MdDeleteOutline,
  MdEdit,
  MdImage,
  MdOpenInNew,
  MdSearch,
} from 'react-icons/md';
import { db } from '../../lib/firebase';
import { imagekitUrl } from '../../lib/imagekit';
import { logChange } from '../../lib/changeLog';

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '—';

const StatusPill = ({ status }) => (
  <span
    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
      status === 'published'
        ? 'bg-green-100 text-green-800'
        : 'bg-amber-100 text-amber-800'
    }`}
  >
    {status === 'published' ? 'Published' : 'Draft'}
  </span>
);

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getDocs(collection(db, 'posts'))
      .then((snapshot) => {
        const rows = snapshot.docs.map((row) => ({
          slug: row.id,
          ...row.data(),
        }));
        rows.sort((a, b) =>
          (b.updatedAt || '').localeCompare(a.updatedAt || '')
        );
        setPosts(rows);
      })
      .catch((err) => {
        console.error('Could not load posts:', err);
        setError(true);
      });
  }, []);

  const remove = async (post) => {
    const confirmed = window.confirm(
      `Delete "${post.title}"? This can't be undone.`
    );
    if (!confirmed) return;
    try {
      await deleteDoc(doc(db, 'posts', post.slug));
      setPosts((rows) => rows.filter((row) => row.slug !== post.slug));
      await logChange('blog', 'deleted', post.title);
      toast.success('Post deleted');
    } catch (err) {
      console.error('Could not delete post:', err);
      toast.error('The post could not be deleted. Please try again.');
    }
  };

  const counts = useMemo(() => {
    const rows = posts || [];
    const published = rows.filter((row) => row.status === 'published').length;
    return { all: rows.length, published, draft: rows.length - published };
  }, [posts]);

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return (posts || []).filter((post) => {
      const isPublished = post.status === 'published';
      if (filter === 'published' && !isPublished) return false;
      if (filter === 'draft' && isPublished) return false;
      return !term || (post.title || '').toLowerCase().includes(term);
    });
  }, [posts, filter, search]);

  const tabs = [
    { value: 'all', label: 'All posts' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Drafts' },
  ];

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Posts</h1>
        <Link
          to='/admin/new'
          className='flex items-center gap-1 px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d]'
        >
          <MdAdd size={20} aria-hidden /> New post
        </Link>
      </div>

      {error && (
        <p role='alert' className='p-4 text-red-700 bg-white rounded-xl'>
          We couldn’t load the posts. Please refresh the page to try again.
        </p>
      )}
      {!error && !posts && (
        <p className='p-4 text-gray-500 bg-white rounded-xl'>Loading posts…</p>
      )}

      {posts && posts.length === 0 && (
        <div className='flex flex-col items-center px-6 text-center bg-white py-14 rounded-xl'>
          <h2 className='text-lg font-bold text-gray-900'>No posts yet</h2>
          <p className='mb-4 text-gray-500'>
            Write your first post. You can save it as a draft and finish it
            later.
          </p>
          <Link
            to='/admin/new'
            className='px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa'
          >
            Write a post
          </Link>
        </div>
      )}

      {posts && posts.length > 0 && (
        <div className='overflow-hidden bg-white rounded-xl'>
          <div className='flex flex-wrap items-center justify-between gap-3 px-4 pt-3 border-b border-gray-200'>
            <div className='flex gap-5' role='group' aria-label='Filter posts'>
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  type='button'
                  aria-pressed={filter === tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`pb-3 text-sm font-semibold border-b-2 ${
                    filter === tab.value
                      ? 'border-nexa text-nexa'
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label} ({counts[tab.value]})
                </button>
              ))}
            </div>
            <label className='relative pb-3'>
              <span className='sr-only'>Search posts</span>
              <MdSearch
                size={18}
                aria-hidden
                className='absolute text-gray-400 left-2.5 top-2.5'
              />
              <input
                type='search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder='Search by title'
                className='py-1.5 pr-3 text-sm border border-gray-300 rounded-lg pl-8'
              />
            </label>
          </div>

          {visible.length === 0 ? (
            <p className='p-6 text-center text-gray-500'>
              No posts match. Try a different search or filter.
            </p>
          ) : (
            <ul className='divide-y divide-gray-100'>
              {visible.map((post) => (
                <li
                  key={post.slug}
                  className='flex flex-wrap items-center gap-4 p-4 hover:bg-gray-50'
                >
                  {post.coverImage ? (
                    <img
                      src={imagekitUrl(post.coverImage, 'w-160,h-100,f-auto')}
                      alt=''
                      className='object-cover w-20 rounded-lg h-14 shrink-0'
                    />
                  ) : (
                    <div className='flex items-center justify-center w-20 text-gray-400 bg-gray-100 rounded-lg h-14 shrink-0'>
                      <MdImage size={22} aria-hidden />
                    </div>
                  )}
                  <div className='flex-1 min-w-[180px]'>
                    <Link
                      to={`/admin/edit/${post.slug}`}
                      className='font-semibold text-gray-900 hover:text-nexa hover:underline'
                    >
                      {post.title || post.slug}
                    </Link>
                    <p className='text-xs text-gray-500'>
                      Updated {formatDate(post.updatedAt)}
                      {post.category ? ` · ${post.category}` : ''}
                    </p>
                  </div>
                  <StatusPill status={post.status} />
                  <div className='flex items-center gap-1 text-gray-600'>
                    <Link
                      to={`/admin/edit/${post.slug}`}
                      aria-label={`Edit ${post.title}`}
                      title='Edit'
                      className='p-2 rounded-md hover:bg-gray-200'
                    >
                      <MdEdit size={18} />
                    </Link>
                    {post.status === 'published' && (
                      <a
                        href={`/blog/${post.slug}`}
                        target='_blank'
                        rel='noreferrer'
                        aria-label={`View ${post.title} on the website`}
                        title='View on the website'
                        className='p-2 rounded-md hover:bg-gray-200'
                      >
                        <MdOpenInNew size={18} />
                      </a>
                    )}
                    <button
                      type='button'
                      onClick={() => remove(post)}
                      aria-label={`Delete ${post.title}`}
                      title='Delete'
                      className='p-2 text-red-600 rounded-md hover:bg-red-50'
                    >
                      <MdDeleteOutline size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default PostList;
