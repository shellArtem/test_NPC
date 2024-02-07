require('@babel/register');

const cors = require('cors');

const express = require('express');
const logger = require('morgan');
const path = require('path');

const router = require('./routes/index');

const app = express();
const PORT = 3003;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true, //["http://localhost:5173"]
    credentials: true,
  })
);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Сервер запущен, порт =====>  ${PORT}`);
});
