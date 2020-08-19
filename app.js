/*---------------------------
  calling a function from tutorial.js
  ---------------------------*/
const lesson01 = require('./lessons/01_calling_function');
//console.log(lesson01.sum(1,1));
//console.log(lesson01.PI);
//console.log(new lesson01.SomeMathObject());

/*---------------------------
  EVENT EMITTER
  ---------------------------*/
const lesson02 = require('./lessons/02_event_emitter');
//lesson02.emitEvent(3, 3);
//lesson02.pedroEmit;
//lesson02.matEmit;

/*---------------------------
  READLINE
  ---------------------------*/
/*const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput)=>{
    if(userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect answer, please try again\n');
        rl.prompt();
        rl.on('line', (userInput)=>{
            if(userInput.trim() == answer) {
                rl.close();
            }
            else {
                rl.setPrompt(`Your answer of ${ userInput } is inncorrect. Try again\n`);
                rl.prompt();
            }
        });
    }
});

//Readline is an extension of event emitter
rl.on('close', ()=>{
    console.log('Correct!');
});*/

/*---------------------------
  Working With File System Module (Creating,Reading,Deleting,Renaming) Files
  ---------------------------*/
/*const fs = require('fs');
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

//RENAME FILE
fs.rename('example.txt', 'example2.txt', (err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
});

//APPEND DATA
fs.appendFile('example2.txt', 'more test data', (err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
});

//DELETE FILE
fs.unlink('example2.txt', (err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
});*/

/*---------------------------
  Working With File System Module. Creating and Deleting Folders
  ---------------------------*/
/*const fs = require('fs');
//ADD FOLDER
fs.mkdir('tutorial', (err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
});

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

//DELETE MULTIPLE FILES WITHIN A FOLDER
fs.readdir('test', (err, files)=>{
    if(err) {
        console.log(err);
    }
    else {
        //console.log(files);
        for(let file of files) {
            fs.unlink('./test/' + file, (err)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log('success');
                }
            });
        }
    }
})*/

/*---------------------------
  Working with Readable and Writable Streams
  ---------------------------*/
/*const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

//Chunking data so that we dont have to wait for the whole file to be loaded in order to start working with the data
readStream.on('data', (chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);
});*/

/*---------------------------
  Pipes and Pipe Chaining. (Readable,Writable and Transform Streams)
  ---------------------------*/
/*const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');
//An easier way to send data to its destination
//Need a source stream and a destination stream
readStream.pipe(writeStream);

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
readStream.pipe(gunzip).pipe(writeStream);*/

/*---------------------------
  Creating a Http Server using the Http Module
  ---------------------------*/