const express = require('express');

const hostname = '127.0.0.1';
const port = 4000;

const app = express();


app.listen(port, hostname, ()=>{
  console.log(`The backend Server is running at http://${hostname}:${port}`)
});