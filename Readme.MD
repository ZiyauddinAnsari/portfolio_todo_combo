# 🚀 Advanced Portfolio & Todo Combo

A modern, full-featured React + TypeScript application that combines a stunning personal portfolio with a powerful todo management system. Built with cutting-edge technologies and best practices for a professional-grade, deployable solution.

![Portfolio Demo](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

### 📱 Portfolio Section

- **Multi-page Navigation**: Home, About, Projects, Contact pages
- **Project Showcase**: Filterable projects with tech stack, descriptions, and links
- **Skills Display**: Interactive skill bars organized by categories
- **Experience Timeline**: Professional journey with detailed descriptions
- **Responsive Design**: Mobile-first approach with smooth animations

### ✅ Todo Management System

- **Full CRUD Operations**: Create, read, update, delete todos
- **Smart Organization**: Categories, priorities, and due dates
- **Advanced Filtering**: Search, filter by category/priority/status
- **Local Persistence**: Data saved in localStorage
- **Interactive UI**: Drag-and-drop, smooth animations

### 🌐 API Integration

- **Weather Widget**: Real-time weather information
- **News Feed**: Latest tech news integration
- **Mock Data**: Fallback for demo purposes

### 🎨 Design & UX

- **Modern UI**: Clean, professional design with TailwindCSS
- **Smooth Animations**: Framer Motion for delightful interactions
- **Dark/Light Theme**: (Coming soon)
- **Accessibility**: WCAG compliant interface

## 🛠 Tech Stack

### Frontend

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and better developer experience
- **React Router**: Client-side routing with nested routes
- **TailwindCSS**: Utility-first CSS framework for rapid styling

### State Management

- **Context API**: Global state management for todos
- **useReducer**: Predictable state updates with actions

### Animations & UI

- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent icons
- **Custom Components**: Reusable UI components

### API & Services

- **Axios**: HTTP client for API requests
- **Date-fns**: Modern date utility library
- **UUID**: Unique identifier generation

### Development

- **ESLint & Prettier**: Code linting and formatting
- **TypeScript Config**: Strict type checking
- **Modern Build Tools**: Create React App with TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZiyauddinAnsari/portfolio_todo_combo.git
   cd portfolio_todo_combo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)

   ```bash
   # Create .env file in root directory
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   REACT_APP_NEWS_API_KEY=your_news_api_key
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, Layout
│   ├── todos/          # Todo-specific components
│   └── ui/             # Basic UI components (Button, Card)
├── context/            # React Context for state management
├── data/               # Static data and mock data
├── pages/              # Page components (Home, About, etc.)
├── services/           # API services and external integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## 🎯 Key Components

### Todo Management

- **TodoContext**: Global state management with useReducer
- **TodoFilters**: Advanced filtering and search functionality
- **TodoItem**: Individual todo with actions and animations
- **AddTodoForm**: Modal form for creating new todos

### Portfolio Features

- **ProjectCard**: Interactive project showcase cards
- **SkillBar**: Animated skill proficiency indicators
- **ExperienceTimeline**: Professional experience display
- **ContactForm**: Contact form with validation

### API Integration

- **WeatherService**: OpenWeather API integration
- **NewsService**: News API integration with fallback data

## 🔧 Configuration

### API Keys Setup

For full functionality, obtain API keys from:

1. **OpenWeather API**: [openweathermap.org](https://openweathermap.org/api)
2. **News API**: [newsapi.org](https://newsapi.org/)

Add them to your `.env` file:

```bash
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_NEWS_API_KEY=your_api_key_here
```

### Customization

- Update personal information in `src/data/portfolioData.ts`
- Modify color scheme in `tailwind.config.js`
- Replace placeholder images with your own
- Update social media links in components

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile**: 320px - 767px (Hamburger menu, stacked layout)
- **Tablet**: 768px - 1023px (Optimized grid layouts)
- **Desktop**: 1024px+ (Full feature layout)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure environment variables

### Build Command

```bash
npm run build
```

## 🎨 Design Philosophy

This project focuses on:

- **User Experience**: Intuitive navigation and interactions
- **Performance**: Optimized loading and smooth animations
- **Accessibility**: WCAG guidelines and keyboard navigation
- **Maintainability**: Clean code structure and TypeScript safety
- **Scalability**: Modular components and efficient state management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ziyauddin Ansari**

- Portfolio: [Your Portfolio URL]
- GitHub: [@ZiyauddinAnsari](https://github.com/ZiyauddinAnsari)
- LinkedIn: [Ziyauddin Ansari](https://linkedin.com/in/ziyauddin-ansari)
- Email: ziyauddin.ansari@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for consistent icons
- [Unsplash](https://unsplash.com/) for beautiful placeholder images

---

⭐ If you found this project helpful, please give it a star on GitHub!

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] User authentication
- [ ] Cloud synchronization for todos
- [ ] PWA capabilities
- [ ] Advanced project filtering
- [ ] Blog section integration
- [ ] Multi-language support
- [ ] Performance analytics dashboard
