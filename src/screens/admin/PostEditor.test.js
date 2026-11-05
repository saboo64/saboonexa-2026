import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import PostEditor from './PostEditor';

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
}));
jest.mock('../../lib/firebase', () => ({ auth: {}, db: {} }));
jest.mock('../../lib/changeLog', () => ({ logChange: jest.fn() }));
jest.mock('../blog/BlogPost', () => ({ PostContent: () => <div>preview</div> }));
jest.mock('react-toastify', () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}));
// Tiptap needs a real browser, so a plain text box stands in for the editor here.
// It's tested in the browser check instead.
jest.mock('./RichEditor', () => {
  const { forwardRef } = require('react');
  return {
    __esModule: true,
    default: forwardRef(function MockEditor({ initialContent, onChange }, ref) {
      return (
        <textarea
          ref={ref}
          aria-label='Post text'
          defaultValue={initialContent}
          onChange={(event) => onChange(event.target.value)}
        />
      );
    }),
  };
});

const renderEditor = (route = '/admin/new') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path='/admin/new' element={<PostEditor />} />
        <Route path='/admin/edit/:slug' element={<PostEditor />} />
      </Routes>
    </MemoryRouter>
  );

beforeEach(() => {
  jest.clearAllMocks();
  window.scrollTo = jest.fn();
  doc.mockImplementation((db, collection, id) => ({ id }));
  getDoc.mockResolvedValue({ exists: () => false });
  setDoc.mockResolvedValue();
});

test('fills the URL from the title and saves a draft with only a title', async () => {
  renderEditor();
  userEvent.type(screen.getByLabelText('Title'), 'Swift Service: 5 Tips!');
  expect(screen.getByLabelText('Page URL')).toHaveValue('swift-service-5-tips');

  userEvent.click(screen.getByRole('button', { name: 'Save draft' }));
  await waitFor(() => expect(setDoc).toHaveBeenCalledTimes(1));
  const [ref, saved] = setDoc.mock.calls[0];
  expect(ref.id).toBe('swift-service-5-tips');
  expect(saved.status).toBe('draft');
  expect(saved.publishedAt).toBe('');
});

test('shows unsaved changes until the draft is saved', async () => {
  renderEditor();
  expect(screen.getByText('Not saved yet')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Title'), 'A post');
  expect(screen.getByText('Unsaved changes')).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: 'Save draft' }));
  expect(await screen.findByText(/^Saved at /)).toBeInTheDocument();
  // No reload after the first save, which would reset the editor.
  expect(screen.getByLabelText('Title')).toHaveValue('A post');
  expect(getDoc).toHaveBeenCalledTimes(1);
});

test('blocks publishing until the required fields are filled', async () => {
  renderEditor();
  userEvent.type(screen.getByLabelText('Title'), 'A post');
  userEvent.click(screen.getByRole('button', { name: 'Publish' }));

  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent('Add a short summary.');
  expect(alert).toHaveTextContent('Upload a cover image.');
  expect(alert).toHaveTextContent('Write the post text.');
  expect(setDoc).not.toHaveBeenCalled();
});

test('treats a body with only empty paragraphs as empty', async () => {
  renderEditor();
  userEvent.type(screen.getByLabelText('Title'), 'A post');
  userEvent.paste(screen.getByLabelText('Post text'), '<p> </p><p></p>');
  userEvent.click(screen.getByRole('button', { name: 'Publish' }));
  expect(await screen.findByRole('alert')).toHaveTextContent(
    'Write the post text.'
  );
});

test('rejects a new post whose URL is already taken', async () => {
  getDoc.mockResolvedValue({ exists: () => true });
  renderEditor();
  userEvent.type(screen.getByLabelText('Title'), 'Taken');
  userEvent.click(screen.getByRole('button', { name: 'Save draft' }));

  expect(await screen.findByRole('alert')).toHaveTextContent(
    'Another post already uses this URL.'
  );
  expect(setDoc).not.toHaveBeenCalled();
});

const publishedPost = {
  title: 'Live post',
  excerpt: 'Summary',
  coverImage: 'https://ik.imagekit.io/x/a.webp',
  coverImageAlt: 'A car',
  body: '<p>Text</p>',
  status: 'published',
  publishedAt: '2026-01-01T00:00:00.000Z',
  createdAt: '2026-01-01T00:00:00.000Z',
};

test('keeps the original publish date when a live post is updated', async () => {
  getDoc.mockResolvedValue({ exists: () => true, data: () => publishedPost });
  renderEditor('/admin/edit/live-post');

  const update = await screen.findByRole('button', { name: 'Update post' });
  expect(screen.getByLabelText('Page URL')).toBeDisabled();
  userEvent.click(update);

  await waitFor(() => expect(setDoc).toHaveBeenCalledTimes(1));
  expect(setDoc.mock.calls[0][1].publishedAt).toBe(publishedPost.publishedAt);
});

test('moves a published post back to draft', async () => {
  getDoc.mockResolvedValue({ exists: () => true, data: () => publishedPost });
  renderEditor('/admin/edit/live-post');

  userEvent.click(await screen.findByRole('button', { name: 'Move to draft' }));
  await waitFor(() => expect(setDoc).toHaveBeenCalledTimes(1));
  expect(setDoc.mock.calls[0][1].status).toBe('draft');
});

test('blocks publishing when an image in the text has no description', async () => {
  getDoc.mockResolvedValue({
    exists: () => true,
    data: () => ({
      ...publishedPost,
      body: '<p>Text</p><img src="https://ik.imagekit.io/x/b.webp" alt="">',
    }),
  });
  renderEditor('/admin/edit/live-post');

  userEvent.click(await screen.findByRole('button', { name: 'Update post' }));
  expect(await screen.findByRole('alert')).toHaveTextContent(
    'Add a description to every image'
  );
  expect(setDoc).not.toHaveBeenCalled();
});
