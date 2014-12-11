// server.js
// load the things we need
var express = require('express'),
    engine = require('ejs-locals'),
    routes = require('./routes/index');
    
var app = express();

// set the view engine to ejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


//routes
app.get('/', routes.index);
app.get('/about', routes.about);

app.listen(process.env.PORT);
