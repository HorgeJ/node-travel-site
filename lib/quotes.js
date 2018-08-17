//Travel quotes array
var quotes = [
    "What makes the desert beautiful is that somewhere it hides a well.",
    "A desert is a place without expectation.",
    "Night comes to the desert all at once, as if someone turned off all the light."
];

exports.getQuote = function(){
    var idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
};