import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

import '../Styles/WeatherCard.css';
const GridCard = ({ cardInfo, deletePost }) => {
  return (
    <Col sm={6}>
      <div className='card-container'>
        <Card className='grid-card text-center card-shadow'>
          <Card.Body>
            <Card.Title>
              {cardInfo.city}, {cardInfo.state}
            </Card.Title>
            <Card.Text>Time: {cardInfo.date} </Card.Text>
            <Card.Text>The weather was: {cardInfo.temp} F°</Card.Text>
            <Card.Text>The humidity was: {cardInfo.humidity} %</Card.Text>
            <Button
              variant='primary'
              onClick={() => {
                deletePost(cardInfo.id);
              }}
            >
              Delete Event
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default GridCard;
