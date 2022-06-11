const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const graphQLroute = require('./graphql/query')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()


// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('server running')
})

app.use('/graphql', graphQLroute)


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})