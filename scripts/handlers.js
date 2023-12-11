const data = require('./dataProvider.js'); 

// -----------------------------------------------------------------//
// -------- getAll and /api/.../country handlers for .json files ---//
// -----------------------------------------------------------------//
const allPaintings = api =>{
    api.get('/api/paintings', (req,res) => {
        res.json(data.paintings);
    });
};

const allArtists = api =>{
    api.get('/api/artists', (req,res) => {
        res.json(data.artists);
    });
};

const allGalleries = api =>{
    api.get('/api/galleries', (req,res) => {
        res.json(data.galleries);
    });
};

const artistCountry = api => {
    api.get('/api/artists/:country', (req,res) => {
        const matches = data.artists.filter(u => u.Nationality.toLowerCase() === req.params.country.toLowerCase());
        if (matches.length > 0)
            res.json(matches);
        else
            res.json({"message": "no artist for provided country in artist database"});
    });
};

const galleryCountry = api => {
    api.get('/api/galleries/:country', (req,res) => {
        const matches = data.galleries.filter(u => u.GalleryCountry.toLowerCase() === req.params.country.toLowerCase());
        if (matches.length > 0)
            res.json(matches);
        else
            res.json({"message": "no galleries for provided country in galleries database"});
    });
};


// -----------------------------------------------------------------//
// -------- api/painting/.../:parameter related handlers -----------//
// -----------------------------------------------------------------//
const paintingId = api => {
    api.get('/api/painting/:id', (req,res) => {
        const matches = data.paintings.find(u => u.paintingID == req.params.id);
        if (matches)
            res.json(matches);
        else 
            res.json({"message": "no art for provided painting id"}); 
    }); 
};

const paintingGalleryId = api => {
    api.get('/api/painting/gallery/:id', (req,res) => {
        const matches = data.paintings.filter( u => u.gallery.galleryID == req.params.id);
        if (matches.length > 0)
            res.json(matches);
        else 
            res.json({"message": "no art for provided id in paintings database"}); 
    }); 
};

const paintingArtistId = api => {
    api.get('/api/painting/artist/:id', (req,res) => {
        const matches = data.paintings.filter( u => u.artist.artistID == req.params.id);
        if (matches.length > 0)
            res.json(matches);
        else 
            res.json({"message": "no art for provided id in paintings database"}); 
    }); 
};

const paintingArtistYearOfWork = api => {  
    api.get('/api/painting/year/:min/:max', (req, res) =>{
        const matches = data.paintings.filter( u => ((u.yearOfWork >= req.params.min) && (u.yearOfWork <= req.params.max))) 
        if (matches.length >0)
            res.json(matches);
        else 
            res.json({"message": "no art for provided year range in paintings database"}); 
    });
};

const paintingTitleText = api => {
    api.get('/api/painting/title/:text', (req,res) => {
        const matches = data.paintings.filter(u => u.title.toLowerCase().includes(req.params.text.toLowerCase()));
        if (matches.length > 0)
            res.json(matches);
        else
            res.json({"message": "no art with provided text in galleries database"});
    });
};

const paintingColor = api => {
    api.get('/api/painting/color/:colorSearch', (req,res) => {
        const matches = data.paintings.filter (u => u.details.annotation.dominantColors.some(
            (colorInner) => (colorInner.name.toLowerCase().includes(req.params.colorSearch.toLowerCase())
                || colorInner.web.includes(req.params.colorSearch)
                // Above line can search for exact hex, cannot use '#' character in :colorSearch
            )
        ));
        if (matches.length > 0)
            res.json(matches);
        else 
            res.json({"message": "no art for provided color name in paintings database"}); 
    }); 
};

module.exports = { 
    allPaintings, allArtists, allGalleries, artistCountry, galleryCountry,
    paintingId, paintingGalleryId, paintingArtistId, paintingTitleText,
    paintingArtistYearOfWork, paintingColor
};

