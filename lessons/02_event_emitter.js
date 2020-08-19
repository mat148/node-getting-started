const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

exports.emitEvent = function(num1, num2) {
    eventEmitter.on('tutorial', ()=> {
        console.log(num1 + num2);
    });

    eventEmitter.emit('tutorial',num1,num2);
}

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

exports.pedro = function() {
    let pedro = new Person('Pedro');

    pedro.on('name', ()=> {
        console.log('My name is ' + pedro.name);
    });

    const pedroEmit = pedro.emit('name');
}

exports.mat = function() {
    let mat = new Person('Mat');

    mat.on('name', ()=> {
        console.log('My name is ' + mat.name);
    })

    const matEmit = mat.emit('name');
}