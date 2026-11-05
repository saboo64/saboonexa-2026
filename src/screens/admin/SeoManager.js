import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { MdSearch } from 'react-icons/md';
import { auth, db } from '../../lib/firebase';
import { logChange } from '../../lib/changeLog';
import seoDefaults from '../../constants/seoDefaults.json';
import { applySeasonalPlaceholders } from '../../constants/seasonalOffers';
import ImageUploadDialog from './ImageUploadDialog';

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 160;

const inputClass =
  'w-full px-3 py-2 mt-1 text-sm font-normal border border-gray-300 rounded-lg focus:border-nexa focus:outline-none focus:ring-2 focus:ring-nexa/20';

const pageId = (path) => encodeURIComponent(path);

export function pageIssues(tags) {
  // Measured as visitors see it, with {{SEASON}} and {{YEAR}} filled in.
  const title = applySeasonalPlaceholders(tags.title);
  const description = applySeasonalPlaceholders(tags.description);
  const issues = [];
  if (!title) issues.push('No title');
  else if (title.length > TITLE_LIMIT) issues.push('Long title');
  if (!description) issues.push('No description');
  else if (description.length > DESCRIPTION_LIMIT) {
    issues.push('Long description');
  }
  return issues;
}

// Every page's current tags, with any problems Google might have with them.
export function buildSeoPages(overrides) {
  const rows = Object.keys(seoDefaults).map((path) => ({
    path,
    tags: { ...seoDefaults[path], ...(overrides?.[path] || {}) },
    custom: Boolean(overrides?.[path]),
  }));
  const titleCounts = {};
  const descriptionCounts = {};
  rows.forEach(({ tags }) => {
    titleCounts[tags.title] = (titleCounts[tags.title] || 0) + 1;
    if (tags.description) {
      descriptionCounts[tags.description] =
        (descriptionCounts[tags.description] || 0) + 1;
    }
  });
  return rows.map((row) => ({
    ...row,
    issues: [
      ...pageIssues(row.tags),
      ...(titleCounts[row.tags.title] > 1 ? ['Duplicate title'] : []),
      ...(descriptionCounts[row.tags.description] > 1
        ? ['Duplicate description']
        : []),
    ],
  }));
}

const Counter = ({ value, limit }) => (
  <span
    className={`block mt-1 text-xs font-normal ${
      applySeasonalPlaceholders(value).length > limit
        ? 'text-amber-700'
        : 'text-gray-500'
    }`}
  >
    {applySeasonalPlaceholders(value).length} of about {limit} characters
    {applySeasonalPlaceholders(value).length > limit
      ? '. Google may cut this off.'
      : ''}
  </span>
);

