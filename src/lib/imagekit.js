const UPLOAD_URL = 'https://upload.imagekit.io/api/v1/files/upload';
const BLOG_FOLDER = '/popular_rks_nexa/blog/images';

export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
];

// A custom image domain only counts as ImageKit if it's set as the URL endpoint.
function isImagekitHost(hostname) {
  if (hostname === 'ik.imagekit.io') return true;
  try {
    return (
      hostname === new URL(process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT).hostname
    );
  } catch (err) {
    return false;
  }
}

// Asks ImageKit for a resized, modern-format copy, e.g. 'w-800,f-auto'.
export function imagekitUrl(url, transform) {
  if (!url || /[?&]tr=/.test(url)) return url;
  try {
    if (!isImagekitHost(new URL(url).hostname)) return url;
  } catch (err) {
    return url;
  }
  return `${url}${url.includes('?') ? '&' : '?'}tr=${transform}`;
}

export function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Returns a message to show the user, or null if the file can be uploaded.
export function imageFileProblem(file) {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return 'Please choose a JPG, PNG, WebP, or AVIF image.';
  }
  if (file.size > MAX_FILE_SIZE) {
    return `This image is ${formatFileSize(file.size)}. Images must be 5 MB or smaller.`;
  }
  return null;
}

// Gets a signature from our server, then sends the file straight to ImageKit.
export async function uploadBlogImage(
  file,
  idToken,
  { onProgress, signal, folder = BLOG_FOLDER } = {}
) {
  const problem = imageFileProblem(file);
  if (problem) throw new Error(problem);

  const authResponse = await fetch('/api/imagekit-auth', {
    method: 'POST',
    headers: { Authorization: `Bearer ${idToken}` },
    signal,
  });
  if (!authResponse.ok) {
    throw new Error('Could not authorize the upload. Please log in again.');
  }
  const { token, expire, signature, publicKey } = await authResponse.json();

  const form = new FormData();
  form.append('file', file);
  form.append('fileName', file.name);
  form.append('folder', folder);
  form.append('publicKey', publicKey);
  form.append('signature', signature);
  form.append('expire', String(expire));
  form.append('token', token);

  // XMLHttpRequest, because fetch can't report upload progress.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', UPLOAD_URL);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    };
    xhr.onload = () => {
      let result = {};
      try {
        result = JSON.parse(xhr.responseText);
      } catch (err) {
        result = {};
      }
      if (xhr.status >= 200 && xhr.status < 300 && result.url) {
        resolve(result.url);
      } else {
        reject(new Error(result.message || 'The image upload failed.'));
      }
    };
    xhr.onerror = () =>
      reject(new Error('The upload failed. Check your connection and try again.'));
    xhr.onabort = () => {
      const error = new Error('Upload cancelled');
      error.name = 'AbortError';
      reject(error);
    };
    if (signal) signal.addEventListener('abort', () => xhr.abort());
    xhr.send(form);
  });
}
