var quotes = require('../lib/quotes.js');
var expect = require('chai').expect;

suite ('Quotes tests...', function(){
    test('getQuote() function should return a quote', function(){
        expect(typeof quotes.getQuote() === 'string');
    });
});