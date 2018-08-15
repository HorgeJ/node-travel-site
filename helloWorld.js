var http = require('http');

http.createServer(function(req,res){
    // Normalize URL bu removing querystring, optional
    // trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase(); // replace any char. in url and make string lowercase
    switch(path){
        case '':    res.writeHead(200,{'Content-Type': 'text/plain'});
                    res.end('Homepage');
                    break;
        case '/about':
                    res.writeHead(200,{'Content-Type': 'text/plain'});
                    res.end('About');
                    break;
        default:    res.writeHead(404,{'Content-Type': 'text/plain'});
                    res.end('Not Found');
                    break;
    }

}).listen(3000);

console.log("Server started on localhost:3000. Press Ctrl-c to terminate...");