import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import {
  MdArticle,
  MdClose,
  MdDashboard,
  MdHistory,
  MdLocalOffer,
  MdLogout,
  MdMenu,
  MdOpenInNew,
  MdTravelExplore,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';
import { auth, db, isFirebaseConfigured } from '../../lib/firebase';
import logo from '../../assets/others/logo_color.png';
import PostList from './PostList';
import PostEditor from './PostEditor';
import OfferManager from './OfferManager';
import SeoManager from './SeoManager';
import ActivityLog from './ActivityLog';
import Overview from './Overview';

const ACCESS_CHECK_TIMEOUT_MS = 12000;
const ALL_ROLES = ['blog', 'offers', 'seo'];
const SECTIONS = [
  {
    role: 'blog',
    label: 'Blog',
    to: '/admin/posts',
    icon: MdArticle,
    match: /^\/admin\/(posts|new|edit)/,
  },
  {
    role: 'offers',
    label: 'Offers',
    to: '/admin/offers',
    icon: MdLocalOffer,
    match: /^\/admin\/offers/,
  },
  {
    role: 'seo',
    label: 'SEO',
    to: '/admin/seo',
    icon: MdTravelExplore,
    match: /^\/admin\/seo/,
  },
];
const CAR_IMAGE =
  'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/invicto-main-thubmnail-no-bg.webp';

// Firestore keeps retrying when it can't be reached, so without a limit the page
// would wait on this request indefinitely.
const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Access check timed out')), ms);
    }),
  ]);

const Centered = ({ children }) => (
  <main className='flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100'>
    <img src={logo} alt='Popular Nexa' className='h-12 mb-6 rounded-md' />
    <div className='w-full max-w-md p-6 text-center bg-white shadow-sm rounded-2xl'>
      {children}
    </div>
  </main>
);

const loginErrorMessage = (code) => {
  if (code === 'auth/too-many-requests') {
    return 'Too many attempts. Please wait a few minutes and try again.';
  }
  if (code === 'auth/network-request-failed') {
    return 'We couldn’t connect. Check your internet connection and try again.';
  }
  if (code === 'auth/unauthorized-domain') {
    return 'This website address isn’t approved for login yet. Add it under Authorized domains in Firebase.';
  }
  return 'That email or password is incorrect.';
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(loginErrorMessage(err.code));
      setBusy(false);
    }
  };

  return (
    <main className='grid min-h-screen bg-white lg:grid-cols-[1.25fr_1fr]'>
      <section className='relative flex flex-col justify-between overflow-hidden text-white bg-gradient-to-br from-nexa via-nexa to-[#000000] p-6 sm:p-10 lg:p-14'>
        <div
          className='absolute rounded-full -right-32 -top-32 h-96 w-96 bg-white/5'
          aria-hidden
        />
        <div className='relative'>
          <img src={logo} alt='Popular Nexa' className='h-12 rounded-md lg:h-14' />
          <h1 className='max-w-lg mt-8 text-3xl font-bold leading-tight lg:mt-14 lg:text-5xl'>
            Share what’s new at Popular Nexa
          </h1>
          <p className='max-w-md mt-3 text-white/80 lg:text-lg'>
            Manage your blog, car offers, and search listings for customers
            in Hyderabad.
          </p>
        </div>
        <img
          src={CAR_IMAGE}
          alt='Maruti Suzuki Invicto'
          className='relative w-full max-w-xs mx-auto mt-4 lg:mt-8 lg:max-w-2xl'
        />
      </section>

      <section className='flex items-center justify-center p-6 sm:p-10'>
        <form onSubmit={submit} className='w-full max-w-sm'>
          <h2 className='text-2xl font-bold text-gray-900'>Log in</h2>
          <p className='mt-1 mb-6 text-gray-500'>
            Use your dashboard account.
          </p>

          <label htmlFor='login-email' className='block mb-1 text-sm font-semibold'>
            Email
          </label>
          <input
            id='login-email'
            type='email'
            autoComplete='username'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='w-full px-3 py-2.5 mb-4 border border-gray-300 rounded-lg focus:border-nexa focus:outline-none focus:ring-2 focus:ring-nexa/20'
          />

          <label
            htmlFor='login-password'
            className='block mb-1 text-sm font-semibold'
          >
            Password
          </label>
          <div className='relative mb-4'>
            <input
              id='login-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='current-password'
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className='w-full px-3 py-2.5 pr-11 border border-gray-300 rounded-lg focus:border-nexa focus:outline-none focus:ring-2 focus:ring-nexa/20'
            />
            <button
              type='button'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((shown) => !shown)}
              className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-500'
            >
              {showPassword ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </button>
          </div>

          {error && (
            <p
              role='alert'
              className='p-3 mb-4 text-sm text-red-700 rounded-lg bg-red-50'
            >
              {error}
            </p>
          )}

          <button
            type='submit'
            disabled={busy}
            className='w-full py-3 font-semibold text-white transition rounded-lg bg-nexa hover:bg-[#2d2d2d] disabled:opacity-60'
          >
            {busy ? 'Logging in…' : 'Log in'}
          </button>
        </form>
      </section>
    </main>
  );
};

