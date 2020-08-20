const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    res.send('/ being hit');
});

//Custom middleware function
route.use((req, res, next)=>{
    console.log('middleware being used');
    next();
});

route.get('/example', (req, res)=>{
    res.send('/example being hit');
});

module.exports = route;