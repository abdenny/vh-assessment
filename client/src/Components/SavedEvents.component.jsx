import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const SavedEvents = () => {
  useEffect(() => {
    //Posts from DB
  }, []);
  return (
    <>
      <Row className='card-row'>
        <Col sm={4}>Hello</Col>
        <Col sm={4}>Hello</Col>
        <Col sm={4}>Hello</Col>
      </Row>
    </>
  );
};

export default SavedEvents;
