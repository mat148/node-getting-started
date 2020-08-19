const fs = require('fs');

exports.pipeStream = function() {
    const readStream = fs.createReadStream('./example.txt', 'utf8');
    const writeStream = fs.createWriteStream('example2.txt');
    //An easier way to send data to its destination
    //Need a source stream and a destination stream
    readStream.pipe(writeStream);
}


exports.zipFile = function() {
    //PIPE CHAINING
    //ZIP FILE
    const fs = require('fs');
    //zlib is a module for compressing files
    const zlib = require('zlib');
    //A transform stream takes in a stream and minipulates the data into something else
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream('./example.txt', 'utf8');
    const writeStream = fs.createWriteStream('example2.gz');
    //An easier way to send data to its destination
    //Need a source stream and a destination stream
    readStream.pipe(gzip).pipe(writeStream);
}


exports.unzipFile = function() {
    //UNZIP FILE
    const fs = require('fs');
    //zlib is a module for compressing files
    const zlib = require('zlib');
    //A transform stream takes in a stream and minipulates the data into something else
    const gunzip = zlib.createGunzip();
    const readStream = fs.createReadStream('./example2.txt.gz');
    const writeStream = fs.createWriteStream('example3.txt');
    //An easier way to send data to its destination
    //Need a source stream and a destination stream
    readStream.pipe(gunzip).pipe(writeStream);
}