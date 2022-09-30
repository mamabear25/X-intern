const internsDatabase = require('./interns.mongo')

async function updateProfile(internId, newProfile) {
	const internProfile = internsDatabase.findByIdAndUpdate(internId, { profile: newProfile })
	return internProfile
}

async function addNewIntern(newintern) {
	const intern = await internsDatabase.findOneAndUpdate({ email: newintern.email }, newintern, {
		new: true,
		upsert: true
	})
	return intern
}

async function getAllInterns() {
	const interns = await internsDatabase.find({})
	return interns
}

module.exports = { updateProfile, addNewIntern, getAllInterns }
