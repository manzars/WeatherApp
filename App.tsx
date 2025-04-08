import React from 'react';
import {WeatherProvider} from './src/context/WeatherContext';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <HomeScreen />
    </WeatherProvider>
  );
};

export default App;
