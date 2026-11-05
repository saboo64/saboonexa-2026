import React, { useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const AREA_LABELS = { blog: 'Blog', offers: 'Offers', seo: 'SEO' };

const ActivityLog = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDocs(query(collection(db, 'changeLog'), orderBy('at', 'desc'), limit(100)))
      .then((snapshot) =>
        setEntries(snapshot.docs.map((row) => ({ id: row.id, ...row.data() })))
      )
      .catch((err) => {
        console.error('Could not load activity:', err);
        setError(true);
      });
  }, []);

  return (
    <>
      <h1 className='mb-6 text-2xl font-bold text-gray-900'>Activity</h1>
      <div className='overflow-hidden bg-white rounded-xl'>
        {error && (
          <p role='alert' className='p-4 text-red-700'>
            We couldn’t load the activity. Please refresh the page to try again.
          </p>
        )}
        {!error && !entries && <p className='p-4 text-gray-500'>Loading…</p>}
        {entries && entries.length === 0 && (
          <p className='p-6 text-center text-gray-500'>
            No changes yet. They’ll appear here as staff make them.
          </p>
        )}
        {entries && entries.length > 0 && (
          <ul className='divide-y divide-gray-100'>
            {entries.map((entry) => (
              <li key={entry.id} className='flex flex-wrap items-center gap-3 p-4'>
                <span className='rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-700'>
                  {AREA_LABELS[entry.area] || entry.area}
                </span>
                <span className='flex-1 min-w-[200px] text-sm text-gray-900 break-words'>
                  <strong>{entry.email}</strong> {entry.action} {entry.target}
                </span>
                <span className='text-xs text-gray-500'>
                  {new Date(entry.at).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ActivityLog;
