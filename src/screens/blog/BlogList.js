import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Seo from '../../components/SEO/seo';
import PageSeoOverride from '../../components/SEO/PageSeoOverride';
import { imagekitUrl } from '../../lib/imagekit';

const DESCRIPTION =
  'Maruti Suzuki Nexa car guides, service tips, and news from Popular Nexa, Hyderabad.';
const PAGE_URL = 'https://www.saboonexa.in/blog';

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Popular Nexa Blog',
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: {
    '@type': 'AutoDealer',
    name: 'Popular Nexa',
  },
};

export const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    fetch('/api/posts')
      .then((response) => {
        if (!response.ok) throw new Error(`status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        setPosts(data.posts || []);
        setStatus('ready');
      })
      .catch((err) => {
        console.error('Could not load posts:', err);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Seo
        title='Maruti Nexa Blog | Popular Nexa Hyderabad'
        description={DESCRIPTION}
        url={PAGE_URL}
        keywords=''
      />
      {/* This page loads late, so its own tags would otherwise win. */}
      <PageSeoOverride />
      <Helmet>
        <script type='application/ld+json'>
          {JSON.stringify(collectionSchema)}
        </script>
      </Helmet>
      <Header col={true} />
      <div className='pb-[67px] sm:pb-[120px] lg:pb-[135px]'></div>
      <main className='container min-h-screen px-4 pb-12 mx-auto'>
        <h1 className='pt-4 mb-2 text-3xl font-medium text-center text-gray-900 uppercase md:text-5xl'>
          Maruti Nexa Blog
        </h1>
        <p className='mb-8 text-center text-gray-600'>{DESCRIPTION}</p>

        {status === 'loading' && (
          <p className='text-center text-gray-500'>Loading posts…</p>
        )}
        {status === 'error' && (
          <p className='text-center text-gray-600'>
            We couldn’t load the posts. Please refresh the page to try again.
          </p>
        )}
        {status === 'ready' && posts.length === 0 && (
          <p className='text-center text-gray-600'>
            New posts are coming soon.
          </p>
        )}

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className='flex flex-col overflow-hidden transition bg-white border rounded-lg hover:shadow-lg'
            >
              {post.coverImage && (
                <img
                  src={imagekitUrl(post.coverImage, 'w-600,h-340,f-auto')}
                  alt={post.coverImageAlt}
                  loading='lazy'
                  className='object-cover w-full h-48'
                />
              )}
              <div className='flex flex-col flex-1 p-5'>
                {post.category && (
                  <p className='mb-2 text-xs font-semibold text-red-600 uppercase'>
                    {post.category}
                  </p>
                )}
                <h2 className='mb-2 text-xl font-semibold text-gray-900'>
                  {post.title}
                </h2>
                <p className='flex-1 mb-4 text-sm text-gray-600'>
                  {post.excerpt}
                </p>
                <p className='text-xs text-gray-500'>
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogList;
