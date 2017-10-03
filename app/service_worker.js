self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('resources').then(function(cache) {
      return cache.addAll([
        '/css/style.css',
        '/assets/brand/facebook.svg',
        '/assets/brand/foursquare.png',
        '/assets/brand/twitter.svg',
        '/assets/wandr-logo.svg',
        '/assets/js/itinerary.js',
        '/assets/js/landing.js',
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
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    .catch(function (err) {
        // swallow error

        //console.log(err.stack);
    })
  );
});
