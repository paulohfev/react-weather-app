import axios from 'axios';

const getWeatherData = (term, setWeatherData, setLoading) => {
  const KEY = process.env.REACT_APP_KEY;
  const CITY = term;

  axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: CITY,
      units: 'metric',
      appid: KEY
    }
  }).then(response => {
    setWeatherData(response.data);
    setLoading(false);
  })
};

export default getWeatherData;