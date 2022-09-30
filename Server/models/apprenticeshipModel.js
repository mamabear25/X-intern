const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ApprenticeshipSchema = new Schema ({
    id: ObjectId,
    apprentTitle: {
        type: String, 
        required: true
    },
    compDescription: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    teamType: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    teamRoles: {
        type: String,
        required: true
    },
    teamAdmin: {
        type: String,
        required: true
    },
    timeline: {
        type: String, 
        required: true
    }
}, {timestamps: true});

// {timestamps: true} option creates a createdAt and updatedAt field on our models
// that contain timestamps which will get automatically updated when our model changes. 
const Apprenticeship = mongoose.model('Apprenticeship', ApprenticeshipSchema);
ApprenticeshipSchema.plugin(uniqueValidator);
module.exports = Apprenticeship;


