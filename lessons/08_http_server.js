exports.createHttpServer = function() {
    const http = require('http');
    const server = http.createServer((req, res)=>{
        //res.write('Hello World!');
        //res.end();

        if(req.url === '/'){
            res.write("hello world");
            res.end();
        }
        else {
            res.write('using other domain');
            res.end();
        }
    });

    server.listen('3000');
}