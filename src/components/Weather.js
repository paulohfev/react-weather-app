import React, { useState } from 'react';
import WeatherDetail from './WeatherDetail';
import WeatherForm from './WeatherForm';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({ });
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <WeatherForm setWeatherData={setWeatherData} setLoading={setLoading} />

      <br />
      {loading ? <div>Awaiting for search...</div> : <WeatherDetail weatherData={weatherData} /> }
    </div>
  );
};

export default Weather;