import React from 'react';
import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import AdminApp from './AdminApp';

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}));
jest.mock('firebase/firestore', () => ({ doc: jest.fn(), getDoc: jest.fn() }));
jest.mock('../../lib/firebase', () => ({
  auth: { currentUser: { email: 'staff@example.com' } },
  db: {},
  isFirebaseConfigured: true,
}));
jest.mock('./PostList', () => () => <div>post list</div>);
jest.mock('./PostEditor', () => () => <div>post editor</div>);
jest.mock('./OfferManager', () => () => <div>offer manager</div>);
jest.mock('./SeoManager', () => () => <div>seo manager</div>);
jest.mock('./ActivityLog', () => () => <div>activity page</div>);
jest.mock('./Overview', () => () => <div>overview page</div>);

const renderLoggedIn = async (user = { uid: 'staff-1' }, path = '/admin') => {
  onAuthStateChanged.mockImplementation((auth, callback) => {
    callback(user);
    return () => {};
  });
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path='/admin/*' element={<AdminApp />} />
      </Routes>
    </MemoryRouter>
  );
  await act(async () => {});
};

const sidebar = () =>
  within(screen.getByRole('navigation', { name: 'Dashboard sections' }));

beforeEach(() => {
  jest.useFakeTimers();
  doc.mockReturnValue({});
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterEach(() => {
  jest.useRealTimers();
});

test('stops waiting and explains when Firestore never responds', async () => {
  getDoc.mockReturnValue(new Promise(() => {}));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  await renderLoggedIn();
  expect(screen.getByText('Checking your access…')).toBeInTheDocument();

  await act(async () => {
    jest.advanceTimersByTime(12000);
  });
  expect(
    screen.getByText(/couldn’t reach the blog database/)
  ).toBeInTheDocument();
});

test('opens on the overview, with every section for an admin with no roles set', async () => {
  getDoc.mockResolvedValue({ exists: () => true, data: () => ({}) });
  await renderLoggedIn();
  expect(screen.getByText('overview page')).toBeInTheDocument();
  ['Overview', 'Blog', 'Offers', 'SEO', 'Activity'].forEach((name) =>
    expect(sidebar().getByRole('link', { name })).toBeInTheDocument()
  );
  expect(sidebar().getByRole('link', { name: 'Overview' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

test('only shows the sections a staff member has a role for', async () => {
  getDoc.mockResolvedValue({
    exists: () => true,
    data: () => ({ roles: ['offers'] }),
  });
  await renderLoggedIn();
  expect(sidebar().getByRole('link', { name: 'Offers' })).toBeInTheDocument();
  expect(sidebar().queryByRole('link', { name: 'Blog' })).not.toBeInTheDocument();
  expect(sidebar().queryByRole('link', { name: 'SEO' })).not.toBeInTheDocument();
});

test('sends staff away from a section they have no role for', async () => {
  getDoc.mockResolvedValue({
    exists: () => true,
    data: () => ({ roles: ['offers'] }),
  });
  await renderLoggedIn({ uid: 'staff-1' }, '/admin/seo');
  expect(screen.queryByText('seo manager')).not.toBeInTheDocument();
  expect(screen.getByText('overview page')).toBeInTheDocument();
});

test('keeps Blog highlighted while editing a post', async () => {
  getDoc.mockResolvedValue({ exists: () => true, data: () => ({}) });
  await renderLoggedIn({ uid: 'staff-1' }, '/admin/edit/some-post');
  expect(screen.getByText('post editor')).toBeInTheDocument();
  expect(sidebar().getByRole('link', { name: 'Blog' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

test('opens and closes the phone menu', async () => {
  getDoc.mockResolvedValue({ exists: () => true, data: () => ({}) });
  await renderLoggedIn();
  userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  await act(async () => {});
  const menu = screen.getByRole('dialog', { name: 'Dashboard menu' });
  userEvent.click(within(menu).getByRole('link', { name: 'Offers' }));
  await act(async () => {});
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByText('offer manager')).toBeInTheDocument();
});

test('refuses a logged-in user who is not an admin', async () => {
  getDoc.mockResolvedValue({ exists: () => false });
  await renderLoggedIn();
  expect(screen.getByText(/doesn’t have access/)).toBeInTheDocument();
  expect(screen.queryByText('overview page')).not.toBeInTheDocument();
});

test('shows the login form when logged out', async () => {
  await renderLoggedIn(null);
  expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  expect(getDoc).not.toHaveBeenCalled();
});
