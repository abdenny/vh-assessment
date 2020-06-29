import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import LocationInput from './LocationInput.component';
import WeatherCard from './WeatherCard.component';
import Heading from './Heading.component';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null);

  //Method passed to LocationInput.js to fetch the API with users input, and save the result in App.js hook.
  let searchApi = () => {
    //Posting user input to server and using node-fetch server side to keep the API key protected.
    fetch(
      'http://ec2-3-134-91-231.us-east-2.compute.amazonaws.com/services/weather-search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedValues),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(({ weatherObj }) => {
        let convertedMetrics = {
          city: selectedValues.city,
          state: selectedValues.state,
          //Formatting the date.
          date: new Date().toString().split(' ', 5).join(' '),
          //Converting to Farenheit, API returns Kelvin.
          f: ((weatherObj.main.temp - 273.15) * (9 / 5) + 32).toFixed(2),
          humidity: weatherObj.main.humidity,
        };
        setSearchedLocation(convertedMetrics);
      });
  };

  //Method passed to LocationInput.js to save users city and state in App.js hook.
  let selectLocation = (e) => {
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Heading subtitle={'Search for the current weather'} />
      <LocationInput selectLocation={selectLocation} searchApi={searchApi} />
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          {/* Displays card component after API call is complete and info is stored in App.js hook */}
          {searchedLocation !== null ? (
            <WeatherCard weatherInfo={searchedLocation} />
          ) : null}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </>
  );
}

export default App;
