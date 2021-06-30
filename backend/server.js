const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpErrors = require('./models/Http-errors');

const hostname = '127.0.0.1';
const port = 4000;

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpErrors('could not find this routes.', 404);
  throw error;
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }

  res.status(error.status || 500).json({ message: error.message || 'An unknown Error occured' })
})

mongoose
  .connect("mongodb+srv://drcyberx:drcyberx@cluster0.yyra3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true })
  .then(()=>{
    app.listen(port, hostname, () => {
      console.log(`The backend Server is running at http://${hostname}:${port}`)
    })
  })  
  .catch((error)=>{
    console.log("can't connect to db", error)
  })
