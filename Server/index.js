const express = require("express");
const cors = require("cors");
const internRoutes = require("./routes/InternRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("",internRoutes.routes);



app.listen("3000",() => console.log("App is listening at http://localhost:3000"))