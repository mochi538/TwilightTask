const express = require('express')
const app = express()
const port = process.env.PORT || 3003
require('dotenv').config();

const tareasRoute = require('./routes/tareasRoute')

const conexionDB = require('./config/db')
conexionDB()

app.use(express.json())

app.use('/api', tareasRoute)


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})

