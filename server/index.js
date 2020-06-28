require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const api = require('./api/api');
const services = require('./services/services');

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//For API routes
app.use('/api/', api);

//For business logic
app.use('/services/', services);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
