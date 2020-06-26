import React, { useEffect, useState } from 'react';
import './App.css';

import CityInput from './Components/CityInput.component';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState([]);
  useEffect(() => {}, []);

  let searchApi = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedValues.city},${selectedValues.state})&appid=13de831c3f47f8af303dbbe2d38e2e4f`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((weatherObj) => {
        console.log(weatherObj);
        let convertedMetrics = {
          city: selectedValues.city,
          state: selectedValues.state,
          date: new Date(),
          f: ((weatherObj.main.temp - 273.15) * (9 / 5) + 32).toFixed(2),
          humidity: weatherObj.main.humidity,
        };
        setSearchedLocation(convertedMetrics);
      });
  };

  let selectCity = (e) => {
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <CityInput selectCity={selectCity} searchApi={searchApi} />
    </>
  );
}

export default App;
