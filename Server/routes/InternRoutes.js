const express = require("express");
const {addInternship, getInternship, updateInternship, deleteInternship} = require("../controllers/internController");


const router = express.Router();

router.post("/add/internship",addInternship);
router.get("/internship",getInternship);
router.put("/update/internship/id",updateInternship);
router.delete("/delete/Internship/:id",deleteInternship);

module.exports = {
    routes :router
}