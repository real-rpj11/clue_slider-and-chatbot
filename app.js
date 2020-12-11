const express = require('express')
const app = express()
const http = require('http')
const PORT = process.env.PORT || 5000
const path = require('path')
const socket = require('socket.io')

const server = http.createServer()
const io = socket(server)


app.use(express.static(path.join(__dirname,'/public')))


// app.get('/', (req, res) =>{
//     res.render("index")
// })
 io.on('connection', socket => {
     console.log("new connection")
 })

server.listen(PORT, () => {
    console.log( `Listening to PORT ${PORT}`)
})