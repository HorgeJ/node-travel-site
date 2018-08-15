var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Silver State Travel');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About Silver State Travel');
});

// 404 Page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 500 Page
app.use(function(req, res){
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+c to terminate...')
});