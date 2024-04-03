const { createServer } = require('http');
const { Server } = require('socket.io');

const express = require('express');
const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    //Receive msg from client
    // console.log(msg);
    io.emit('chat_send', msg);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

httpServer.listen(3000, () => {
  console.log('Server is running at port 3000');
});
