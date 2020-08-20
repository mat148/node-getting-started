//Middleware is code that gets executed between the user request and the server
exports.middleware = function() {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');

    //Middleware function
    app.use(bodyParser.json());
    //Custom middleware
    //This will run with ANY user request
    /*app.use((req, res, next)=>{
        console.log(req.url, req.method);
        next();
    });*/

    //This middleware will execute on any method using this route
    //middleware can modify the request and response
    app.use('/example', (req, res, next)=>{
        //console.log(req.url, req.method);
        //req.banana = 'banana';
        next();
    });
   
    app.get('/', (req, res)=> {
        //console.log(req.banana);
        res.send("Hello World");
    });

    app.listen(3000);
}