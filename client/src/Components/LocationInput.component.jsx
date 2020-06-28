import React, { useEffect, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import StatesJSON from '../Utils/States';
import '../Styles/LocationInput.css';

const LocationInput = ({ searchApi, selectLocation }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    //Returns a new array of option elements to populate form dropdown with US states.
    let listOfStates = StatesJSON.ALL.map((state, index) => {
      return (
        <option key={index} value={state.name}>
          {state.abbreviation}
        </option>
      );
    });
    setStates(listOfStates);
  }, []);

  return (
    <>
      <Form className='form'>
        <Form.Row>
          <Col sm={2} />
          <Col sm={4}>
            <Form.Control
              name='city'
              placeholder='City'
              onChange={selectLocation}
            />
          </Col>
          <Col sm={3}>
            <Form.Control name='state' as='select' onChange={selectLocation}>
              <option>Choose State...</option>
              {states}
            </Form.Control>
          </Col>
          <Col sm={1}>
            <Button variant='secondary' onClick={searchApi}>
              Search
            </Button>
          </Col>
          <Col sm={2} />
        </Form.Row>
      </Form>
    </>
  );
};

export default LocationInput;
