const express = require("express");
const {addInternship} = require("../controllers/internController");


const router = express.Router();

router.post("/internship",addInternship);

module.exports = {
    routes :router
}