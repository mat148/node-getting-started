const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=> {
    console.log(num1 + num2);
});

const emitEvent = (num1, num2)=> {
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

let pedro = new Person('Pedro');
let mat = new Person('Mat');
pedro.on('name', ()=> {
    console.log('My name is ' + pedro.name);
})
mat.on('name', ()=> {
    console.log('My name is ' + mat.name);
})

const pedroEmit = pedro.emit('name');
const matEmit = mat.emit('name');

module.exports = {
    emitEvent : emitEvent,
    pedroEmit : pedroEmit,
    matEmit : matEmit
}