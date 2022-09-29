const firebase = require("../db/firebaseConfig");
const Internship = require("../models/Internship");
const firestore = firebase.db;


const addInternship = async (req,res,next) => {
    try {
        await firestore.collection("Internship").doc().set(req.body);
        res.send("Record saved successfully")
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports= {
    addInternship
}