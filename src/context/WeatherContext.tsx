import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeatherData, WeatherState} from '../types/weather';
import {fetchWeather} from '../services/weatherApi';
import {Appearance} from 'react-native';

interface WeatherContextType {
  state: WeatherState;
  getWeather: (city: string) => Promise<void>;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const WeatherContext = createContext<WeatherContextType>({
  state: {weatherData: null, loading: false, error: null, lastCity: null},
  getWeather: async () => {},
  isDarkMode: Appearance.getColorScheme() === 'dark',
  toggleTheme: () => {},
});

export const WeatherProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [state, setState] = useState<WeatherState>({
    weatherData: null,
    loading: false,
    error: null,
    lastCity: null,
  });
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === 'dark',
  );

  useEffect(() => {
    const loadLastCity = async () => {
      const city = await AsyncStorage.getItem('lastCity');
      if (city) {
        setState(prev => ({...prev, lastCity: city}));
        getWeather(city);
      }
    };
    loadLastCity();
  }, []);

  const getWeather = async (city: string) => {
    setState(prev => ({...prev, loading: true, error: null}));
    try {
      const data = await fetchWeather(city);
      setState(prev => ({...prev, weatherData: data, loading: false}));
      await AsyncStorage.setItem('lastCity', city);
      setState(prev => ({...prev, lastCity: city}));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'City not found or API error',
      }));
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <WeatherContext.Provider
      value={{state, getWeather, isDarkMode, toggleTheme}}>
      {children}
    </WeatherContext.Provider>
  );
};
