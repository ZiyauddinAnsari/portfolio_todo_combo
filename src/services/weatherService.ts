import axios from "axios";
import { WeatherData } from "../types/api";

// Ahmedabad coordinates
const AHMEDABAD_LAT = 23.0225;
const AHMEDABAD_LON = 72.5714;
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1";

export const weatherService = {
  async getCurrentWeather(): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}/forecast?latitude=${AHMEDABAD_LAT}&longitude=${AHMEDABAD_LON}&current_weather=true&hourly=temperature_2m,precipitation,relative_humidity_2m&timezone=Asia/Kolkata`
      );

      const current = response.data.current_weather;
      const hourly = response.data.hourly;

      // Get weather description from weather code
      const getWeatherDescription = (code: number): string => {
        const weatherCodes: { [key: number]: string } = {
          0: "Clear sky",
          1: "Mainly clear",
          2: "Partly cloudy",
          3: "Overcast",
          45: "Foggy",
          48: "Depositing rime fog",
          51: "Light drizzle",
          53: "Moderate drizzle",
          55: "Dense drizzle",
          61: "Slight rain",
          63: "Moderate rain",
          65: "Heavy rain",
          71: "Slight snow",
          73: "Moderate snow",
          75: "Heavy snow",
          77: "Snow grains",
          80: "Slight rain showers",
          81: "Moderate rain showers",
          82: "Violent rain showers",
          85: "Slight snow showers",
          86: "Heavy snow showers",
          95: "Thunderstorm",
          96: "Thunderstorm with slight hail",
          99: "Thunderstorm with heavy hail",
        };
        return weatherCodes[code] || "Unknown";
      };

      return {
        location: {
          name: "Ahmedabad",
          country: "IN",
        },
        current: {
          temperature: Math.round(current.temperature),
          description: getWeatherDescription(current.weathercode),
          icon: current.weathercode.toString(),
          humidity: hourly.relative_humidity_2m
            ? hourly.relative_humidity_2m[0]
            : 65,
          windSpeed: Math.round(current.windspeed),
          feelsLike: Math.round(current.temperature + 2), // Approximate feels like
        },
        forecast: [], // We'll fetch forecast separately if needed
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  },

  async getWeatherForecast(): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}/forecast?latitude=${AHMEDABAD_LAT}&longitude=${AHMEDABAD_LON}&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=Asia/Kolkata&forecast_days=7`
      );

      const daily = response.data.daily;

      // Get weather description from weather code
      const getWeatherDescription = (code: number): string => {
        const weatherCodes: { [key: number]: string } = {
          0: "Clear sky",
          1: "Mainly clear",
          2: "Partly cloudy",
          3: "Overcast",
          45: "Foggy",
          48: "Depositing rime fog",
          51: "Light drizzle",
          53: "Moderate drizzle",
          55: "Dense drizzle",
          61: "Slight rain",
          63: "Moderate rain",
          65: "Heavy rain",
          71: "Slight snow",
          73: "Moderate snow",
          75: "Heavy snow",
          77: "Snow grains",
          80: "Slight rain showers",
          81: "Moderate rain showers",
          82: "Violent rain showers",
          85: "Slight snow showers",
          86: "Heavy snow showers",
          95: "Thunderstorm",
          96: "Thunderstorm with slight hail",
          99: "Thunderstorm with heavy hail",
        };
        return weatherCodes[code] || "Unknown";
      };

      const dailyForecasts = daily.time
        .slice(0, 5)
        .map((date: string, index: number) => ({
          date: new Date(date),
          high: Math.round(daily.temperature_2m_max[index]),
          low: Math.round(daily.temperature_2m_min[index]),
          description: getWeatherDescription(daily.weathercode[index]),
          icon: daily.weathercode[index].toString(),
        }));

      return {
        location: {
          name: "Ahmedabad",
          country: "IN",
        },
        current: {
          temperature: Math.round(
            (daily.temperature_2m_max[0] + daily.temperature_2m_min[0]) / 2
          ),
          description: getWeatherDescription(daily.weathercode[0]),
          icon: daily.weathercode[0].toString(),
          humidity: 65, // Open-Meteo doesn't provide humidity in daily forecast
          windSpeed: 8, // Default value
          feelsLike: Math.round(
            (daily.temperature_2m_max[0] + daily.temperature_2m_min[0]) / 2 + 2
          ),
        },
        forecast: dailyForecasts,
      };
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
      return null;
    }
  },

  // Mock weather data for demo purposes
  getMockWeatherData(): WeatherData {
    return {
      location: {
        name: "Ahmedabad",
        country: "IN",
      },
      current: {
        temperature: 32,
        description: "partly cloudy",
        icon: "2",
        humidity: 68,
        windSpeed: 8,
        feelsLike: 35,
      },
      forecast: [
        {
          date: new Date(),
          high: 35,
          low: 28,
          description: "sunny",
          icon: "0",
        },
        {
          date: new Date(Date.now() + 86400000),
          high: 33,
          low: 26,
          description: "partly cloudy",
          icon: "2",
        },
        {
          date: new Date(Date.now() + 172800000),
          high: 30,
          low: 24,
          description: "rainy",
          icon: "61",
        },
      ],
    };
  },
};
