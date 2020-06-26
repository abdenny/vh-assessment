import React, { useEffect, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import StatesJSON from '../Utils/States';

const CityInput = ({ searchApi, selectCity }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
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
      <Form>
        <Form.Row>
          <Col xs={7}>
            <Form.Control
              name='city'
              placeholder='City'
              onChange={selectCity}
            />
          </Col>
          <Col>
            <Form.Control name='state' as='select' onChange={selectCity}>
              <option>Choose State...</option>
              {states}
            </Form.Control>
          </Col>
        </Form.Row>
        <Button variant='primary' onClick={searchApi}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CityInput;
