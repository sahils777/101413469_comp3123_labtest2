import React from 'react';

function WeatherDetails({ main, wind }) {
  return (
    <div className="weather-details">
      <h3>Today's Weather Details</h3>

      <div className="detail">
        <span className="label">Humidity:</span>
        <span className="value">{main.humidity}%</span>
      </div>
      <div className="detail">
        <span className="label">Wind:</span>
        <span className="value">{wind.speed} m/s</span>
      </div>
      <div className="detail">
        <span className="label">Pressure:</span>
        <span className="value">{main.pressure} hPa</span>
      </div>
      <div className="detail">
        <span className="label">Sea Level:</span>
        <span className="value">{main.sea_level} hPa</span>
      </div>
      <div className="detail">
        <span className="label">Ground Level:</span>
        <span className="value">{main.grnd_level} hPa</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
