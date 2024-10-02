const url = 'http://192.168.7.1/logger';

const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
    
        console.log(message)
        this.emit('messageLogged',{id: 1, url: 'http://..'});
    }
}

module.exports = Logger

