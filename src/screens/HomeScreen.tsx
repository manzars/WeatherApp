import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {WeatherContext} from '../context/WeatherContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const HomeScreen: React.FC = () => {
  const {state, getWeather, isDarkMode, toggleTheme} =
    useContext(WeatherContext);
  const [city, setCity] = useState('');
  const [currentTime, setCurrentTime] = useState(moment().format('h:mm A'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('h:mm A'));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (city.trim()) {
      getWeather(city);
      setCity('');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      <View style={styles.header}>
        <Text
          style={[
            styles.cityText,
            isDarkMode ? {color: '#FFFFFF'} : {color: '#000000'},
          ]}>
          {state.weatherData?.name || 'New Delhi'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            isDarkMode ? styles.darkInput : styles.lightInput,
          ]}
          value={city}
          onChangeText={setCity}
          placeholder="Enter city name"
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            width: '37%',
            backgroundColor: '#4DA8DA',
            height: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>Get Weather</Text>
        </TouchableOpacity>
      </View>

      {state.loading ? (
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#000'} />
      ) : state.error ? (
        <Text
          style={[
            styles.error,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {state.error}
        </Text>
      ) : state.weatherData ? (
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCondition}>
            {state.weatherData?.weather[0]?.main || 'Clear'}
          </Text>
          <Text style={styles.temperature}>{state.weatherData.main.temp}°</Text>

          <Text style={styles.feelsLike}>
            Feels like {Math.round(state?.weatherData.main?.feels_like)}°
          </Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Icon
          name={isDarkMode ? 'toggle-off' : 'toggle-on'}
          size={24}
          color={isDarkMode ? '#FFFFFF' : '#000000'}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  lightContainer: {
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 0 : '10%',
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  weatherCard: {
    backgroundColor: '#4DA8DA',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherCondition: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },

  temperature: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },

  feelsLike: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    width: '100%',
    height: 48,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: '3%',
    width: '60%',
  },
  lightInput: {
    borderColor: '#000',
    backgroundColor: '#fff',
    color: '#000',
  },
  darkInput: {
    borderColor: '#fff',
    backgroundColor: '#555',
    color: '#fff',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  themeToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform?.OS === 'android' ? '2%' : '5%',
    right: 0,
  },
  lightText: {
    color: '#000',
    marginRight: '5%',
  },
  darkText: {
    color: '#fff',
    marginRight: '5%',
  },
});

export default HomeScreen;
