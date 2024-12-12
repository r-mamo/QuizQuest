const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinChallenge', (challengeId) => {
    socket.join(challengeId);
  });

  socket.on('submitAnswer', ({ challengeId, questionId, answer }) => {
    // Process answer and emit result
    io.to(challengeId).emit('answerResult', { questionId, result: 'correct' });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
