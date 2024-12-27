require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('<h1>You are Logged in via Insta<h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})