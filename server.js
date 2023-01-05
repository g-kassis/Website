/*
(c) 2023 Giovanni Kassis
*/

const express = require('express') //express framework
const path = require('path')
const PORT = process.env.PORT || 3000 //allow environment variable to possible set PORT


const app = express()

//Middleware
app.use(express.static(__dirname + '/public')) //static server

app.get('/', function(request, response) {
  console.log('Welcome')
  response.sendFile(__dirname + '/index.html')
})


//start server
app.listen(PORT, err => {
  if(err) console.log(err)
  else {
    console.log(`Server listening on port: ${PORT}`)
    console.log(`To Test:`)
    console.log(`http://localhost:3000`)
  }
})
