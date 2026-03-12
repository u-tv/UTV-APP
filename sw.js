const CACHE_NAME = 'u-tv-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Service Worker Install करना
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// नेटवर्क से फाइलें फेच करना
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
