const express = require("express");
const internRoutes = require("./routes/InternRoutes");
const { db } = require("./db/firebaseConfig.js")



const app = express();
const PORT = 3000

app.use(express.json()) // parse json 
app.use("",internRoutes.routes);

app.use(express.static('public'));


// Routes


// home
app.get("/", (req, res) => {
    res.send("this will be the endpoint for the home page")
});


// post new apprenticeship

app.post("/new/apprenticeship", async (req, res) => {
    try {
        const compJson = {
            compTitle: req.body.compTitle,
            compDesc: req.body.compDesc,
            appDesc: req.body.appDesc,
            introVideo: req.body.introVideo,
            teamType: req.body.teamType,
            teamRoles: req.body.teamRoles,
            teamAdmin: req.body.teamAdmin,
            timeline: req.body.timeline,
        };
        const { id } = await db.collection("apprenticeships").add(compJson);
        res.send({status: true, id, compJson})
    } catch (error) {
        res.send(error);
    }}
);


// get all apprenticeships

app.get("/apprenticeship", async (req, res) => {
    try {
        const apprenticeshipRef = db.collection("apprenticeships");
        const response = await apprenticeshipRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send({status: true, responseArr});
    } catch (error) {
        res.send(error);
    }
})

//update existing apprenticeship
app.patch("/update/apprenticeship/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = req.body;
        const apprenticeshipRef = await db.collection("apprenticeships").doc(id)
        .update(response);
        res.send({status: true, id, response});
    } catch(error) {
        res.send(error);
    }
});

// delete apprenticeship
app.delete("/delete/apprenticeship/:id", async (req, res) => {
    try {
        const response = await db.collection("apprenticeships").doc(req.params.id).delete();
        console.log(response)
        res.send({message: "apprenticeship deleted successfully"});
    } catch(error) {
        res.send(error);
    }
})

app.listen(PORT, () => ("SERVER STATUS", `Listening on port ${PORT}`))