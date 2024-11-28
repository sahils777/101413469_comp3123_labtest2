import React from 'react';
import WeatherDetails from './WeatherDetails';


function WeatherDisplay({ weatherData }) {
  const { name, main, weather, wind, sys } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  // Get today's date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className="weather-display">
      <h2>{name}, {sys.country}</h2>

      <div className="current-conditions">
        <h3>Current Conditions</h3>
        <div className="current-weather">
          <img src={iconUrl} alt={weather[0].description} />
          <div className="temperature">
            <span className="temp">{Math.round(main.temp)}°C</span>
            <span className="feels-like">Feels like: {Math.round(main.feels_like)}°C</span>
          </div>
          <div className="weather-description">{weather[0].description}</div>
        </div>
        <div className="today-temp">
          Today: <span className="high-low">High {Math.round(main.temp_max)}°C Low {Math.round(main.temp_min)}°C</span>
        </div>
      </div>

      <div className="predicted-weather">
    <h3>Predicted Weather</h3>
    <div className="forecast">
        {[
            { day: 'Monday', temp: 22, description: 'Sunny' },
            { day: 'Tuesday', temp: 20, description: 'Partly Cloudy' },
            { day: 'Wednesday', temp: 18, description: 'Rain Showers' },
            { day: 'Thursday', temp: 21, description: 'Mostly Sunny' },
            { day: 'Friday', temp: 19, description: 'Cloudy' }
        ].map((forecast, index) => (
            <div key={index} className="forecast-item">
                <span className="forecast-day">{forecast.day}</span>
                <span className="forecast-temp">{forecast.temp}°C</span>
                <span className="forecast-description">{forecast.description}</span>
            </div>
        ))}
    </div>
</div>
      <WeatherDetails main={main} wind={wind} />
    </div>
  );
}

export default WeatherDisplay;
