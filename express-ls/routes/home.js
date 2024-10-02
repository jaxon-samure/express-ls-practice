const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'My express app', greating: "Salomaleykum"});
});

module.exports = router