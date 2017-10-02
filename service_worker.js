self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('resources').then(function(cache) {
      return cache.addAll([
        '/app/css/style.css',
        '/app/assets/brand/facebook.svg',
        '/app/assets/brand/foursquare.png',
        '/app/assets/brand/twitter.svg',
        '/app/assets/wandr-logo.svg',
        '/app/assets/js/itinerary.js',
        '/app/assets/js/landing.js',
        '/app/assets/arrow-left.svg',
        '/app/assets/arrow-right.svg',
        '/app/assets/edit_24.svg',
        '/app/assets/genre_32.svg',
        '/app/assets/pin-filled.svg',
        '/app/assets/pin-unfilled.svg',
        '/app/assets/refresh_32.svg',
        '/app/assets/reset_32.svg',
        '/app/assets/travel-node_active.svg',
        '/app/assets/travel-node.svg'
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