const PageForm = ({ path, override, onDone }) => {
  const defaults = seoDefaults[path];
  const [form, setForm] = useState({
    title: override?.title || defaults.title,
    description: override?.description || defaults.description,
    keywords: override?.keywords || defaults.keywords || '',
    ogImage: override?.ogImage || defaults.ogImage || '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [dialog, setDialog] = useState(false);
  const update = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const markChanged = () =>
    setDoc(
      doc(db, 'seoMeta', 'status'),
      { lastChangeAt: new Date().toISOString() },
      { merge: true }
    );

  const save = async () => {
    if (!form.title.trim() || !form.description.trim()) {
      setError('A page needs both a title and a description.');
      return;
    }
    setSaving(true);
    try {
      await setDoc(doc(db, 'seoPages', pageId(path)), {
        title: form.title.trim(),
        description: form.description.trim(),
        keywords: form.keywords.trim(),
        ogImage: form.ogImage.trim(),
        updatedAt: new Date().toISOString(),
      });
      await markChanged();
      await logChange('seo', 'updated', path);
      toast.success('Saved. Select Publish SEO changes to put it live.');
      onDone(true);
    } catch (err) {
      console.error('Could not save SEO:', err);
      toast.error('The changes could not be saved. Please try again.');
      setSaving(false);
    }
  };

  const reset = async () => {
    if (!window.confirm('Go back to this page’s original tags?')) return;
    setSaving(true);
    try {
      await deleteDoc(doc(db, 'seoPages', pageId(path)));
      await markChanged();
      await logChange('seo', 'reset', path);
      toast.success('Reset. Select Publish SEO changes to put it live.');
      onDone(true);
    } catch (err) {
      console.error('Could not reset SEO:', err);
      toast.error('The page could not be reset. Please try again.');
      setSaving(false);
    }
  };

  return (
    <div className='grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_380px]'>
      <div className='p-5 space-y-4 bg-white rounded-xl'>
        <div>
          <h2 className='text-lg font-bold text-gray-900'>Edit page SEO</h2>
          <p className='text-sm text-gray-500 break-all'>{path}</p>
          <p className='mt-1 text-xs text-gray-500'>
            {'{{SEASON}}'} and {'{{YEAR}}'} fill in automatically with the current
            campaign and year.
          </p>
        </div>
        {error && (
          <p role='alert' className='p-3 text-sm text-red-700 rounded-lg bg-red-50'>
            {error}
          </p>
        )}
        <label className='block text-sm font-semibold'>
          Title
          <input
            value={form.title}
            onChange={(event) => update('title', event.target.value)}
            className={inputClass}
          />
          <Counter value={form.title} limit={TITLE_LIMIT} />
        </label>
        <label className='block text-sm font-semibold'>
          Description
          <textarea
            rows={3}
            value={form.description}
            onChange={(event) => update('description', event.target.value)}
            className={inputClass}
          />
          <Counter value={form.description} limit={DESCRIPTION_LIMIT} />
        </label>
        <label className='block text-sm font-semibold'>
          Keywords (optional)
          <textarea
            rows={2}
            value={form.keywords}
            onChange={(event) => update('keywords', event.target.value)}
            className={inputClass}
          />
        </label>
        <div>
          <p className='text-sm font-semibold'>Share image</p>
          {form.ogImage && (
            <img
              src={form.ogImage}
              alt=''
              className='object-cover w-full h-40 mt-1 bg-gray-100 rounded-lg sm:w-80'
            />
          )}
          <button
            type='button'
            onClick={() => setDialog(true)}
            className='mt-1 text-sm font-semibold text-nexa'
          >
            {form.ogImage ? 'Replace' : 'Upload image'}
          </button>
          <span className='block text-xs text-gray-500'>
            Shown when this page is shared on WhatsApp or Facebook.
          </span>
        </div>
        <div className='flex flex-wrap justify-between gap-2 pt-2'>
          <button
            type='button'
            disabled={!override || saving}
            onClick={reset}
            className='px-4 py-2 font-semibold text-red-600 disabled:opacity-40'
          >
            Reset to original
          </button>
          <span className='flex gap-2'>
            <button
              type='button'
              onClick={() => onDone(false)}
              className='px-4 py-2 font-semibold border border-gray-300 rounded-lg'
            >
              Cancel
            </button>
            <button
              type='button'
              disabled={saving}
              onClick={save}
              className='px-4 py-2 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d] disabled:opacity-60'
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </span>
        </div>
      </div>

      <aside className='p-4 bg-white rounded-xl xl:sticky xl:top-4'>
        <h2 className='mb-3 text-sm font-bold text-gray-900'>
          Google search preview
        </h2>
        <div className='p-3 border border-gray-200 rounded-lg'>
          <p className='text-xs text-gray-600 break-all'>saboonexa.in{path}</p>
          <p className='text-lg leading-snug text-[#1a0dab] break-words'>
            {applySeasonalPlaceholders(form.title) || 'Page title'}
          </p>
          <p className='text-sm text-gray-600 break-words'>
            {applySeasonalPlaceholders(form.description) || 'Page description'}
          </p>
        </div>
      </aside>

      {dialog && (
        <ImageUploadDialog
          mode='cover'
          title='Upload share image'
          folder='/popular_rks_nexa/seo'
          sizeHint='1200 × 630 px works best.'
          onClose={() => setDialog(false)}
          onUploaded={({ url }) => {
            update('ogImage', url);
            setDialog(false);
          }}
        />
      )}
    </div>
  );
};

const SeoManager = () => {
  const [overrides, setOverrides] = useState(null);
  const [status, setStatus] = useState({});
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [publishing, setPublishing] = useState(false);

  const load = () => {
    setError(false);
    Promise.all([
      getDocs(collection(db, 'seoPages')),
      getDoc(doc(db, 'seoMeta', 'status')),
    ])
      .then(([pages, meta]) => {
        const map = {};
        pages.docs.forEach((row) => {
          map[decodeURIComponent(row.id)] = row.data();
        });
        setOverrides(map);
        setStatus(meta.exists() ? meta.data() : {});
      })
      .catch((err) => {
        console.error('Could not load SEO:', err);
        setError(true);
      });
  };

  useEffect(load, []);

  const pages = useMemo(() => buildSeoPages(overrides), [overrides]);

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return pages.filter((page) => {
      if (filter === 'issues' && !page.issues.length) return false;
      if (filter === 'custom' && !page.custom) return false;
      return (
        !term ||
        page.path.toLowerCase().includes(term) ||
        page.tags.title.toLowerCase().includes(term)
      );
    });
  }, [pages, filter, search]);

  const unpublished =
    status.lastChangeAt &&
    (!status.publishedAt || status.lastChangeAt > status.publishedAt);

  const publish = async () => {
    setPublishing(true);
    try {
      const idToken = await auth.currentUser.getIdToken();
      const response = await fetch('/api/publish-seo', {
        method: 'POST',
        headers: { Authorization: `Bearer ${idToken}` },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Publishing failed.');
      setStatus((current) => ({ ...current, publishedAt: result.publishedAt }));
      await logChange('seo', 'published', 'SEO changes');
      toast.success('Publishing started. It takes a few minutes to go live.');
    } catch (err) {
      console.error('Could not publish SEO:', err);
      toast.error(err.message);
    } finally {
      setPublishing(false);
    }
  };

  if (editing) {
    return (
      <PageForm
        path={editing}
        override={overrides?.[editing]}
        onDone={(changed) => {
          setEditing(null);
          if (changed) load();
        }}
      />
    );
  }

  const issueCount = pages.filter((page) => page.issues.length).length;
  const customCount = pages.filter((page) => page.custom).length;
  const tabs = [
    { value: 'all', label: `All pages (${pages.length})` },
    { value: 'issues', label: `Needs attention (${issueCount})` },
    { value: 'custom', label: `Changed (${customCount})` },
  ];

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900'>SEO</h1>
        <div className='flex flex-wrap items-center gap-3'>
          <span
            aria-live='polite'
            className={`text-sm ${unpublished ? 'text-amber-700' : 'text-gray-500'}`}
          >
            {unpublished
              ? 'You have unpublished changes'
              : status.publishedAt
              ? `Last published ${new Date(status.publishedAt).toLocaleString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  hour: 'numeric',
                  minute: '2-digit',
                })}`
              : 'No changes to publish'}
          </span>
          <button
            type='button'
            disabled={publishing || !unpublished}
            onClick={publish}
            className='px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d] disabled:opacity-50'
          >
            {publishing ? 'Publishing…' : 'Publish SEO changes'}
          </button>
        </div>
      </div>

      {error && (
        <p role='alert' className='p-4 mb-4 text-red-700 bg-white rounded-xl'>
          We couldn’t load your SEO changes. Please refresh the page to try again.
        </p>
      )}

      <div className='overflow-hidden bg-white rounded-xl'>
        <div className='flex flex-wrap items-center justify-between gap-3 px-4 pt-3 border-b border-gray-200'>
          <div className='flex flex-wrap gap-5' role='group' aria-label='Filter pages'>
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
                {tab.label}
              </button>
            ))}
          </div>
          <label className='relative pb-3'>
            <span className='sr-only'>Search pages</span>
            <MdSearch
              size={18}
              aria-hidden
              className='absolute text-gray-400 left-2.5 top-2.5'
            />
            <input
              type='search'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder='Search pages'
              className='py-1.5 pr-3 text-sm border border-gray-300 rounded-lg pl-8'
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className='p-6 text-center text-gray-500'>
            No pages match. Try a different search or filter.
          </p>
        ) : (
          <ul className='divide-y divide-gray-100'>
            {visible.map((page) => (
              <li key={page.path}>
                <button
                  type='button'
                  disabled={!overrides}
                  onClick={() => setEditing(page.path)}
                  className='flex flex-wrap items-center w-full gap-3 p-4 text-left hover:bg-gray-50'
                >
                  <span className='flex-1 min-w-[220px]'>
                    <span className='block font-semibold text-gray-900 break-words'>
                      {applySeasonalPlaceholders(page.tags.title)}
                    </span>
                    <span className='block text-xs text-gray-500 break-all'>
                      {page.path}
                    </span>
                  </span>
                  {page.custom && (
                    <span className='rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800'>
                      Changed
                    </span>
                  )}
                  {page.issues.map((issue) => (
                    <span
                      key={issue}
                      className='rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800'
                    >
                      {issue}
                    </span>
                  ))}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SeoManager;
