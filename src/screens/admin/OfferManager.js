import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import {
  MdAdd,
  MdArrowDownward,
  MdArrowUpward,
  MdDeleteOutline,
  MdDragIndicator,
  MdEdit,
  MdImage,
} from 'react-icons/md';
import { db } from '../../lib/firebase';
import { imagekitUrl } from '../../lib/imagekit';
import { logChange } from '../../lib/changeLog';
import {
  getOfferStatus,
  validateBanner,
  validateOffer,
} from '../../lib/offers';
import { defaultOffers } from '../../constants/defaultOffers';
import seoDefaults from '../../constants/seoDefaults.json';
import OfferCard from '../../components/Offers/OfferCard';
import ImageUploadDialog from './ImageUploadDialog';

const STATUS = {
  live: { label: 'Live', className: 'bg-green-100 text-green-800' },
  scheduled: { label: 'Scheduled', className: 'bg-blue-100 text-blue-800' },
  expired: { label: 'Expired', className: 'bg-red-100 text-red-800' },
  hidden: { label: 'Hidden', className: 'bg-gray-200 text-gray-700' },
};

const KINDS = {
  offers: {
    collection: 'offers',
    area: 'offers',
    singular: 'offer',
    tab: 'Car offers',
    newLabel: 'New offer',
    empty: {
      carName: '',
      amount: '',
      note: '',
      image: '',
      imageAlt: '',
      link: '',
      active: true,
      startsAt: '',
      endsAt: '',
    },
    validate: validateOffer,
    name: (item) => item.carName,
    thumb: (item) => item.image,
    detail: (item) => `Save up to ₹${item.amount}`,
  },
  offerBanners: {
    collection: 'offerBanners',
    area: 'offers',
    singular: 'banner',
    tab: 'Banners',
    newLabel: 'New banner',
    empty: {
      alt: '',
      desktopImage: '',
      mobileImage: '',
      link: '',
      active: true,
      startsAt: '',
      endsAt: '',
    },
    validate: validateBanner,
    name: (item) => item.alt,
    thumb: (item) => item.desktopImage,
    detail: (item) => item.link || 'No link',
  },
};

const inputClass =
  'w-full px-3 py-2 mt-1 text-sm font-normal border border-gray-300 rounded-lg focus:border-nexa focus:outline-none focus:ring-2 focus:ring-nexa/20';

