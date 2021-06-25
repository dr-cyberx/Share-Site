const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const hostname = '127.0.0.1';
const port = 4000;

const app = express();

app.use('/api/places', placesRoutes);

app.listen(port, hostname, ()=>{
  console.log(`The backend Server is running at http://${hostname}:${port}`)
});