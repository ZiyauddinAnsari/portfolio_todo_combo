import axios from "axios";
import { NewsArticle } from "../types/api";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || "your-news-api-key";
const NEWS_BASE_URL = "https://newsapi.org/v2";

export const newsService = {
  async getTopHeadlines(
    category: string = "technology"
  ): Promise<NewsArticle[]> {
    try {
      const response = await axios.get(
        `${NEWS_BASE_URL}/top-headlines?category=${category}&country=us&apiKey=${NEWS_API_KEY}`
      );

      return response.data.articles.slice(0, 6).map((article: any) => ({
        id: article.url,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: new Date(article.publishedAt),
        source: {
          name: article.source.name,
        },
        author: article.author,
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  },

  // Mock news data for demo purposes
  getMockNewsData(): NewsArticle[] {
    return [
      {
        id: "1",
        title: "Revolutionary AI Technology Transforms Software Development",
        description:
          "New artificial intelligence tools are making coding more efficient and accessible to developers worldwide.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
        publishedAt: new Date(),
        source: { name: "Tech News" },
        author: "Jane Developer",
      },
      {
        id: "2",
        title: "The Future of Web Development: Trends to Watch in 2024",
        description:
          "Exploring emerging technologies and frameworks that will shape the future of web development.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
        publishedAt: new Date(Date.now() - 3600000),
        source: { name: "Web Weekly" },
        author: "John Coder",
      },
      {
        id: "3",
        title: "TypeScript Adoption Reaches All-Time High",
        description:
          "More companies are adopting TypeScript for better code quality and developer experience.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        publishedAt: new Date(Date.now() - 7200000),
        source: { name: "Developer Daily" },
        author: "Sarah Type",
      },
      {
        id: "4",
        title: "React 19 Beta Released: What's New and Exciting",
        description:
          "The latest React beta introduces powerful new features for modern web applications.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        publishedAt: new Date(Date.now() - 10800000),
        source: { name: "React Weekly" },
        author: "Mike Component",
      },
      {
        id: "5",
        title: "Cloud Computing Trends That Will Define 2024",
        description:
          "From serverless architecture to edge computing, discover the cloud trends shaping our future.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
        publishedAt: new Date(Date.now() - 14400000),
        source: { name: "Cloud Today" },
        author: "Alex Server",
      },
      {
        id: "6",
        title: "Cybersecurity Best Practices for Modern Applications",
        description:
          "Essential security measures every developer should implement in their applications.",
        url: "#",
        urlToImage:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400",
        publishedAt: new Date(Date.now() - 18000000),
        source: { name: "Security First" },
        author: "Emma Shield",
      },
    ];
  },
};
