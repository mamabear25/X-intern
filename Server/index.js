require("dotenv").config(); // load .env variables
const express = require("express");
const database = require("../database");
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors");
const internRoutes = require("./routes/InternRoutes");
const apprenticeshipModel = require("./models/apprenticeshipModel");
const Apprenticeship = require("./models/apprenticeshipModel");


database.connectToMongoDB();

const {PORT = 3000} = process.env;

const app = express();

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use("",internRoutes.routes);
app.use(express.static('public'));
app.use(express.json()) // parse json bodies

// Routes


// home
app.get("/", (req, res) => {
    res.send("this will be the endpoint for the home page")
});

//get all appreticeships
app.get("/apprenticeships", async (req, res) => {
    const appreticeships = await apprenticeshipModel.find().limit(10)
    return res.json({ status: true, appreticeships})
})


// post new apprenticeship
app.post("/new/apprenticeship", async (req, res) => {
    try {
        req.body.apprentTitle = (req.body.apprentTitle)
        req.body.compDescription = (req.body.compDescription)
        req.body.introVideo = (req.body.introVideo)
        req.body.teamType = (req.body.teamType)
        req.body.teamRoles = (req.body.teamRoles)
        req.body.teamAdmin = (req.body.teamAdmin)
        req.body.timeline = (req.body.timeline)
        
        // create new user
        const apprenticeship = await Apprenticeship.create(req.body);
        // send new user as response
        res.json(apprenticeship);
    }   catch (error) {
        console.log({error})
        res.status(400).json({error});
    }
});


// update apprenticeship
app.patch("/apprenticeship/:id", async (req, res) => {
    const { id } = req.params;

    const apprenticeship = await apprenticeshipModel.findById(id)

    if (!apprenticeship) {
        return res.status(404).json({status: false, apprenticeship: null })
    }
    
    await apprenticeship.save()

    return res.json({ status: true, apprenticeship})

});

// delete apprenticeship
app.delete("/delete/:id", async (req, res) => {
    const { id } = req.body;
    const deleted = await Apprenticeship.findById(req.params.id)

    if (!deleted) {
        return res.status(400).json({status: true, deleted: null})
    }

    await Apprenticeship.deleteOne()
    return res.json({ status: true, message: "apprenticeship succesfully deleted", deleted})

})

app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))