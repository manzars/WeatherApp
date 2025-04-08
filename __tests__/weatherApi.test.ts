import axios from 'axios';
import {fetchWeather} from '../src/services/weatherApi';

jest.mock('axios');

describe('weatherApi', () => {
  it('fetches weather data successfully', async () => {
    const mockData = {
      name: 'Navi Mumbai',
      main: {temp: 15},
      weather: [{main: 'Cloudy', icon: '10d'}],
    };
    (axios.get as jest.Mock).mockResolvedValue({data: mockData});

    const result = await fetchWeather('Navi Mumbai');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('Navi Mumbai'),
    );
  });

  it('handles API errors', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('API Error'));
    await expect(fetchWeather('InvalidCity')).rejects.toThrow('API Error');
  });
});
