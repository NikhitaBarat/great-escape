const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const graphQLroute = require('./graphql/query')
const mongoose = require('mongoose')
const router = require('./routes/routes')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()

// routes

// middleware
app.use(express.json())
app.use(cors())

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.get('/', (req, res) => {
    res.send('server running')
})

app.use('/api', router)

app.use('/graphql', graphQLroute)


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})