const express = require('express');
const app = express();
const path = require('path');
//const data = require('./paintings.json');

app.use('/static', express.static(path.join(__dirname,'static')));

// Router require + calls
const router = require('./scripts/handlers.js');
router.handleAll(app);
router.handleById(app);
router.handleByGallery(app);
router.handleByArtist(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`http://localhost:${port}/static/tester.html`);
});

/*
  /api/paintings
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
  /api/artists/sdfjjsdf /api/galleries
  /api/galleries/france
  /api/galleries/kcvhvxchbkcj 
*/