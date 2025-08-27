import type { WeatherData } from '../types';

// For demo purposes, we'll use a free weather API
// In production, you would use your actual API key
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key';
const WEATHER_BASE_URL = 'https://api.weatherapi.com/v1';

export async function fetchWeather(city: string = 'London'): Promise<WeatherData> {
  try {
    // For demo purposes, return mock data if no API key is available
    if (WEATHER_API_KEY === 'demo_key') {
      return getMockWeatherData(city);
    }

    const response = await fetch(
      `${WEATHER_BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    );

    if (!response.ok) {
      throw new ApiError({
        message: `Weather API error: ${response.statusText}`,
        status: response.status,
      });
    }

    const data = await response.json();
    return data as WeatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback to mock data
    return getMockWeatherData(city);
  }
}

function getMockWeatherData(city: string): WeatherData {
  return {
    location: {
      name: city,
      country: 'Demo',
    },
    current: {
      temp_c: Math.round(Math.random() * 30 + 5), // Random temp between 5-35°C
      condition: {
        text: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      },
      humidity: Math.round(Math.random() * 40 + 30), // 30-70%
      wind_kph: Math.round(Math.random() * 20 + 5), // 5-25 kph
    },
    forecast: {
      forecastday: [
        {
          date: new Date().toISOString().split('T')[0],
          day: {
            maxtemp_c: Math.round(Math.random() * 25 + 15),
            mintemp_c: Math.round(Math.random() * 10 + 5),
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
        },
        {
          date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          day: {
            maxtemp_c: Math.round(Math.random() * 25 + 15),
            mintemp_c: Math.round(Math.random() * 10 + 5),
            condition: {
              text: 'Partly Cloudy',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            },
          },
        },
        {
          date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
          day: {
            maxtemp_c: Math.round(Math.random() * 25 + 15),
            mintemp_c: Math.round(Math.random() * 10 + 5),
            condition: {
              text: 'Light Rain',
              icon: '//cdn.weatherapi.com/weather/64x64/day/296.png',
            },
          },
        },
      ],
    },
  };
}

class ApiError extends Error {
  status?: number;
  code?: string;

  constructor({ message, status, code }: { message: string; status?: number; code?: string }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}