import React from 'react';

const WeatherDetail = ({ weatherData }) => {
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <ul>
        <li>Main temperature: {weatherData.main.temp} ºF</li>
        <li>Max temperature: {weatherData.main.temp_max} ºF</li>
        <li>Min temperature: {weatherData.main.temp_min} ºF</li>
      </ul>
    </div>
  );
};

export default WeatherDetail;