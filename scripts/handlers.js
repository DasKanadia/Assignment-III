const data = require('./dataProvider.js'); 
 
const handleAll = app => { 
    app.get('/', (req,resp) => {
        resp.json(data);
    }); 
};
 
const handleById = app => { 
    app.get('/:id', (req,resp) => {  
        const matches = data.filter( u => u.paintingID == req.params.id);
        if (matches.length > 0) 
            resp.json(matches); 
        else 
            resp.json({"message": "no art for provided id"}); 
    }); 
};

const handleByGallery = app => { 
    app.get('/gallery/:id', (req,resp) => {  
        const matches = data.filter( u => u.gallery.galleryID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else 
            resp.json({"message": "no art for provided id in gallery"});
    }); 
};
 
const handleByArtist = app => { 
    app.get('/artist/:id', (req,resp) => {  
        const matches = data.filter( u => u.artist.artistID == req.params.id); 
        if (matches.length > 0)
            resp.json(matches);
        else 
            resp.json({"message": "no art for provided id for artist"});
    }); 
};

module.exports = { 
    handleAll, handleById, handleByGallery, handleByArtist
};

// Gallery-Filter 

// // Artist-Filter
// app.get('/artist/:id', (req, res) =>{
    
// });

// // yearOfWork-Filter
// app.get('/year/min/max', (req, res) =>{
    
// });