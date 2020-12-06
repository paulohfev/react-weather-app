import React, { useState } from 'react';
import axios from 'axios';
import WeatherDetail from './WeatherDetail';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({ });
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(true);

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
    }).then(response => {
      setWeatherData(response.data);
      setLoading(false);
    })
  };

  // console.log(weatherData)

  return (
    <div>
      <label>Enter your city</label>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
        <button>Search</button>
      </form>

      {loading ? <div>Loading...</div> : <WeatherDetail weatherData={weatherData} /> }
    </div>
  );
};

export default Weather;