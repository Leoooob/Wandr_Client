var cacheName = 'wandrAppShell';

var myCache = [
  '/',
  '/index.html',
  '/itinerary.html',
  '/build/css/style.min.css',
  '/build/fonts/ClinicaPro-Regular-webfont.woff',
  '/build/fonts/ClinicaPro-Regular-webfont.woff2',
  '/assets/brand/facebook.svg',
  '/assets/brand/foursquare.png',
  '/assets/brand/twitter.svg',
  '/assets/wandr-logo.svg',
  '/js/itinerary.js',
  '/js/landing.js',
  '/assets/arrow-left.svg',
  '/assets/arrow-right.svg',
  '/assets/edit_24.svg',
  '/assets/genre_32.svg',
  '/assets/pin-filled.svg',
  '/assets/pin-unfilled.svg',
  '/assets/refresh_32.svg',
  '/assets/reset_32.svg',
  '/assets/travel-node_active.svg',
  '/assets/travel-node.svg'
];

// cache the application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache.addAll(myCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
        // shorthand of above
        //return response || fetchAndCache(event.request);
      })
    );
  }
});

// delete outdated caches in the activate event listener
self.addEventListener('activate', (event) => {
  var cacheWhitelist = [cacheName];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
