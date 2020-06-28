const express = require('express');
const app = express();

const api = require('./api/api');
const services = require('./services/services');

app.use('/api/', api);
app.use('/services/', services);

app.listen(3000, () => {
  console.log(`listening on 3000`);
});
