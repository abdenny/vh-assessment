const express = require('express');
const services = express();
const fetch = require('node-fetch');
const knex = require('../knex/knex');

services.post('/weather-search', (req, res) => {
  let city = req.body.city;
  let state = req.body.state;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state})&appid=${process.env.API_Key}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((weatherObj) => {
      res.send({
        weatherObj,
      });
    });
});

services.post('/weather-event', (req, res) => {
  let city = req.body.city;
  let state = req.body.state;
  let date = req.body.date;
  let temp = req.body.f;
  let humidity = req.body.humidity;
  knex('weather')
    .insert({
      city: city,
      state: state,
      date: date,
      temp: temp,
      humidity: humidity,
    })
    .then(function (weather) {
      res.send({ message: 'The current weather was succesfully saved!' });
    });
});

services.post('/delete-weather-event', (req, res) => {
  let id = req.body.id;
  knex('weather')
    .where({ id: id })
    .del()
    .then(function (weather) {
      res.send({ message: 'The post event was deleted!' });
    });
});

module.exports = services;
