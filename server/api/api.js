const express = require('express');
const api = express();
const knex = require('../knex/knex');

api.get('/weather-events', (req, res) => {
  knex('weather')
    .select('*')
    .then((data_from_table) => {
      res.send(data_from_table);
    });
});

module.exports = api;
