import React, { useState } from 'react';
import getWeatherData from '../api/openWeatherMap';

const WeatherForm = ({ setWeatherData, setLoading }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!(term === '')) getWeatherData(term, setWeatherData, setLoading);
  };

  return (
    <div>
      <label>Enter city name</label>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default WeatherForm;