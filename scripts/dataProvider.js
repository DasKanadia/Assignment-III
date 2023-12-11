const path = require('path'); 
const fs = require('fs');

// File pathways, data, and parsed JSON (variable names: 'file''condition')
const paintingsPath = path.join(__dirname, "../data", "/paintings-nested.json");
const artistsPath = path.join(__dirname, "../data", "/artists.json");
const galleriesPath = path.join(__dirname, "../data", "/galleries.json");

const paintingsData = fs.readFileSync(paintingsPath, 'utf8');
const artistsData = fs.readFileSync(artistsPath, 'utf8');
const galleriesData = fs.readFileSync(galleriesPath, 'utf8');

const paintings = JSON.parse(paintingsData);
const artists = JSON.parse(artistsData);
const galleries = JSON.parse(galleriesData);

module.exports = {artists, galleries, paintings};