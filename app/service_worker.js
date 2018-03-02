var cacheName = "wandrAppShell-v0.2";

var myCache = [
  "/",
  "/index.html",
  "/itinerary.html",
  "/build/css/style.min.css",
  "/build/fonts/ClinicaPro-Regular-webfont.woff",
  "/build/fonts/ClinicaPro-Regular-webfont.woff2",
  "/assets/brand/facebook.svg",
  "/assets/brand/foursquare.png",
  "/assets/brand/twitter.svg",
  "/assets/wandr-logo.svg",
  "/js/itinerary.js",
  "/js/landing.js",
  "/assets/arrow-left.svg",
  "/assets/arrow-right.svg",
  "/assets/edit_24.svg",
  "/assets/genre_32.svg",
  "/assets/pin-filled.svg",
  "/assets/pin-unfilled.svg",
  "/assets/refresh_32.svg",
  "/assets/reset_32.svg",
  "/assets/travel-node_active.svg",
  "/assets/travel-node.svg",
  "/offline-404.html"
];

// cache the application shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(myCache);
    }).catch((error) => {
      console.error(error);
    })
  );
  //self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          if (response.type === "opaque") {
            return response;
          } else if (!response.ok) {
            throw new Error(response.statusText);
          } else {
            return caches.open(cacheName).then((cache) => {
              cache.put(event.request.url, response.clone());
              return response;
            }).catch((error) => {
              console.error(error);
              return false;
            });
          }
        }).catch((error) => {
          console.error(error);
          return caches.match("/offline-404.html");
        });
      })
    );
  }
});

// delete outdated caches in the activate event listener
self.addEventListener("activate", (event) => {
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