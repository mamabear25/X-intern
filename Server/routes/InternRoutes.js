const express = require('express')
const {
	addInternship,
	getInternshipById,
	getInternships,
	updateInternship,
	deleteInternship
} = require('../controllers/internController')

const router = express.Router()

router.post('/internships', addInternship)
router.get('/internships/:id', getInternshipById)
router.get('/interships', getInternships)
router.put('/update/internships/id', updateInternship)
router.delete('/delete/Internships/:id', deleteInternship)

module.exports = {
	routes: router
}
