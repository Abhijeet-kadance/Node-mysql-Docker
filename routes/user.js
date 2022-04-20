const {indexRoute, showAllBooks, addBooks} =  require('../controllers/books')


const express = require('express')
const router = express.Router()

var bodyParser = require('body-parser');

router.use(bodyParser.json()); 


router.get('/',indexRoute).get('/getAllBooks',showAllBooks)
router.post('/addBook',addBooks)

module.exports = router
