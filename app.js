const express = require('express')
const { listenerCount } = require('process')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.listen(port, (req,res) => {
    console.log(`Hola ${port}`)
})




