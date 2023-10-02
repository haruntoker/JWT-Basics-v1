const express = require('express')
const router = express.Router()

//import controller file
const {login, dashBoard} = require('../controllers/main.js')

const authenticationMW = require('../middleware/auth.js')


router.get('/dashboard',authenticationMW, dashBoard)
router.post('/login', login)



//export to app.js
module.exports = router