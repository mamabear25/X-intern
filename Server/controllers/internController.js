const firebase = require("../db/firebaseConfig");
const Internship = require("../models/Internship");
const firestore = firebase.db;


const addInternship = async (req,res,next) => {
    try {
        const data = req.body
        await firestore.collection("Internship").doc().set(data);
        res.send("Record saved successfully")
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 
const getInternship = async (req,res,next) => {
    try {
        const response = await firestore.collection("Internship").get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send({status: true, responseArr});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateInternship = async (req,res,next) => {
    try {
        const  id  = req.params.id;
        const response = req.body;
        const InternshipRef = await firestore.collection("Internship").doc(id).update(req.body);
        res.send({status: true, id, response});
    } catch(error) {
        res.status(400).send(error);
    }
}
const deleteInternship = async (req,res,next) => {
    try {
        const response = await firestore.collection("Internship").doc(req.params.id).delete();
        console.log(response)
        res.send({message: "apprenticeship deleted successfully"});
    } catch(error) {
        res.status(400).send(error);
    }
}
module.exports= {
    addInternship,
    getInternship,
    updateInternship,
    deleteInternship
}