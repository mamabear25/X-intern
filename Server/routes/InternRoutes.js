const express = require('express')
const {
	addInternship,
	getInternshipById,
	getInternships
} = require('../controllers/internController')

const router = express.Router()

router.post('/internships', addInternship)
router.get('/internships/:id', getInternshipById)
router.get('/interships', getInternships)

module.exports = {
	routes: router
}
