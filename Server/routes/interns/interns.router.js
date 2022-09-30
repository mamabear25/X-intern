const express = require('express')
const { httpUpdateProfile, httpAddNewIntern, httpGetInterns } = require('./interns.controller')

const internsRouter = express.Router()

internsRouter.put('/profile/:id', httpUpdateProfile)

internsRouter.get('/', httpGetInterns)
internsRouter.post('/', httpAddNewIntern)

module.exports = internsRouter
