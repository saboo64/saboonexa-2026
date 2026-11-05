import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Seo from '../../components/SEO/seo';
import { imagekitUrl } from '../../lib/imagekit';
import BlogContent from './BlogContent';
import { formatDate } from './BlogList';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    fetch(`/api/posts?slug=${encodeURIComponent(slug)}`)
      .then((response) => {
        if (response.status === 404) return null;
        if (!response.ok) throw new Error(`status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        setPost(data ? data.post : null);
        setStatus(data ? 'ready' : 'missing');
      })
      .catch((err) => {
        console.error('Could not load post:', err);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [slug]);

  const canonicalUrl = `https://www.saboonexa.in/blog/${slug}`;

  if (status !== 'ready') {
    const message = {
      loading: 'Loading post…',
      missing: 'We couldn’t find this post.',
      error: 'We couldn’t load this post. Please refresh the page to try again.',
    }[status];
    return (
      <>
        {status === 'missing' && (
          <Seo
            title='Page not found | Popular Nexa'
            description='This blog post could not be found.'
            url='https://www.saboonexa.in/blog'
            keywords=''
            noindex
          />
        )}
        <Header col={true} />
        <div className='pb-[67px] sm:pb-[120px] lg:pb-[135px]'></div>
        <main className='container min-h-screen px-4 pt-6 mx-auto text-center'>
          <p className='mb-4 text-gray-600'>{message}</p>
          {status !== 'loading' && (
            <Link to='/blog' className='text-red-600 underline'>
              Back to the blog
            </Link>
          )}
        </main>
      </>
    );
  }

  const description = post.metaDescription || post.excerpt;

  return (
    <>
      <Seo
        title={post.metaTitle || `${post.title} | Popular Nexa`}
        description={description}
        url={canonicalUrl}
        keywords=''
        image={post.coverImage || undefined}
        imageAlt={post.coverImageAlt || undefined}
        type='article'
        author={post.author}
      />
      <Helmet>
        <script type='application/ld+json'>
          {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description,
          image: post.coverImage || undefined,
          url: canonicalUrl,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt || post.publishedAt,
          author: { '@type': 'Organization', name: post.author },
          publisher: {
            '@type': 'AutoDealer',
            name: 'Popular Nexa',
          },
        })}
        </script>
      </Helmet>
      <Header col={true} />
      <div className='pb-[67px] sm:pb-[120px] lg:pb-[135px]'></div>
      <main className='container max-w-3xl px-4 pt-6 pb-12 mx-auto'>
        <Link to='/blog' className='text-sm text-red-600 underline'>
          ← All posts
        </Link>
        <PostContent post={post} />
      </main>
    </>
  );
};

// Shared with the dashboard preview, so staff see what visitors will see.
export const PostContent = ({ post }) => (
  <article>
    {post.category && (
      <p className='mt-4 text-xs font-semibold text-red-600 uppercase'>
        {post.category}
      </p>
    )}
    <h1 className='mt-2 mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'>
      {post.title}
    </h1>
    <p className='mb-6 text-sm text-gray-500'>
      {[post.author, formatDate(post.publishedAt)].filter(Boolean).join(' · ')}
    </p>
    {post.coverImage && (
      <img
        src={imagekitUrl(post.coverImage, 'w-1200,f-auto')}
        alt={post.coverImageAlt || ''}
        className='w-full h-auto mb-6 rounded-lg'
      />
    )}
    <BlogContent html={post.body} />
  </article>
);

export default BlogPost;