const Sidebar = ({ roles, onNavigate }) => {
  const { pathname } = useLocation();
  const email = auth.currentUser?.email || '';
  const linkClass = (active) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
      active
        ? 'bg-white text-nexa shadow-sm'
        : 'text-white/80 hover:bg-white/10 hover:text-white'
    }`;
  const sections = [
    { label: 'Overview', to: '/admin', icon: MdDashboard, match: /^\/admin\/?$/ },
    ...SECTIONS.filter((section) => roles.includes(section.role)),
    {
      label: 'Activity',
      to: '/admin/activity',
      icon: MdHistory,
      match: /^\/admin\/activity/,
    },
  ];

  return (
    <div className='flex flex-col h-full text-white bg-gradient-to-b from-nexa to-[#000000]'>
      <Link
        to='/admin'
        onClick={onNavigate}
        className='flex items-center gap-3 px-5 py-5'
      >
        <img src={logo} alt='Popular Nexa' className='h-10 rounded' />
      </Link>
      <p className='px-5 mb-2 text-xs font-semibold tracking-wider uppercase text-white/50'>
        Dashboard
      </p>
      <nav
        aria-label='Dashboard sections'
        className='flex-1 px-3 space-y-1 overflow-y-auto'
      >
        {sections.map(({ label, to, icon: Icon, match }) => {
          const active = match.test(pathname);
          return (
            <Link
              key={to}
              to={to}
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
              className={linkClass(active)}
            >
              <Icon size={20} aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className='p-3 border-t border-white/10'>
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          className={linkClass(false)}
        >
          <MdOpenInNew size={20} aria-hidden />
          View website
        </a>
        <div className='flex items-center gap-3 px-3 py-3 mt-1'>
          <span
            className='flex items-center justify-center text-sm font-bold uppercase rounded-full h-9 w-9 shrink-0 bg-white/15'
            aria-hidden
          >
            {email.charAt(0)}
          </span>
          <span className='flex-1 min-w-0 text-sm truncate' title={email}>
            {email}
          </span>
        </div>
        <button
          type='button'
          onClick={() => signOut(auth)}
          className={`w-full ${linkClass(false)}`}
        >
          <MdLogout size={20} aria-hidden />
          Log out
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNavigate: PropTypes.func,
};

const AdminApp = () => {
  // 'not-configured' | 'loading' | 'checking' | 'signed-out' | 'denied' | 'error' | 'admin'
  const [state, setState] = useState(
    isFirebaseConfigured ? 'loading' : 'not-configured'
  );
  const [roles, setRoles] = useState(ALL_ROLES);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    // Ignores a slow check if the user has since logged out or changed account.
    let latestCheck = 0;
    return onAuthStateChanged(auth, async (user) => {
      latestCheck += 1;
      const thisCheck = latestCheck;
      if (!user) {
        setState('signed-out');
        return;
      }
      setState('checking');
      try {
        const admin = await withTimeout(
          getDoc(doc(db, 'admins', user.uid)),
          ACCESS_CHECK_TIMEOUT_MS
        );
        if (thisCheck === latestCheck) {
          // No `roles` field means full access, matching firestore.rules.
          if (admin.exists()) {
            const assigned = admin.data().roles;
            setRoles(Array.isArray(assigned) ? assigned : ALL_ROLES);
          }
          setState(admin.exists() ? 'admin' : 'denied');
        }
      } catch (err) {
        console.error('Could not check admin access:', err);
        if (thisCheck === latestCheck) setState('error');
      }
    });
  }, []);

  const noindex = (
    <Helmet>
      <title>Dashboard | Popular Nexa</title>
      <meta name='robots' content='noindex, nofollow' />
    </Helmet>
  );

  if (state === 'not-configured') {
    return (
      <Centered>
        {noindex}
        <p>
          The dashboard isn’t connected to Firebase yet. Add the
          REACT_APP_FIREBASE_ settings in Vercel, then redeploy.
        </p>
      </Centered>
    );
  }
  if (state === 'loading' || state === 'checking') {
    return (
      <Centered>
        {noindex}
        <p className='text-gray-500'>
          {state === 'checking' ? 'Checking your access…' : 'Loading…'}
        </p>
      </Centered>
    );
  }
  if (state === 'signed-out') {
    return (
      <>
        {noindex}
        <LoginPage />
      </>
    );
  }
  if (state === 'denied' || state === 'error') {
    return (
      <Centered>
        {noindex}
        <p className='mb-4'>
          {state === 'denied'
            ? 'This account doesn’t have access to the dashboard.'
            : 'We couldn’t reach the blog database to check your access. Refresh the page to try again. If this keeps happening, make sure Firestore has been created in Firebase.'}
        </p>
        <button
          type='button'
          onClick={() => signOut(auth)}
          className='font-semibold text-red-600 underline'
        >
          Log out
        </button>
      </Centered>
    );
  }

  const guarded = (role, element) =>
    roles.includes(role) ? element : <Navigate to='/admin' replace />;

  return (
    <div className='min-h-screen bg-gray-100'>
      {noindex}

      {/* Phone top bar. A div, because the site's global CSS positions <header> tags. */}
      <div className='sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-2.5 text-white bg-nexa lg:hidden'>
        <button
          type='button'
          aria-label='Open menu'
          onClick={() => setMenuOpen(true)}
          className='p-1.5 rounded-md hover:bg-white/10'
        >
          <MdMenu size={26} />
        </button>
        <img src={logo} alt='Popular Nexa' className='rounded h-9' />
        <span className='w-9' aria-hidden />
      </div>

      {/* Desktop sidebar */}
      <div className='fixed inset-y-0 left-0 z-30 hidden w-64 lg:block'>
        <Sidebar roles={roles} />
      </div>

      {/* Phone menu */}
      <Dialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        className='relative z-50 lg:hidden'
      >
        <div className='fixed inset-0 bg-gray-900/60' aria-hidden />
        <Dialog.Panel className='fixed inset-y-0 left-0 w-72 max-w-[85%]'>
          <Dialog.Title className='sr-only'>Dashboard menu</Dialog.Title>
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setMenuOpen(false)}
            className='absolute z-10 p-1 text-white rounded-md right-3 top-4 hover:bg-white/10'
          >
            <MdClose size={24} />
          </button>
          <Sidebar roles={roles} onNavigate={() => setMenuOpen(false)} />
        </Dialog.Panel>
      </Dialog>

      <div className='lg:pl-64'>
        <div className='px-4 py-6 mx-auto max-w-7xl lg:px-8'>
          <Routes>
            <Route index element={<Overview roles={roles} />} />
            <Route path='posts' element={guarded('blog', <PostList />)} />
            <Route path='new' element={guarded('blog', <PostEditor />)} />
            <Route path='edit/:slug' element={guarded('blog', <PostEditor />)} />
            <Route path='offers' element={guarded('offers', <OfferManager />)} />
            <Route path='seo' element={guarded('seo', <SeoManager />)} />
            <Route path='activity' element={<ActivityLog />} />
            <Route path='*' element={<Navigate to='/admin' replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminApp;
