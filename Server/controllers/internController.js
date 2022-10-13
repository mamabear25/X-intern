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
		const internships = await doc.collection('Internships').get()
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

module.exports = {
	addInternship,
	getInternshipById,
	getInternships
}
