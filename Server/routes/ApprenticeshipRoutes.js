const express = require("express");
const {addApprenticeship} = require("../controllers/Apprenticeship");
// const {updateApprenticeship} = require("../controllers/Apprenticeship");
// const {deleteApprenticeship} = require("../controllers/Apprenticeship");
// const {getApprenticeship} = require("../controllers/Apprenticeship");


const router = express.Router();

router.post("/apprenticeship", addApprenticeship);
// router.patch("/apprenticeship", updateApprenticeship);
// router.delete("/apprenticeship", deleteApprenticeship);
// router.get("/apprenticeship", getApprenticeship);

module.exports = {
    routes :router
}