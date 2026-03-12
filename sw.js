const cacheName = 'utv-v11';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(['./', './index.html', './manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
