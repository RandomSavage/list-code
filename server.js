const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoriesData = require('./data/categories.js');
const citiesData = require('./data/cities.js');
const itemsData = require('./data/items.js');

//create the express app
const app = express();

//create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, 'build')));

//api
app.get('/api/cities', (req, res) => {
  res.json(citiesData);
});
app.get('/api/:city/:categories', (req, res) => {
  res.json(categoriesData);
});
app.get('/api/:city/:categories/:listing/:item', (req, res) => {
  res.json(itemsData);
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// create default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started on ' + port);
// console.log(`server started on {port}`);
