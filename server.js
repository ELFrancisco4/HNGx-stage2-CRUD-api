const express = require('express');
const userRouter = require('./routes/index');
const server = express();

server.use(express.json());
server.use(userRouter);
module.exports = server