const formatDay = (day) =>
  new Date(`${day}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const dateSummary = (item) => {
  if (item.startsAt && item.endsAt) {
    return `${formatDay(item.startsAt)} to ${formatDay(item.endsAt)}`;
  }
  if (item.endsAt) return `Ends ${formatDay(item.endsAt)}`;
  if (item.startsAt) return `Starts ${formatDay(item.startsAt)}`;
  return 'No end date';
};

const ImageField = ({ label, value, onUpload, previewClass }) => (
  <div>
    <p className='mb-1 text-sm font-semibold'>{label}</p>
    {value ? (
      <>
        <img
          src={imagekitUrl(value, 'w-700,f-auto')}
          alt=''
          className={`w-full rounded-lg bg-gray-100 ${previewClass}`}
        />
        <button
          type='button'
          onClick={onUpload}
          className='mt-1 text-sm font-semibold text-nexa'
        >
          Replace
        </button>
      </>
    ) : (
      <button
        type='button'
        onClick={onUpload}
        className='flex flex-col items-center justify-center w-full h-32 text-gray-600 transition border-2 border-gray-300 border-dashed rounded-lg hover:border-nexa hover:text-nexa'
      >
        <MdImage size={28} aria-hidden />
        <span className='text-sm font-semibold'>Upload {label.toLowerCase()}</span>
      </button>
    )}
  </div>
);

const DateFields = ({ form, update }) => (
  <div className='grid gap-4 sm:grid-cols-2'>
    <label className='block text-sm font-semibold'>
      Start date (optional)
      <input
        type='date'
        value={form.startsAt}
        onChange={(event) => update('startsAt', event.target.value)}
        className={inputClass}
      />
    </label>
    <label className='block text-sm font-semibold'>
      End date (optional)
      <input
        type='date'
        value={form.endsAt}
        onChange={(event) => update('endsAt', event.target.value)}
        className={inputClass}
      />
      <span className='block mt-1 text-xs font-normal text-gray-500'>
        It hides automatically after this day.
      </span>
    </label>
  </div>
);

const ItemForm = ({ kindKey, item, nextOrder, onDone }) => {
  const kind = KINDS[kindKey];
  const isCar = kindKey === 'offers';
  const [form, setForm] = useState({ ...kind.empty, ...item });
  const [errors, setErrors] = useState([]);
  const [saving, setSaving] = useState(false);
  const [dialog, setDialog] = useState(null);
  const update = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const save = async () => {
    const problems = kind.validate(form);
    setErrors(problems);
    if (problems.length) return;
    setSaving(true);
    try {
      const ref = item
        ? doc(db, kind.collection, item.id)
        : doc(collection(db, kind.collection));
      const { id, ...fields } = form;
      await setDoc(ref, {
        ...fields,
        order: item ? item.order : nextOrder,
        updatedAt: new Date().toISOString(),
      });
      await logChange(kind.area, item ? 'updated' : 'created', kind.name(form));
      toast.success('Saved. It will update on the website within about a minute.');
      onDone(true);
    } catch (err) {
      console.error('Could not save:', err);
      toast.error(`The ${kind.singular} could not be saved. Please try again.`);
      setSaving(false);
    }
  };

  const onUploaded = ({ url, alt }) => {
    if (dialog === 'car') {
      setForm((current) => ({ ...current, image: url, imageAlt: alt }));
    } else if (dialog === 'desktop') {
      setForm((current) => ({
        ...current,
        desktopImage: url,
        alt: current.alt || alt,
      }));
    } else {
      setForm((current) => ({
        ...current,
        mobileImage: url,
        alt: current.alt || alt,
      }));
    }
    setDialog(null);
  };

  const dialogProps = {
    car: {
      title: 'Upload car image',
      folder: '/popular_rks_nexa/offers/cars',
      sizeHint: 'A wide car photo, 800 px or larger, works best.',
      minWidth: 600,
    },
    desktop: {
      title: 'Upload desktop banner',
      folder: '/popular_rks_nexa/offers/banners',
      sizeHint: 'A wide banner, 1920 px across, works best.',
      minWidth: 1200,
    },
    mobile: {
      title: 'Upload mobile banner',
      folder: '/popular_rks_nexa/offers/banners',
      sizeHint: 'A tall or square banner, 800 px across, works best.',
      minWidth: 600,
    },
  }[dialog];

  return (
    <div className='grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]'>
      <div className='p-5 space-y-4 bg-white rounded-xl'>
        <h2 className='text-lg font-bold text-gray-900'>
          {item ? `Edit ${kind.singular}` : kind.newLabel}
        </h2>

        {errors.length > 0 && (
          <ul
            role='alert'
            className='p-3 text-sm text-red-700 list-disc list-inside border border-red-200 rounded-lg bg-red-50'
          >
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {isCar ? (
          <>
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='block text-sm font-semibold'>
                Car name
                <input
                  value={form.carName}
                  onChange={(event) => update('carName', event.target.value)}
                  placeholder='e.g. Grand Vitara'
                  className={inputClass}
                />
              </label>
              <label className='block text-sm font-semibold'>
                Offer amount (₹)
                <input
                  inputMode='numeric'
                  value={form.amount}
                  onChange={(event) => update('amount', event.target.value)}
                  placeholder='e.g. 80,000'
                  className={inputClass}
                />
              </label>
            </div>
            <label className='block text-sm font-semibold'>
              Conditions (optional)
              <input
                value={form.note}
                onChange={(event) => update('note', event.target.value)}
                placeholder='e.g. +5 year extended warranty'
                className={inputClass}
              />
            </label>
            <ImageField
              label='Car image'
              value={form.image}
              onUpload={() => setDialog('car')}
              previewClass='object-contain h-48'
            />
            {form.image && (
              <label className='block text-sm font-semibold'>
                Car image description
                <input
                  value={form.imageAlt}
                  onChange={(event) => update('imageAlt', event.target.value)}
                  className={inputClass}
                />
              </label>
            )}
          </>
        ) : (
          <>
            <ImageField
              label='Desktop banner'
              value={form.desktopImage}
              onUpload={() => setDialog('desktop')}
              previewClass='object-cover h-40'
            />
            <ImageField
              label='Mobile banner'
              value={form.mobileImage}
              onUpload={() => setDialog('mobile')}
              previewClass='object-contain h-56'
            />
            <label className='block text-sm font-semibold'>
              Banner description
              <input
                value={form.alt}
                onChange={(event) => update('alt', event.target.value)}
                placeholder='e.g. Diwali offers on Maruti Suzuki cars'
                className={inputClass}
              />
            </label>
          </>
        )}

        <label className='block text-sm font-semibold'>
          {isCar ? 'View link' : 'Link (optional)'}
          <input
            list='site-pages'
            value={form.link}
            onChange={(event) => update('link', event.target.value)}
            placeholder='/grand-vitara-on-road-price-in-hyderabad'
            className={inputClass}
          />
          <datalist id='site-pages'>
            {Object.keys(seoDefaults).map((page) => (
              <option key={page} value={page} />
            ))}
          </datalist>
        </label>

        <DateFields form={form} update={update} />

        <label className='flex items-center gap-2 text-sm font-semibold'>
          <input
            type='checkbox'
            checked={form.active}
            onChange={(event) => update('active', event.target.checked)}
            className='w-4 h-4'
          />
          Show on the website
        </label>

        <div className='flex justify-end gap-2 pt-2'>
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
            {saving ? 'Saving…' : `Save ${kind.singular}`}
          </button>
        </div>
      </div>

      {isCar && (
        <aside className='p-4 bg-white rounded-xl xl:sticky xl:top-4'>
          <h2 className='mb-3 text-sm font-bold text-gray-900'>
            How it will look
          </h2>
          <OfferCard
            offer={{ ...form, carName: form.carName || 'Car name', amount: form.amount || '0' }}
            onGrab={() => {}}
            imagePlaceholder={
              <div className='flex items-center justify-center h-40 text-gray-400 bg-gray-100'>
                <MdImage size={32} aria-hidden />
              </div>
            }
          />
        </aside>
      )}

      {dialog && (
        <ImageUploadDialog
          mode='cover'
          {...dialogProps}
          onClose={() => setDialog(null)}
          onUploaded={onUploaded}
        />
      )}
    </div>
  );
};

const OfferManager = () => {
  const [kindKey, setKindKey] = useState('offers');
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);
  const [importing, setImporting] = useState(false);
  const kind = KINDS[kindKey];

  const load = useCallback(() => {
    setItems(null);
    setError(false);
    getDocs(collection(db, kind.collection))
      .then((snapshot) => {
        const rows = snapshot.docs.map((row) => ({ id: row.id, ...row.data() }));
        rows.sort((a, b) => (a.order || 0) - (b.order || 0));
        setItems(rows);
      })
      .catch((err) => {
        console.error('Could not load offers:', err);
        setError(true);
      });
  }, [kind.collection]);

  useEffect(() => {
    load();
  }, [load]);

  const nextOrder = useMemo(
    () =>
      (items || []).reduce((max, item) => Math.max(max, item.order || 0), -1) + 1,
    [items]
  );

  const saveOrder = async (rows) => {
    const previous = items;
    setItems(rows);
    try {
      const batch = writeBatch(db);
      rows.forEach((row, index) => {
        batch.update(doc(db, kind.collection, row.id), { order: index });
      });
      await batch.commit();
      await logChange(kind.area, 'reordered', kind.tab);
    } catch (err) {
      console.error('Could not reorder:', err);
      setItems(previous);
      toast.error('The new order could not be saved. Please try again.');
    }
  };

  const move = (from, to) => {
    if (to < 0 || to >= items.length || from === to) return;
    const rows = [...items];
    const [moved] = rows.splice(from, 1);
    rows.splice(to, 0, moved);
    saveOrder(rows.map((row, index) => ({ ...row, order: index })));
  };

  const toggle = async (item) => {
    try {
      await updateDoc(doc(db, kind.collection, item.id), {
        active: !item.active,
        updatedAt: new Date().toISOString(),
      });
      setItems((rows) =>
        rows.map((row) =>
          row.id === item.id ? { ...row, active: !item.active } : row
        )
      );
      await logChange(
        kind.area,
        item.active ? 'hidden' : 'shown',
        kind.name(item)
      );
    } catch (err) {
      console.error('Could not update:', err);
      toast.error('The change could not be saved. Please try again.');
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete "${kind.name(item)}"? This can't be undone.`)) {
      return;
    }
    try {
      await deleteDoc(doc(db, kind.collection, item.id));
      setItems((rows) => rows.filter((row) => row.id !== item.id));
      await logChange(kind.area, 'deleted', kind.name(item));
      toast.success('Deleted');
    } catch (err) {
      console.error('Could not delete:', err);
      toast.error('It could not be deleted. Please try again.');
    }
  };

  const importCurrent = async () => {
    setImporting(true);
    try {
      const batch = writeBatch(db);
      const now = new Date().toISOString();
      defaultOffers.forEach((offer, index) => {
        batch.set(doc(collection(db, 'offers')), {
          ...KINDS.offers.empty,
          ...offer,
          imageAlt: `${offer.carName} offer`,
          order: index,
          updatedAt: now,
        });
      });
      await batch.commit();
      await logChange('offers', 'imported', `${defaultOffers.length} current offers`);
      toast.success('Current offers imported.');
      load();
    } catch (err) {
      console.error('Could not import:', err);
      toast.error('The offers could not be imported. Please try again.');
    } finally {
      setImporting(false);
    }
  };

  if (editing) {
    return (
      <ItemForm
        kindKey={kindKey}
        item={editing === 'new' ? null : editing}
        nextOrder={nextOrder}
        onDone={(changed) => {
          setEditing(null);
          if (changed) load();
        }}
      />
    );
  }

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Offers</h1>
        <button
          type='button'
          onClick={() => setEditing('new')}
          className='flex items-center gap-1 px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d]'
        >
          <MdAdd size={20} aria-hidden /> {kind.newLabel}
        </button>
      </div>

      <div className='overflow-hidden bg-white rounded-xl'>
        <div
          className='flex gap-5 px-4 pt-3 border-b border-gray-200'
          role='group'
          aria-label='Offer type'
        >
          {Object.entries(KINDS).map(([key, value]) => (
            <button
              key={key}
              type='button'
              aria-pressed={kindKey === key}
              onClick={() => setKindKey(key)}
              className={`pb-3 text-sm font-semibold border-b-2 ${
                kindKey === key
                  ? 'border-nexa text-nexa'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {value.tab}
            </button>
          ))}
        </div>

        {error && (
          <p role='alert' className='p-4 text-red-700'>
            We couldn’t load this list. Please refresh the page to try again.
          </p>
        )}
        {!error && !items && <p className='p-4 text-gray-500'>Loading…</p>}

        {items && items.length === 0 && kindKey === 'offers' && (
          <div className='px-6 py-12 text-center'>
            <h2 className='text-lg font-bold text-gray-900'>
              Your website is showing its {defaultOffers.length} built-in offers
            </h2>
            <p className='max-w-lg mx-auto mt-1 mb-4 text-gray-500'>
              Import them to edit them here. Check the prices afterwards, because
              they’re copied as they are today.
            </p>
            <button
              type='button'
              disabled={importing}
              onClick={importCurrent}
              className='px-4 py-2.5 font-semibold text-white rounded-lg bg-nexa disabled:opacity-60'
            >
              {importing ? 'Importing…' : 'Import current offers'}
            </button>
          </div>
        )}
        {items && items.length === 0 && kindKey === 'offerBanners' && (
          <div className='px-6 py-12 text-center'>
            <h2 className='text-lg font-bold text-gray-900'>
              Your website is showing its built-in banner
            </h2>
            <p className='max-w-lg mx-auto mt-1 text-gray-500'>
              Add a banner here and it will replace the built-in one.
            </p>
          </div>
        )}

        {items && items.length > 0 && (
          <ul className='divide-y divide-gray-100'>
            {items.map((item, index) => {
              const status = STATUS[getOfferStatus(item)];
              return (
                <li
                  key={item.id}
                  draggable
                  onDragStart={() => setDragIndex(index)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => {
                    move(dragIndex, index);
                    setDragIndex(null);
                  }}
                  className={`flex flex-wrap items-center gap-3 p-4 hover:bg-gray-50 ${
                    dragIndex === index ? 'opacity-50' : ''
                  }`}
                >
                  <MdDragIndicator
                    size={20}
                    className='text-gray-400 cursor-move'
                    aria-hidden
                  />
                  <div className='flex flex-col'>
                    <button
                      type='button'
                      aria-label={`Move ${kind.name(item)} up`}
                      disabled={index === 0}
                      onClick={() => move(index, index - 1)}
                      className='text-gray-500 disabled:opacity-30'
                    >
                      <MdArrowUpward size={16} />
                    </button>
                    <button
                      type='button'
                      aria-label={`Move ${kind.name(item)} down`}
                      disabled={index === items.length - 1}
                      onClick={() => move(index, index + 1)}
                      className='text-gray-500 disabled:opacity-30'
                    >
                      <MdArrowDownward size={16} />
                    </button>
                  </div>
                  <img
                    src={imagekitUrl(kind.thumb(item), 'w-200,f-auto')}
                    alt=''
                    className='object-cover w-24 h-16 bg-gray-100 rounded-lg shrink-0'
                  />
                  <div className='flex-1 min-w-[180px]'>
                    <p className='font-semibold text-gray-900'>{kind.name(item)}</p>
                    <p className='text-sm text-gray-600'>{kind.detail(item)}</p>
                    <p className='text-xs text-gray-500'>{dateSummary(item)}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}
                  >
                    {status.label}
                  </span>
                  <button
                    type='button'
                    onClick={() => toggle(item)}
                    className='text-sm font-semibold text-nexa'
                  >
                    {item.active ? 'Hide' : 'Show'}
                  </button>
                  <button
                    type='button'
                    onClick={() => setEditing(item)}
                    aria-label={`Edit ${kind.name(item)}`}
                    title='Edit'
                    className='p-2 text-gray-600 rounded-md hover:bg-gray-200'
                  >
                    <MdEdit size={18} />
                  </button>
                  <button
                    type='button'
                    onClick={() => remove(item)}
                    aria-label={`Delete ${kind.name(item)}`}
                    title='Delete'
                    className='p-2 text-red-600 rounded-md hover:bg-red-50'
                  >
                    <MdDeleteOutline size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default OfferManager;
