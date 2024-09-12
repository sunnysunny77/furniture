const version = 1;
const cacheName = `furniture-v${version}`;

const resources = [
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
  "./images/wood.webp",
  "./fallback.php"
];

const installResources = async (resources) => {

  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");
  
  self.skipWaiting();

  event.waitUntil(installResources(resources));
});

const stale = async (req) => {

  try {

    const cache = await caches.open(cacheName);

    if (cache) {

      const match = await cache.match(req);

      const res = await fetch(req);

      if (res && match) {

        await cache.put(req, res.clone());
      }

      return  match || res;
      
    }

  } catch (error) {

    console.log(error);
    
    const cache = await caches.match(req);
        
    if (cache) {

      return cache;
    }

    const fallback = await caches.match("./fallback.php");
      
    if (fallback) {

      return fallback;
    }

    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {

  console.log("Fetching via Service worker");

  event.respondWith(stale(event.request));
});