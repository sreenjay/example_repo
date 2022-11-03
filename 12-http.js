const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.end("Welcome to my Homepage");
    }
    if(req.url === '/about'){
        res.end("Something about us");
    }
    else{
        res.write(
            `<h1>Oops..</h1>
            <a href="/">Back Home</a>`
        )
        res.end();
    }
});

server.listen(5000);