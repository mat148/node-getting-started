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
    app.use('/example', (req, res, next)=>{
        console.log(req.url, req.method);
        next();
    });
   
    app.get('/', (req, res)=> {
        res.send("Hello World");
    });

    app.listen(3000);
}