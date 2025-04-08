export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

export interface WeatherState {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  lastCity: string | null;
}
