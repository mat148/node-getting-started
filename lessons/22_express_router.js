exports.startRouter = function() {
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');
    const app = express();

    app.use('/public', express.static(path.join(__dirname, '../static')));
    app.set('view engine', 'ejs');

    const people = require('../routes/people');

    app.use('/people', people);

    app.listen(3000);
}