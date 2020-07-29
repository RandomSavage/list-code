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
//shows all cities available
app.get('/api/cities', (req, res) => {
  res.json(citiesData);
});
//shows all categories available for a city
app.get('/api/:city', (req, res) => {
  res.json(categoriesData);
});
//This shows all the items for a category
app.get('/api/:city/:category', (req, res) => {
  console.log(req.params.city);
  const newData = itemsData.filter((item) => {
    return item.city == req.params.city && item.category == req.params.category
  })
  res.json(newData);
});
// show all the items for that listing example:electronics
app.get('/api/:city/:categories/:listing', (req, res) => {
  res.json(itemsData);
});
// show the item that was selected
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
