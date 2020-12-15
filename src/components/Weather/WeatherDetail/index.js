import React from 'react';
import './styles.scss';

const WeatherDetail = ({ weatherData }) => {
  return (
    <div className="background">
      <h2 className="detail-city-title">{weatherData.name}</h2>
      <div className="detail-container">
        <div className="detail-container-block">
          <img 
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main}
            className="detail-icon"
          />
          <p>{weatherData.weather[0].description}</p>
          <h2>{weatherData.main.temp} ºC</h2>
          <p>Feels like {weatherData.main.feels_like} ºC</p>
        </div>

        <div className="detail-container-block">
          <ul className="detail-list">
            <li>Max: {weatherData.main.temp_max} ºC</li>
            <li>Min: {weatherData.main.temp_min} ºC</li>
            <li>Humidity: {weatherData.main.humidity}%</li>
            <li>Wind: {weatherData.wind.speed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;