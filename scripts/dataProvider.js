const path = require('path'); 
const fs = require('fs');
// change data source to json file containing paintings 
const jsonPath = path.join(__dirname, '../', 'paintings.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonData);

module.exports = data;