require('dotenv').config()
require('./database')

const express = require('express')
const app = express()
const routes = require('./routes')
var cors = require('cors')
var morgan = require('morgan')
const porta = process.env.PORTA || 3000;

app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use(express.json())
app.use(routes)
app.use(morgan('dev'))

app.listen(porta, ()=>{
    console.log("Servidor online na porta: " + porta)
})
