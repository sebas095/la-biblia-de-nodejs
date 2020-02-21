/* Event emitter propio*/
/* 
const Emitter = require('./emitter');
const emitter = new Emitter();

emitter.on('save', () => {
    console.log("On save activated 1");
});

emitter.on('save', () => {
    console.log("On save activated 2");
});

emitter.emit('save'); */

// Event emitter nativo de node
const { EventEmitter } = require('events');
const { SAVE } = require('./event-names');

const emitter = new EventEmitter();

emitter.on(SAVE, () => {
    console.log("On save activated 1");
});

emitter.on(SAVE, () => {
    console.log("On save activated 2");
});

emitter.emit(SAVE);