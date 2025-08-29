export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
  };
  forecast: {
    date: Date;
    high: number;
    low: number;
    description: string;
    icon: string;
  }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: Date;
  source: {
    name: string;
  };
  author?: string;
}
