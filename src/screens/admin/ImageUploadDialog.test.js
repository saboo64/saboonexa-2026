import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { uploadBlogImage } from '../../lib/imagekit';
import ImageUploadDialog from './ImageUploadDialog';

jest.mock('../../lib/firebase', () => ({
  auth: { currentUser: { getIdToken: async () => 'id-token' } },
}));
jest.mock('../../lib/imagekit', () => ({
  ...jest.requireActual('../../lib/imagekit'),
  uploadBlogImage: jest.fn(),
}));

const image = () =>
  new File([new Uint8Array(2048)], 'swift.png', { type: 'image/png' });
const pick = (file) =>
  userEvent.upload(screen.getByTestId('image-file-input'), file, undefined, {
    applyAccept: false,
  });

beforeEach(() => {
  URL.createObjectURL = () => 'blob:preview';
  URL.revokeObjectURL = () => {};
  // Headless UI's dialog expects this browser API, which the test environment lacks.
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('previews the chosen file with its details before uploading', () => {
  render(<ImageUploadDialog mode='body' onClose={() => {}} onUploaded={() => {}} />);
  pick(image());

  expect(screen.getByAltText('Preview of the chosen file')).toHaveAttribute(
    'src',
    'blob:preview'
  );
  expect(screen.getByText('swift.png')).toBeInTheDocument();
  expect(screen.getByText('2 KB')).toBeInTheDocument();
  expect(uploadBlogImage).not.toHaveBeenCalled();
});

test('rejects files that are too large or the wrong type', () => {
  render(<ImageUploadDialog mode='body' onClose={() => {}} onUploaded={() => {}} />);

  const big = new File([new Uint8Array(6 * 1024 * 1024)], 'big.png', {
    type: 'image/png',
  });
  pick(big);
  expect(screen.getByRole('alert')).toHaveTextContent('5 MB or smaller');

  pick(new File(['<svg/>'], 'logo.svg', { type: 'image/svg+xml' }));
  expect(screen.getByRole('alert')).toHaveTextContent('JPG, PNG, WebP, or AVIF');
  expect(screen.queryByAltText('Preview of the chosen file')).toBeNull();
});

test('requires a description before uploading', () => {
  render(<ImageUploadDialog mode='body' onClose={() => {}} onUploaded={() => {}} />);
  pick(image());
  userEvent.click(screen.getByRole('button', { name: 'Upload and insert' }));

  expect(
    screen.getByText('Add a description before uploading.')
  ).toBeInTheDocument();
  expect(uploadBlogImage).not.toHaveBeenCalled();
});

test('shows progress and returns the URL, description, and chosen size', async () => {
  let finish;
  uploadBlogImage.mockImplementation(
    (file, token, { onProgress }) =>
      new Promise((resolve) => {
        onProgress(40);
        finish = () => resolve('https://ik.imagekit.io/x/swift.png');
      })
  );
  const onUploaded = jest.fn();
  render(<ImageUploadDialog mode='body' onClose={() => {}} onUploaded={onUploaded} />);
  pick(image());

  userEvent.click(screen.getByRole('radio', { name: /Medium/ }));
  userEvent.type(screen.getByLabelText('Image description'), 'A red Swift');
  userEvent.click(screen.getByRole('button', { name: 'Upload and insert' }));

  await waitFor(() =>
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40')
  );
  expect(screen.getByAltText('Preview of the chosen file')).toBeInTheDocument();

  await act(async () => finish());
  await waitFor(() =>
    expect(onUploaded).toHaveBeenCalledWith({
      url: 'https://ik.imagekit.io/x/swift.png',
      alt: 'A red Swift',
      size: 'medium',
    })
  );
});

test('hides the display size for a cover image', () => {
  render(<ImageUploadDialog mode='cover' onClose={() => {}} onUploaded={() => {}} />);
  pick(image());
  expect(screen.queryByRole('radio')).toBeNull();
  expect(screen.getByRole('button', { name: 'Upload image' })).toBeInTheDocument();
});

test('uploads to the folder it is given', async () => {
  uploadBlogImage.mockResolvedValue('https://ik.imagekit.io/x/car.png');
  render(
    <ImageUploadDialog
      mode='cover'
      folder='/popular_rks_nexa/offers/cars'
      title='Upload car image'
      onClose={() => {}}
      onUploaded={() => {}}
    />
  );
  expect(screen.getByText('Upload car image')).toBeInTheDocument();
  pick(image());
  userEvent.type(screen.getByLabelText('Image description'), 'A car');
  userEvent.click(screen.getByRole('button', { name: 'Upload image' }));
  await waitFor(() => expect(uploadBlogImage).toHaveBeenCalled());
  expect(uploadBlogImage.mock.calls[0][2].folder).toBe('/popular_rks_nexa/offers/cars');
});

test('shows the error and allows a retry when an upload fails', async () => {
  uploadBlogImage.mockRejectedValue(new Error('The image upload failed.'));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  render(<ImageUploadDialog mode='cover' onClose={() => {}} onUploaded={() => {}} />);
  pick(image());
  userEvent.type(screen.getByLabelText('Image description'), 'A car');
  userEvent.click(screen.getByRole('button', { name: 'Upload image' }));

  expect(await screen.findByRole('alert')).toHaveTextContent(
    'The image upload failed.'
  );
  expect(screen.getByRole('button', { name: 'Upload image' })).toBeEnabled();
});
