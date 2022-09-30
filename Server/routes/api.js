const express = require('express')
const internsRouter = require('./interns/interns.router')
const authRouter = require('./auth/auth.router')

const api = express.Router()

api.use('/interns', internsRouter)
//api.use('/auth', authRouter)

module.exports = api
