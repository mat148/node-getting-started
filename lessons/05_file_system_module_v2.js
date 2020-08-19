const fs = require('fs');

exports.addFolder = function() {
    //ADD FOLDER
    fs.mkdir('tutorial', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}


exports.deleteFolder = function() {
    //DELETE FOLDER
    //This has to be used on a folder that is empty
    fs.rmdir('tutorial', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}

exports.addFile = function() {
    //ADD FILE
    fs.mkdir('tutorial', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            fs.writeFile('./tutorial/example.txt', 'test data', (err)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log('success');
                }
            });
        }
    });
}

exports.deleteFileDeleteFolder = function() {
    //DELETE FILE then DELETE FOLDER
    fs.unlink('./tutorial/example.txt', (err)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log('success File');
            fs.rmdir('tutorial', (err)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log('success Folder');
                }
            });
        }
    });
}

exports.deleteMultipleFiles = function() {
    //DELETE MULTIPLE FILES WITHIN A FOLDER
    fs.readdir('tutorial', (err, files)=>{
        if(err) {
            console.log(err);
        }
        else {
            //console.log(files);
            for(let file of files) {
                fs.unlink('./tutorial/' + file, (err)=>{
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log('success');
                    }
                });
            }
        }
    });
}