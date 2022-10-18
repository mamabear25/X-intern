const { db } = require('../db/firebaseConfig')
const Internship = require('../models/Internship')

const addInternship = async (req, res) => {
	const obj = req.body
	try {
		const Internshipdetails = { ...obj }
		const newintenship = await db.collection('Internships').add(Internshipdetails)
		return res.status(201).json({ id: newintenship.id, ...Internshipdetails })
	} catch (error) {
		return res.status(400).send(error.message)
	}
}

const getInternships = async (req, res) => {
	try {
		const internships = await db.collection('Internships').get()
		const responsearray = []

		internships.forEach((doc) => {
			responsearray.push({ id: doc.id, ...doc.data() })
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
		const InternshipRef = await db.collection('Internships').doc(id).update(req.body)
		return res.send({ status: true, id, response })
	} catch (error) {
		return res.status(400).send(error)
	}
}

const deleteInternship = async (req, res, next) => {
	try {
		const response = await db.collection('Internships').doc(req.params.id).delete()
		console.log(response)
		return res.send({ message: 'apprenticeship deleted successfully' })
	} catch (error) {
		return res.status(400).send(error)
	}
}

module.exports = {
	addInternship,
	getInternships,
	getInternshipById,
	updateInternship,
	deleteInternship
}
