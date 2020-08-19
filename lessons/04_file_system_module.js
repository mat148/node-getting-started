const fs = require('fs');

exports.createFile = function(){
    //CREATE FILE
    fs.writeFile('example.txt', "this is a test", (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("File created");
            fs.readFile('example.txt', 'utf8', (err, file)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log(file);
                }
            })
        }
    });
}

exports.renameFile = function() {
    //RENAME FILE
    fs.rename('example.txt', 'example2.txt', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}

exports.appendData = function() {
    //APPEND DATA
    fs.appendFile('example2.txt', 'more test data', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}

exports.deleteFile = function() {
    //DELETE FILE
    fs.unlink('example2.txt', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}