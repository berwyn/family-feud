var express = require('express'),
    sass    = require('node-sass'),
    app     = express(),
    port    = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(sass.middleware({
    src: __dirname + '/style',
    dest: __dirname + '/public',
    debug: true,
    outputStyle: 'compressed'
}));
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {

});

app.get('/answer', function(req, res) {
    res.json({});
});

app.post('/answer', function(req, res) {

});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});