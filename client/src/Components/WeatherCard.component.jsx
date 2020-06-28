import React from 'react';
import { Card, Button } from 'react-bootstrap';

import '../Styles/WeatherCard.css';

const WeatherCard = ({ weatherInfo }) => {
  console.log(weatherInfo);

  let postWeatherEvent = () => {
    fetch('http://localhost:3001/services/weather-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(weatherInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then(({ message }) => {
        alert(message);
      });
  };

  return (
    <div className='card-container'>
      <Card className='card text-center card-shadow'>
        <Card.Body>
          <Card.Title>
            {weatherInfo.city}, {weatherInfo.state}
          </Card.Title>
          <Card.Text>Current weather: {weatherInfo.f} F°</Card.Text>
          <Card.Text>Current humidity: {weatherInfo.humidity}%</Card.Text>
          <Button variant='primary' onClick={postWeatherEvent}>
            Save Event
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
