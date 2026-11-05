// Tests only. Browsers have IntersectionObserver, which Headless UI's dialog needs,
// but the test environment doesn't.
class TestIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = TestIntersectionObserver;
