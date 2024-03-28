// Create web server
// 1. Load all the modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments.js');

// 2. Create server
http.createServer(function(req, res) {
    // 3. Parse the request containing file name
    var pathname = url.parse(req.url).pathname;

    // 4. Read the requested file content from file system
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.log(err);
            // 5. HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // 6. HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});

            // 7. Write the content of the file to response body
            res.write(data.toString());
        }

        // 8. End the response
        res.end();
    });
}).listen(8080);

// 9. Print URL for accessing server
console.log('Server running at http://');
