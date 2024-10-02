const express = require('express')
const router = express.Router()
const Joi = require("joi")


function validateBook(book){
    const bookSchema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return bookSchema.validate(book);
}

const books = [
    {'id':1,  "name":"Alisher Navoiy"},
    {'id':2 , "name": "Mirzo Ulugbek"},
    {'id':3 , "name": "Alisher Navoiy"}
]



router.get('/', (req, res) => {
    res.send(books);
});


router.post('/', (req, res) => {
    const { error } = validateBook(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.status(201).send(book);
});


router.get('/api/articles/:year/:month', (req, res) => {
    res.send(req.params)
})


router.get('/:id', (req, res) =>{
    const book = books.find(b=>b.id === parseInt(req.params.id))
    if(!book){
        return res.status(404).send("Kitob topilmadi")
    }
    res.send(book)
})

router.put('/:id', (req, res) => {
    const book = books.find(b=>b.id === parseInt(req.params.id))
    if(!book){
        return res.status(404).send("Kitob topilmadi")
    }

    const { error } = validateBook(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    book.name = req.body.name
    res.send(book)
});

router.delete('/:id', (req,res) => {
    const book = books.find(b=>b.id === parseInt(req.params.id))
    if(!book){
        return res.status(404).send("Kitob topilmadi")
    }
    const bookIndex = books.indexOf(book)
    books.splice(bookIndex, 1);
    res.send(book)


});

module.exports = router