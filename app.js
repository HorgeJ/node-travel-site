var express = require('express');
var app = express();

var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//Travel quotes array
var quotes = [
    "What makes the desert beautiful is that somewhere it hides a well.",
    "A desert is a place without expectation.",
    "Night comes to the desert all at once, as if someone turned off all the light."
];

// HOME route

app.get('/', function(req, res) {
	res.render('home');
});

// About route
app.get('/about', function(req, res){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.render('about', {quotes: randomQuote});
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