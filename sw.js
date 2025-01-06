const CACHE_NAME = 'trading-bot-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', // Add any other CSS/JS files you use
  '/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
