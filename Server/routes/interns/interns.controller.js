const { updateProfile, addNewIntern, getAllInterns } = require('../../models/interns/interns.model')

async function httpUpdateProfile(req, res) {
	const internId = req.params.id
	const newProfile = req.body

	const updatedProfile = await updateProfile(internId, newProfile)
	if (!updatedProfile) {
		return res.status(404).json({
			error: `intern with id ${internId} not found`
		})
	}
	res.status(201).json({
		ok: true
	})
}

//hard coded newintern data to be changed when validation is implemented
const defaultintern = {
	firstName: 'korede',
	lastName: 'jacob',
	email: 'man5@gmail.com',
	password: '12345',
	profile: {}
}

async function httpAddNewIntern(req, res) {
	const newintern = await addNewIntern(defaultintern)
	return res.status(200).json(newintern)
}

async function httpGetInterns(req, res) {
	const interns = await getAllInterns()
	return res.status(200).json(interns)
}

module.exports = { httpUpdateProfile, httpAddNewIntern, httpGetInterns }
