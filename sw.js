const CACHE_NAME = 'green bite v1';
const ASSETS = [
  '/GreenBite-Website-/index.html',
  '/GreenBite-Website-/styles.css?v=1.3',
  '/GreenBite-Website-/app.js?v=1.3',
  '/GreenBite-Website-/icons/icon-192.png',
  '/GreenBite-Website-/icons/icon-512.png'
];


self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});


self.addEventListener('fetch', (event) => {
  const req = event.request;

  
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('offline.html'))
    );
    return;
  }

  
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});