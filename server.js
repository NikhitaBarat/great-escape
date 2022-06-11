const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const graphQLroute = require('./graphql/query')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routes/routes')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()


// routes
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/hotels', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/activities', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/trip', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})


// middleware
app.use(express.json())
app.use(cors())

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.use('/api', router)

app.use('/graphql', graphQLroute)


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})