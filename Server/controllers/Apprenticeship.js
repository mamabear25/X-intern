const firebase = require("../db/firebaseConfig");
const Apprenticeship = require("../models/Apprenticeship");
const firestore = firebase.db;
const express = require('express');
app = (express.json());
// const addApprenticeship = async (req,res,next) => {
//     try {
//         await firestore.collection("Apprenticeship").doc().set(req.body);
//         res.send("your Apprenticeship has been saved successfully")
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };





module.exports= {
    addApprenticeship
}
