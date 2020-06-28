import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import LocationInput from './LocationInput.component';
import WeatherCard from './WeatherCard.component';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null);
  useEffect(() => {
    //API Key from server to keep protected.
  }, []);

  //Method passed to LocationInput.js to fetch the API with users input, and save the result in App.js hook.
  let searchApi = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedValues.city},${selectedValues.state})&appid=13de831c3f47f8af303dbbe2d38e2e4f`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((weatherObj) => {
        let convertedMetrics = {
          city: selectedValues.city,
          state: selectedValues.state,
          date: new Date(),
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
          {/* Displays card component after API call is complete */}
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
