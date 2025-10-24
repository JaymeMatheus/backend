require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const produtosRouter = require('./routes/produtosRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/produtos', produtosRouter);

const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/
      ${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
    );
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err.message);
  }
};

startServer();

module.exports = app;
