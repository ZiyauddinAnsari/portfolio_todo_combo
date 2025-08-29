import axios from "axios";
import { WeatherData } from "../types/api";

const WEATHER_API_KEY =
  process.env.REACT_APP_WEATHER_API_KEY || "your-openweather-api-key";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const weatherService = {
  async getCurrentWeather(
    city: string = "London"
  ): Promise<WeatherData | null> {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const data = response.data;

      return {
        location: {
          name: data.name,
          country: data.sys.country,
        },
        current: {
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          feelsLike: Math.round(data.main.feels_like),
        },
        forecast: [], // We'll fetch forecast separately if needed
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  },

  async getWeatherForecast(
    city: string = "London"
  ): Promise<WeatherData | null> {
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(
          `${WEATHER_BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        ),
        axios.get(
          `${WEATHER_BASE_URL}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        ),
      ]);

      const currentData = currentResponse.data;
      const forecastData = forecastResponse.data;

      // Process forecast data (get daily forecasts)
      const dailyForecasts = forecastData.list
        .filter((_: any, index: number) => index % 8 === 0) // Take every 8th item (24 hours)
        .slice(0, 5)
        .map((item: any) => ({
          date: new Date(item.dt * 1000),
          high: Math.round(item.main.temp_max),
          low: Math.round(item.main.temp_min),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      return {
        location: {
          name: currentData.name,
          country: currentData.sys.country,
        },
        current: {
          temperature: Math.round(currentData.main.temp),
          description: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          humidity: currentData.main.humidity,
          windSpeed: currentData.wind.speed,
          feelsLike: Math.round(currentData.main.feels_like),
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
        name: "New York",
        country: "US",
      },
      current: {
        temperature: 22,
        description: "partly cloudy",
        icon: "02d",
        humidity: 65,
        windSpeed: 3.2,
        feelsLike: 24,
      },
      forecast: [
        {
          date: new Date(),
          high: 25,
          low: 18,
          description: "sunny",
          icon: "01d",
        },
        {
          date: new Date(Date.now() + 86400000),
          high: 23,
          low: 16,
          description: "partly cloudy",
          icon: "02d",
        },
        {
          date: new Date(Date.now() + 172800000),
          high: 20,
          low: 14,
          description: "rainy",
          icon: "10d",
        },
      ],
    };
  },
};
