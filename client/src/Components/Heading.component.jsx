import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Heading({ subtitle }) {
  return (
    <>
      <Row>
        <Col
          className='text-center'
          style={{ fontSize: '2em', marginTop: '20px' }}
          xs={12}
        >
          {subtitle}
        </Col>
      </Row>
    </>
  );
}
export default Heading;
