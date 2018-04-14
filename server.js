//Install express server
const express = require('express');
var mongoose = require('mongoose');
var bluebird = require('bluebird')

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(process.env.PORT || 9000);

var mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1:27017/spot')
    .then(() => {
        console.log(`Succesfully Connected to the
Mongodb Database  at URL : mongodb://127.0.0.1:27017/spot`)
    })
    .catch(() => {
        console.log(`Error Connecting to the Mongodb 
Database at URL : mongodb://127.0.0.1:27017/spot`)
    })
