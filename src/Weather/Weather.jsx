import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [Weather, setWeather] = useState(null);
  const [City, setCity] = useState('Varanasi');

  const getWeather = async () => {
    console.log(City);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=d8775565de524dc69ab54638242210&q=${City}&aqi=no`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [City]);

  return (
    <div className='main-container'>
      <h1>{Weather?.location?.name}</h1>
      <p>Temperature: {Weather?.current?.temp_c}°C</p>
      <p>Current condition: {Weather?.current?.condition?.text}</p>
      <div className='button-input'>
      <input
        type="text"
        value={City}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Search</button>
      </div>
     
    </div>
  );
};

export default Weather;
