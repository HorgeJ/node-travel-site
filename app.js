var express = require('express');
var app = express();
var quote = require('./lib/quotes.js');

var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//Travel quotes array


// HOME route

app.get('/', function(req, res) {
	res.render('home');
});

// About route
app.get('/about', function(req, res){
    res.render('about', {quotes: quote.getQuote()});
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

// 500 Page
app.use(function(req, res){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+c to terminate...')
});