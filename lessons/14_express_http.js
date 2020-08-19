exports.startExpress = function() {
    const express = require('express');
    const app = express();

    app.get('/', (req, res)=> {
        res.send("Hello World");
    });

    app.get('/example', (req, res)=>{
        res.send("example");
    });

    app.get('/example/:name/:age', (req, res)=>{
        //Route parameter
        //Use this if the app absolutely requires this data in order to function
        console.log(req.params);
        //Query String
        //Use this for optional setting
        console.log(req.query);
        res.send(req.params.name + " : " + req.params.age);
    });

    app.listen(3000);
}