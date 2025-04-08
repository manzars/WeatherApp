import axios from 'axios';

const API_KEY = 'c1c713359ee51a22f65c9483054ea32c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string): Promise<any> => {
  const response = await axios.get(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
};
