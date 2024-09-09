const preload = (href, as) => {
  const preloadLink = document.createElement("link");
  preloadLink.href = href;
  preloadLink.rel = "preload";
  preloadLink.as = as;
  if (as === "font") {
    preloadLink.crossOrigin = "true";
  }
  document.head.appendChild(preloadLink);
};

const images_root = [
  "./images/text.webp",
  "./images/header.webp",
  "./images/header2.webp",
  "./images/header3.webp",
  "./images/div.webp"
];

const fonts = [
  "./font/Poppins-Black.ttf",
  "./font/Poppins-Bold.ttf",
  "./font/Poppins-ExtraBold.ttf",
  "./font/Poppins-ExtraLight.ttf",
  "./font/Poppins-Light.ttf",
  "./font/Poppins-Medium.ttf",
  "./font/Poppins-Regular.ttf",
  "./font/Poppins-SemiBold.ttf",
  "./font/Poppins-Thin.ttf",
  "./font/Poppins-SemiBold.ttf",
  "./webfonts/fa-brands-400.ttf",
  "./webfonts/fa-solid-900.ttf",
];

for (const index of images_root) {

  preload(index, "image");
}

for (const index of fonts) {

  preload(index, "font");
}
