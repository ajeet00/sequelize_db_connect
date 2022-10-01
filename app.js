const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('sequelize');
const app = express();
require('./models/index');
//const user = require('./models/index').user;

app.use(bodyParser.urlencoded({
    extended: false
}));


// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/upload_image', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.image)
});

app.get('/json', jsonParser, (req, res) => {
    res.json({
      "message": "Hello json"
    });
});


module.exports = app;