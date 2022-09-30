const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		bio: {
			type: String,
			default: ''
		},
		preferredModeOfWork: {
			type: String,
			default: ''
		},
		skills: [String],
		payRange: {
			type: String,
			default: ''
		},
		experience: [
			{
				companyName: {
					type: String,
					required: true
				},
				location: {
					type: String,
					required: true
				},
				startDate: {
					type: Date,
					required: true
				},
				endDate: {
					type: Date,
					required: true
				},
				role: {
					type: String,
					required: true
				}
			}
		]
	}
})

module.exports = mongoose.model('Intern', internSchema)
