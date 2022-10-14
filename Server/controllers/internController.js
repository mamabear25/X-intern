const { db } = require('../db/firebaseConfig')
const Internship = require('../models/Internship')

const addInternship = async (req, res, next) => {
	try {
		await db.collection('Internships').doc().set(req.body)
		res.send('Record saved successfully')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const getInternships = async (req, res) => {
	try {
		const internships = await db.collection('Internships').get()
		const responsearray = []

		internships.forEach((doc) => {
			responsearray.push(doc.data())
		})

		return res.status(200).json(responsearray)
	} catch (error) {
		return res.status(400).json({ error: 'error fuffiling request' })
	}
}

const getInternshipById = async (req, res) => {
	const { id } = req.params

	try {
		const internshipdoc = await db.collection('Internships').doc(id).get()
		if (!internshipdoc.exists) {
			return res.status(404).json({
				error: 'internship not found'
			})
		}

		return res.status(200).json(internshipdoc.data())
	} catch (error) {
		return res.status(400).json({ error: 'error fufilling request' })
	}
}

const updateInternship = async (req, res, next) => {
	try {
		const id = req.params.id
		const response = req.body
		const InternshipRef = await db.collection('Internship').doc(id).update(req.body)
		res.send({ status: true, id, response })
	} catch (error) {
		res.status(400).send(error)
	}
}
const deleteInternship = async (req, res, next) => {
	try {
		const response = await db.collection('Internship').doc(req.params.id).delete()
		console.log(response)
		res.send({ message: 'apprenticeship deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
}
module.exports = {
	addInternship,
	getInternships,
	getInternshipById,
	updateInternship,
	deleteInternship
}
