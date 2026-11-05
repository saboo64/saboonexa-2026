import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { MdClose, MdCloudUpload } from 'react-icons/md';
import { auth } from '../../lib/firebase';
import {
  ACCEPTED_IMAGE_TYPES,
  formatFileSize,
  imageFileProblem,
  uploadBlogImage,
} from '../../lib/imagekit';

export const DISPLAY_SIZES = [
  { value: 'small', label: 'Small', hint: '33%', width: '33%' },
  { value: 'medium', label: 'Medium', hint: '50%', width: '50%' },
  { value: 'large', label: 'Large', hint: '75%', width: '75%' },
  { value: 'full', label: 'Full', hint: '100%', width: '100%' },
];

const COVER_MIN_WIDTH = 1200;

// Picks a file, previews it, then uploads it to ImageKit with a progress bar.
// mode 'cover' has a fixed size; mode 'body' also asks for a display size.
const ImageUploadDialog = ({
  mode,
  onClose,
  onUploaded,
  folder,
  title,
  sizeHint = '1200 × 675 px or larger works best.',
  minWidth = COVER_MIN_WIDTH,
}) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [dimensions, setDimensions] = useState(null);
  const [alt, setAlt] = useState('');
  const [size, setSize] = useState('full');
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState('');
  const [altMissing, setAltMissing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const abortRef = useRef(null);
  const inputRef = useRef(null);

  const uploading = progress !== null;
  const isCover = mode === 'cover';

  useEffect(() => {
    if (!file) return undefined;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const chooseFile = (candidate) => {
    if (!candidate) return;
    const problem = imageFileProblem(candidate);
    if (problem) {
      setError(problem);
      return;
    }
    setError('');
    setDimensions(null);
    setFile(candidate);
  };

  const upload = async () => {
    if (!alt.trim()) {
      setAltMissing(true);
      return;
    }
    setError('');
    setProgress(0);
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const idToken = await auth.currentUser.getIdToken();
      const url = await uploadBlogImage(file, idToken, {
        onProgress: setProgress,
        signal: controller.signal,
        folder,
      });
      onUploaded({ url, alt: alt.trim(), size });
    } catch (err) {
      setProgress(null);
      if (err.name !== 'AbortError') {
        console.error('Image upload failed:', err);
        setError(err.message);
      }
    }
  };

  const close = () => {
    if (!uploading) onClose();
  };

  const coverTooSmall =
    isCover && dimensions && dimensions.width < minWidth;

  return (
    <Dialog open onClose={close} className='relative z-50'>
      <div className='fixed inset-0 bg-gray-900/60' aria-hidden />
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-full p-4'>
          <Dialog.Panel className='w-full max-w-3xl bg-white shadow-2xl rounded-2xl'>
            <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200'>
              <Dialog.Title className='text-lg font-bold text-nexa'>
                {title ||
                  (isCover ? 'Upload cover image' : 'Add an image to the post')}
              </Dialog.Title>
              <button
                type='button'
                aria-label='Close'
                disabled={uploading}
                onClick={close}
                className='p-1 text-gray-500 rounded-md hover:bg-gray-100 disabled:opacity-40'
              >
                <MdClose size={22} />
              </button>
            </div>

            <div className='px-6 py-5'>
              {!file ? (
                <div
                  onDragOver={(event) => {
                    event.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(event) => {
                    event.preventDefault();
                    setDragging(false);
                    chooseFile(event.dataTransfer.files[0]);
                  }}
                  className={`flex flex-col items-center justify-center px-6 text-center border-2 border-dashed rounded-xl py-14 transition ${
                    dragging
                      ? 'border-nexa bg-blue-50'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  <MdCloudUpload
                    size={44}
                    className='mb-2 text-nexa'
                    aria-hidden
                  />
                  <p className='font-semibold text-gray-800'>
                    Drag an image here
                  </p>
                  <p className='mb-4 text-sm text-gray-500'>
                    JPG, PNG, WebP, or AVIF, up to 5 MB
                    {isCover && `. ${sizeHint}`}
                  </p>
                  <button
                    type='button'
                    onClick={() => inputRef.current.click()}
                    className='px-4 py-2 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d]'
                  >
                    Choose image
                  </button>
                </div>
              ) : (
                <div className='grid gap-6 md:grid-cols-[1fr_260px]'>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-700'>
                      Preview
                      {!isCover && ` at ${DISPLAY_SIZES.find((s) => s.value === size).hint} of the post width`}
                    </p>
                    <div className='flex items-center justify-center p-3 bg-gray-100 rounded-xl min-h-[260px]'>
                      <div
                        className='relative overflow-hidden rounded-lg'
                        style={{
                          width: isCover
                            ? '100%'
                            : DISPLAY_SIZES.find((s) => s.value === size).width,
                        }}
                      >
                        {previewUrl && (
                          <img
                            src={previewUrl}
                            alt='Preview of the chosen file'
                            onLoad={(event) =>
                              setDimensions({
                                width: event.target.naturalWidth,
                                height: event.target.naturalHeight,
                              })
                            }
                            className={`block w-full h-auto transition ${
                              uploading ? 'opacity-50' : ''
                            }`}
                          />
                        )}
                      </div>
                    </div>
                    {uploading && (
                      <div className='mt-3'>
                        <div className='flex justify-between mb-1 text-sm font-medium'>
                          <span>{progress < 100 ? 'Uploading…' : 'Finishing…'}</span>
                          <span>{progress}%</span>
                        </div>
                        <div
                          role='progressbar'
                          aria-label='Upload progress'
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={progress}
                          className='h-2 overflow-hidden bg-gray-200 rounded-full'
                        >
                          <div
                            className='h-full transition-all rounded-full bg-nexa'
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='space-y-4'>
                    <dl className='p-3 text-sm rounded-lg bg-gray-50'>
                      <dt className='text-xs text-gray-500'>File</dt>
                      <dd className='mb-2 font-medium break-all'>{file.name}</dd>
                      <dt className='text-xs text-gray-500'>File size</dt>
                      <dd className='mb-2 font-medium'>
                        {formatFileSize(file.size)}
                      </dd>
                      <dt className='text-xs text-gray-500'>Dimensions</dt>
                      <dd className='font-medium'>
                        {dimensions
                          ? `${dimensions.width} × ${dimensions.height} px`
                          : 'Reading…'}
                      </dd>
                    </dl>
                    {coverTooSmall && (
                      <p className='text-sm text-amber-700'>
                        This image is under {minWidth} px wide, so it may look
                        blurry.
                      </p>
                    )}

                    {!isCover && (
                      <fieldset disabled={uploading}>
                        <legend className='mb-1 text-sm font-medium'>
                          Display size
                        </legend>
                        <div className='grid grid-cols-2 gap-2'>
                          {DISPLAY_SIZES.map((option) => (
                            <label
                              key={option.value}
                              className={`cursor-pointer rounded-lg border px-3 py-2 text-sm ${
                                size === option.value
                                  ? 'border-nexa bg-blue-50 font-semibold text-nexa'
                                  : 'border-gray-300'
                              }`}
                            >
                              <input
                                type='radio'
                                name='image-size'
                                value={option.value}
                                checked={size === option.value}
                                onChange={() => setSize(option.value)}
                                className='sr-only'
                              />
                              {option.label}
                              <span className='block text-xs font-normal text-gray-500'>
                                {option.hint}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    )}

                    <div>
                      <label
                        htmlFor='image-alt'
                        className='block mb-1 text-sm font-medium'
                      >
                        Image description
                      </label>
                      <textarea
                        id='image-alt'
                        rows={2}
                        disabled={uploading}
                        value={alt}
                        aria-invalid={altMissing}
                        onChange={(event) => {
                          setAlt(event.target.value);
                          setAltMissing(false);
                        }}
                        placeholder='e.g. Blue Maruti Grand Vitara outside the showroom'
                        className={`w-full p-2 text-sm border rounded-lg ${
                          altMissing ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      <p
                        className={`text-xs ${
                          altMissing ? 'text-red-600' : 'text-gray-500'
                        }`}
                      >
                        {altMissing
                          ? 'Add a description before uploading.'
                          : 'Used by screen readers and Google.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <input
                ref={inputRef}
                type='file'
                data-testid='image-file-input'
                accept={ACCEPTED_IMAGE_TYPES.join(',')}
                onChange={(event) => {
                  chooseFile(event.target.files[0]);
                  event.target.value = '';
                }}
                className='hidden'
              />

              {error && (
                <p role='alert' className='mt-4 text-sm text-red-600'>
                  {error}
                </p>
              )}
            </div>

            <div className='flex flex-wrap items-center justify-end gap-2 px-6 py-4 border-t border-gray-200'>
              {file && !uploading && (
                <button
                  type='button'
                  onClick={() => inputRef.current.click()}
                  className='px-4 py-2 mr-auto text-sm font-semibold text-nexa'
                >
                  Choose a different image
                </button>
              )}
              {uploading ? (
                <button
                  type='button'
                  onClick={() => abortRef.current.abort()}
                  className='px-4 py-2 font-semibold border border-gray-300 rounded-lg'
                >
                  Cancel upload
                </button>
              ) : (
                <button
                  type='button'
                  onClick={close}
                  className='px-4 py-2 font-semibold border border-gray-300 rounded-lg'
                >
                  Cancel
                </button>
              )}
              {file && (
                <button
                  type='button'
                  disabled={uploading}
                  onClick={upload}
                  className='px-4 py-2 font-semibold text-white rounded-lg bg-nexa hover:bg-[#2d2d2d] disabled:opacity-60'
                >
                  {isCover ? 'Upload image' : 'Upload and insert'}
                </button>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

ImageUploadDialog.propTypes = {
  mode: PropTypes.oneOf(['cover', 'body']).isRequired,
  onClose: PropTypes.func.isRequired,
  onUploaded: PropTypes.func.isRequired,
  folder: PropTypes.string,
  title: PropTypes.string,
  sizeHint: PropTypes.string,
  minWidth: PropTypes.number,
};

export default ImageUploadDialog;
