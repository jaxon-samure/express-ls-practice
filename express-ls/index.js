const express = require('express')
const app = express()
const Joi = require("joi")
const log = require("./middleware/logger")
const helmet = require('helmet')
const morgan = require('morgan')
const books = require("./routes/books")
const home = require('./routes/home')

app.use(express.json());
app.use(helmet());
app.use(log);
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use('/api/books', books);
app.use('/', home)

app.set('view engine', 'pug')
app.set('views', './views')



console.log(process.env.NODE_ENV);
console.log(app.get('env'));


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(` ${port} ni eshitishni boshladim ..`);
});











