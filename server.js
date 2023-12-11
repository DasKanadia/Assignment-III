const express = require('express');
const api = express();
const path = require('path');

// Router require + calls
const router = require('./scripts/handlers.js');

router.allPaintings(api);
router.allArtists(api);
router.allGalleries(api);

router.paintingId(api);
router.paintingGalleryId(api);
router.paintingArtistId(api);
router.paintingTitleText(api);
router.paintingColor(api);

router.artistCountry(api);
router.galleryCountry(api);
router.paintingArtistYearOfWork(api);

let port = 8080;
api.listen(port, () => {
  console.log(`http://localhost:${port}/api/painting/color/NAPA`);
  console.log(`http://localhost:${port}/api/painting/color/coffee%20bean`);
  console.log(`http://localhost:${port}/api/painting/kcvhvxchbkcj`);
});

/*
  /api/painting
  /api/painting/433
  /api/painting/43374534856
  /api/painting/gallery/7
  /api/painting/gallery/43374534856
  /api/painting/artist/106
  /api/painting/artist/43374534856
  /api/painting/year/1850/1900
  /api/painting/year/2200/2400
  /api/painting/title/self
  /api/painting/title/dfjkghdfkgh
  /api/painting/color/NAPA
  /api/painting/color/coffee%20bean
  /api/painting/color/kcvhvxchbkcj
  /api/artists /api/artists/Netherlands
  /api/artists/sdfjjsdf 
  /api/galleries
  /api/galleries/france
  /api/galleries/kcvhvxchbkcj 
*/