var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            response.end("Hello");
            break;
    }
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})