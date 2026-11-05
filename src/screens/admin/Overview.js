import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import {
  MdAdd,
  MdArticle,
  MdHistory,
  MdLocalOffer,
  MdTravelExplore,
} from 'react-icons/md';
import { db } from '../../lib/firebase';
import { getOfferStatus, todayInIndia } from '../../lib/offers';
import { buildSeoPages } from './SeoManager';

const ENDING_SOON_DAYS = 7;

const addDays = (day, count) => {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + count);
  return date.toISOString().slice(0, 10);
};

const StatCard = ({ icon: Icon, title, to, stats, loading, failed }) => (
  <Link
    to={to}
    className='block p-5 transition bg-white border border-gray-200 rounded-xl hover:border-nexa hover:shadow-sm'
  >
    <div className='flex items-center gap-2 mb-4 font-semibold text-gray-900'>
      <span className='flex items-center justify-center rounded-lg h-9 w-9 bg-nexa/10 text-nexa'>
        <Icon size={20} aria-hidden />
      </span>
      {title}
    </div>
    {failed && <p className='text-sm text-red-600'>Couldn’t load this.</p>}
    {loading && !failed && <p className='text-sm text-gray-500'>Loading…</p>}
    {!loading && !failed && (
      <dl className='grid grid-cols-2 gap-3'>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dd
              className={`text-3xl font-bold ${
                stat.warn && stat.value > 0 ? 'text-amber-600' : 'text-gray-900'
              }`}
            >
              {stat.value}
            </dd>
            <dt className='text-sm text-gray-500'>{stat.label}</dt>
          </div>
        ))}
      </dl>
    )}
  </Link>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  stats: PropTypes.array,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
};

const useCollectionData = (enabled, load) => {
  const [state, setState] = useState({ data: null, failed: false });
  useEffect(() => {
    if (!enabled) return undefined;
    let active = true;
    load()
      .then((data) => active && setState({ data, failed: false }))
      .catch((err) => {
        console.error('Could not load overview data:', err);
        if (active) setState({ data: null, failed: true });
      });
    return () => {
      active = false;
    };
    // `load` is defined once per card, so it never needs to re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
  return state;
};

const readAll = (name) =>
  getDocs(collection(db, name)).then((snapshot) =>
    snapshot.docs.map((row) => ({ id: row.id, ...row.data() }))
  );

const Overview = ({ roles }) => {
  const canBlog = roles.includes('blog');
  const canOffers = roles.includes('offers');
  const canSeo = roles.includes('seo');

  const posts = useCollectionData(canBlog, () => readAll('posts'));
  const offers = useCollectionData(canOffers, () => readAll('offers'));
  const seo = useCollectionData(canSeo, () => readAll('seoPages'));
  const activity = useCollectionData(true, () =>
    getDocs(
      query(collection(db, 'changeLog'), orderBy('at', 'desc'), limit(5))
    ).then((snapshot) => snapshot.docs.map((row) => ({ id: row.id, ...row.data() })))
  );

  const today = todayInIndia();
  const soon = addDays(today, ENDING_SOON_DAYS);
  const liveOffers = (offers.data || []).filter(
    (offer) => getOfferStatus(offer, today) === 'live'
  );
  const seoPages = seo.data
    ? buildSeoPages(
        Object.fromEntries(
          seo.data.map((row) => [decodeURIComponent(row.id), row])
        )
      )
    : [];

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Overview</h1>
        <div className='flex flex-wrap gap-2'>
          {canBlog && (
            <Link
              to='/admin/new'
              className='flex items-center gap-1 px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d]'
            >
              <MdAdd size={20} aria-hidden /> New post
            </Link>
          )}
          {canOffers && (
            <Link
              to='/admin/offers'
              className='px-4 py-2.5 font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50'
            >
              Manage offers
            </Link>
          )}
        </div>
      </div>

      <div className='grid gap-4 mb-6 md:grid-cols-2 xl:grid-cols-3'>
        {canBlog && (
          <StatCard
            icon={MdArticle}
            title='Blog'
            to='/admin/posts'
            loading={!posts.data}
            failed={posts.failed}
            stats={[
              {
                label: 'Published',
                value: (posts.data || []).filter((p) => p.status === 'published')
                  .length,
              },
              {
                label: 'Drafts',
                value: (posts.data || []).filter((p) => p.status !== 'published')
                  .length,
              },
            ]}
          />
        )}
        {canOffers && (
          <StatCard
            icon={MdLocalOffer}
            title='Offers'
            to='/admin/offers'
            loading={!offers.data}
            failed={offers.failed}
            stats={[
              { label: 'Live today', value: liveOffers.length },
              {
                label: `Ending in ${ENDING_SOON_DAYS} days`,
                warn: true,
                value: liveOffers.filter(
                  (offer) => offer.endsAt && offer.endsAt <= soon
                ).length,
              },
            ]}
          />
        )}
        {canSeo && (
          <StatCard
            icon={MdTravelExplore}
            title='SEO'
            to='/admin/seo'
            loading={!seo.data}
            failed={seo.failed}
            stats={[
              { label: 'Pages', value: seoPages.length },
              {
                label: 'Need attention',
                warn: true,
                value: seoPages.filter((page) => page.issues.length).length,
              },
            ]}
          />
        )}
      </div>

      <section className='bg-white border border-gray-200 rounded-xl'>
        <div className='flex items-center justify-between px-5 py-4 border-b border-gray-100'>
          <h2 className='flex items-center gap-2 font-semibold text-gray-900'>
            <MdHistory size={20} className='text-gray-500' aria-hidden />
            Recent activity
          </h2>
          <Link to='/admin/activity' className='text-sm font-semibold text-nexa'>
            View all
          </Link>
        </div>
        {activity.failed && (
          <p className='p-5 text-sm text-red-600'>
            We couldn’t load recent activity.
          </p>
        )}
        {!activity.failed && !activity.data && (
          <p className='p-5 text-sm text-gray-500'>Loading…</p>
        )}
        {activity.data && activity.data.length === 0 && (
          <p className='p-5 text-sm text-gray-500'>No changes yet.</p>
        )}
        {activity.data && activity.data.length > 0 && (
          <ul className='divide-y divide-gray-100'>
            {activity.data.map((entry) => (
              <li
                key={entry.id}
                className='flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-sm'
              >
                <span className='text-gray-900 break-words'>
                  <strong>{entry.email}</strong> {entry.action} {entry.target}
                </span>
                <span className='text-xs text-gray-500'>
                  {new Date(entry.at).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

Overview.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Overview;
