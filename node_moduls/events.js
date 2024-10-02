
const Logger = require('../logger')
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log("listnerer ", arg);

})

logger.log('Hello world')







