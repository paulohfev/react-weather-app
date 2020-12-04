import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [term, setTerm] = useState('London');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!term == "") getWeatherData(term);
  };

  const getWeatherData = term => {
    const KEY = process.env.REACT_APP_KEY;
    const CITY = term;

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: CITY,
        units: 'imperial',
        appid: KEY
      }
    }).then((response) => {
      setWeatherData(response.data);
    })
  };

  console.log(weatherData)

  return (
    <div>
      <label>Enter your city</label>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
        <button>Click</button>
      </form>

      <h2>{weatherData.name}</h2>
      <ul>
        {/* <li>Main temperature: {weatherData.main.temp} ºF</li>
        <li>Max temperature: {weatherData.main.temp_max} ºF</li>
        <li>Min temperature: {weatherData.main.temp_min} ºF</li> */}
      </ul>
    </div>
  );
};

export default Weather;