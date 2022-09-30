require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { mongoconnect } = require('./services/mongo')

const internRoutes = require('./routes/InternRoutes')
const api = require('./routes/api')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('', internRoutes.routes)
app.use('/v1', api)

async function serve() {
	await mongoconnect()
	app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
}

serve()
