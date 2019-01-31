//Install express server
const express = require('express');
var mongoose = require('mongoose');
var bluebird = require('bluebird')
require('dotenv').config();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(process.env.PORT || 9000);

var mongoose = require('mongoose')
mongoose.Promise = bluebird
let database = process.env.database
let user = process.env.user
let pass = process.env.pass
console.info(database);
var mongoDB = `mongodb://${user}:${pass}@${database}`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongodb://<dbuser>:<dbpassword>@ds227469.mlab.com:27469/search-spotify
// mongoose.connect("mongodb://localhost:27017/spot", function (err, db) {

//     db.collection('Persons', function (err, collection) {

//         collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
//         collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
//         collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });



//         db.collection('Persons').count(function (err, count) {
//             if (err) throw err;

//             console.log('Total Rows: ' + count);
//         });
//     });

// });