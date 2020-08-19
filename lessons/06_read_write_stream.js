const fs = require('fs');
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sapien ultricies, venenatis eros nec, laoreet lacus. Nam volutpat magna sit amet libero auctor porttitor. Vestibulum eget elit commodo, dictum justo quis, congue sapien. Sed accumsan, lectus sed rutrum dapibus, augue arcu iaculis sem, varius rhoncus ligula urna id justo. Aenean augue mi, porttitor dapibus erat consectetur, hendrerit ornare tellus. Cras efficitur ex eu consequat ornare. Curabitur pulvinar in elit non imperdiet. Curabitur in cursus tellus. Donec nec volutpat mi, eget viverra nibh. Integer libero neque, interdum id imperdiet eget, volutpat ornare urna. In euismod lacus nec dictum porttitor. Aliquam erat volutpat. Nunc gravida luctus faucibus. Sed non enim in enim feugiat pharetra vulputate non sem.';

exports.writeFile = function() {
    //CREATE FILE
    fs.writeFile('example.txt', lorem, (err)=>{
        if(err) {
            console.log(err);
            //DELETE FILE
            fs.unlink('example2.txt', (err)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log('success');
                    readWriteStream();
                }
            });
        }
        else {
            console.log("File created");
            readWriteStream();
        }
    });
}

readWriteStream = function() {
    const readStream = fs.createReadStream('./example.txt', 'utf8');
    const writeStream = fs.createWriteStream('example2.txt');

    //Chunking data so that we dont have to wait for the whole file to be loaded in order to start working with the data
    readStream.on('data', (chunk)=>{
        //console.log(chunk);
        writeStream.write(chunk);
    });
}