const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

let usersCounter = 0;

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected');
  usersCounter++;
  
  let username = 'Guest'+usersCounter;
  let connectedMessage = {
    content: username + ' connected'
  }

  socket.emit('SET_USERNAME', username)
  io.sockets.emit('CREATE_MESSAGE', connectedMessage)

  socket.on('SEND_MESSAGE', (messageObject) => {
    io.sockets.emit('CREATE_MESSAGE', messageObject)
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`))