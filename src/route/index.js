const express = require('express')
const route = express.Router()
const controller = require('../controller')
const middleware = require('../middleware')


route.get('/panggilNama/:middleName', controller.panggilNama)
route.post('/registrasi', middleware.validasiPassword, controller.registrasi)
module.exports = route

