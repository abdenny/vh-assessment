import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import LocationInput from './LocationInput.component';
import WeatherCard from './WeatherCard.component';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null);

  //Method passed to LocationInput.js to fetch the API with users input, and save the result in App.js hook.
  let searchApi = () => {
    //Posting user input to server and using node-fetch server side to keep the API key protected.
    fetch('http://localhost:3001/services/weather-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedValues),
    })
      .then((response) => {
        return response.json();
      })
      .then(({ weatherObj }) => {
        console.log(weatherObj);
        let convertedMetrics = {
          city: selectedValues.city,
          state: selectedValues.state,
          date: new Date().toTimeString(),
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
      <LocationInput selectLocation={selectLocation} searchApi={searchApi} />
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          {/* Displays card component after API call is complete and info is store in App.js hook */}
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
