import axios from 'axios';

const API_KEY ='b240b5db7e6d2bb0008f768fd38aa3a3';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
