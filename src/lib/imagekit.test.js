import { imagekitUrl } from './imagekit';

afterEach(() => {
  delete process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
});

test('adds the transform to ImageKit links, keeping any existing query', () => {
  expect(imagekitUrl('https://ik.imagekit.io/a/b.webp', 'w-800')).toBe(
    'https://ik.imagekit.io/a/b.webp?tr=w-800'
  );
  expect(imagekitUrl('https://ik.imagekit.io/a/b.webp?v=1', 'w-800')).toBe(
    'https://ik.imagekit.io/a/b.webp?v=1&tr=w-800'
  );
});

test('leaves other sites alone', () => {
  expect(imagekitUrl('https://images.example.com/b.webp', 'w-800')).toBe(
    'https://images.example.com/b.webp'
  );
});

test('treats the configured URL endpoint as ImageKit', () => {
  process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT =
    'https://images.example.com/saboo';
  expect(imagekitUrl('https://images.example.com/b.webp', 'w-800')).toBe(
    'https://images.example.com/b.webp?tr=w-800'
  );
});
