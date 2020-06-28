const express = require('express');
// import userRouter from './routes/userRouter';
// import postsRouter from './routes/postsRouter';
// import postGuestRouter from './routes/postGuestRouter';

const services = express();
// You may add services specific middlewares here
// TODO: move all controllers in the src/services/controllers folder
// services.use('/users', userRouter);
// services.use('/posts', postsRouter);
// services.use('/posts/guests', postGuestRouter);

services.get('/', (req, res) => {
  res.send({
    message: 'Hello from the services',
  });
});

module.exports = services;
