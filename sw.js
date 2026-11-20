// Umstell-Labor – Offline-Cache. Bei jeder Änderung VERSION erhöhen.
const VERSION = 'ulab-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'maskable-512.png',
  'fonts.css',
  "f1.woff2",
  "f10.woff2",
  "f11.woff2",
  "f12.woff2",
  "f13.woff2",
  "f14.woff2",
  "f15.woff2",
  "f2.woff2",
  "f3.woff2",
  "f4.woff2",
  "f5.woff2",
  "f6.woff2",
  "f7.woff2",
  "f8.woff2",
  "f9.woff2",
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Sofort aus dem Cache starten, im Hintergrund nach einer neuen Version schauen.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate';
  e.respondWith(caches.open(VERSION).then(async cache => {
    const key = isPage ? './index.html' : e.request;
    const cached = await cache.match(key);
    const fresh = fetch(e.request).then(res => {
      if (res && res.ok && new URL(e.request.url).origin === location.origin) cache.put(key, res.clone());
      return res;
    }).catch(() => null);
    if (cached) { e.waitUntil(fresh); return cached; }
    return (await fresh) || new Response('Offline', {status: 503});
  }));
});
