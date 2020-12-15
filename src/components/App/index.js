import React from 'react';
import Weather from '../Weather/index';
import './styles.scss';

function App() {
  return (
    <div>
      <h2>Simple React Weather App</h2>
      <p>Check out the current weather of a city.</p>

      <Weather />
    </div>
  );
}

export default App;
