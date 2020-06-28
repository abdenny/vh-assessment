import React from 'react';
import { Card, Button } from 'react-bootstrap';

import '../Styles/WeatherCard.css';

const WeatherCard = ({ weatherInfo }) => {
  console.log(weatherInfo);
  return (
    <div className='card-container'>
      <Card className='card text-center'>
        <Card.Body>
          <Card.Title>
            {weatherInfo.city}, {weatherInfo.state}
          </Card.Title>
          <Card.Text>Current weather: {weatherInfo.f} F°</Card.Text>
          <Card.Text>Current humidity: {weatherInfo.humidity}%</Card.Text>
          <Button variant='primary'>Save Event</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
