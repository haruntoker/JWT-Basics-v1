const express = require('express')
const router = express.Router()

//import controller file
const {login, dashBoard} = require('../controllers/main.js')



router.get('/dashboard', dashBoard)
router.post('/login', login)



//export to app.js
module.exports = router