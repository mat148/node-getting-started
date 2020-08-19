exports.startExpress = function() {
    const express = require('express');
    const path = require('path');
    const app = express();

    app.use('/public', express.static(path.join('./', 'static')));
    //console.log(__dirname);
    app.get('/', (req, res)=> {
        res.sendfile(path.join('./', 'static', 'index.html'));
    });

    app.listen(3000);
}