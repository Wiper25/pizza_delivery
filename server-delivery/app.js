const express = require('express')
const app = express()
const port = 3000
const homeContents = require('./contents/homeContents.json')
const menuContents = require('./contents/menuContents.json')
const contactContents = require('./contents/contactContents.json')


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(homeContents)
})
app.get('/menu', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(menuContents)
})
app.get('/contact', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(contactContents)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})