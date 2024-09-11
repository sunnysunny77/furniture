const version = 1;
const cacheName = `furniture-v${version}`;

const cacheAssets = [
  "./",
  "./index.html",
  "./favicon.ico",
  "./manifest.json",
  "./css/app.min.css",
  "./js/app.min.js",
  "./js/preload.js",
  "./font/Poppins-Black.ttf",
  "./font/Poppins-Bold.ttf",
  "./font/Poppins-ExtraBold.ttf",
  "./font/Poppins-ExtraLight.ttf",
  "./font/Poppins-Light.ttf",
  "./font/Poppins-Medium.ttf",
  "./font/Poppins-Regular.ttf",
  "./font/Poppins-SemiBold.ttf",
  "./font/Poppins-Thin.ttf",
  "./webfonts/fa-regular-400.woff2",
  "./webfonts/fa-solid-900.woff2",
  "./images/chairs.webp",
  "./images/client-mobile.webp",
  "./images/client.webp",
  "./images/div.webp",
  "./images/finance.webp",
  "./images/header.webp",
  "./images/header2.webp",
  "./images/header3.webp",
  "./images/home.webp",
  "./images/layout.webp",
  "./images/living-room.webp",
  "./images/loft.webp",
  "./images/plus.webp",
  "./images/pwa-logo-small.webp",
  "./images/pwa-logo.webp",
  "./images/sitting.webp",
  "./images/text.webp",
  "./images/transport.webp",
  "./images/warehouse.webp",
  "./images/wood.webp"
];

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");

  event.waitUntil(caches.open(cacheName).then((cache) => {

    console.log("Caching assets");
    cache.addAll(cacheAssets);
  }).then(() => {

    self.skipWaiting();
  }));
});


self.addEventListener("fetch", event => {

  console.log("Fetching via Service worker");
  
  event.respondWith(caches.match(event.request).then(cachedResponse => {

    const networkUpdate = fetch(event.request).then(networkResponse => {

      caches.open(cacheName).then(cache => cache.put(event.request, networkResponse));
      return networkResponse.clone();
    }).catch(() => {

      return false;
    });

    return cachedResponse || networkUpdate;
  }));
});