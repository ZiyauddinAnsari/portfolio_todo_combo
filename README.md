# Advanced Portfolio & Todo Combo

A full-featured React + TypeScript application combining a multi-page personal portfolio with an integrated todo management system. This project demonstrates real-world development practices including global state management with Context API, API integration, TypeScript typing, responsive design, and production-grade deployment capabilities.

![Portfolio Home](https://github.com/user-attachments/assets/cb6190a1-59c7-4a02-b320-8c716f76942a)

## 🌟 Features

### Portfolio Section
- **Multi-page Design**: Home, About, Projects, Contact pages with smooth navigation
- **Project Showcase**: Each project includes title, description, tech stack, images, and external links
- **Category Filtering**: Filter projects by type (React, Mobile, API, Full Stack)
- **Responsive Design**: Mobile-first approach with collapsible hamburger menu
- **Smooth Animations**: CSS transitions and hover effects throughout

### Todo Management System
- **Full CRUD Operations**: Add, edit, delete, and mark todos as complete/incomplete
- **Smart Categorization**: Organize todos by Work, Personal, and Learning categories
- **Priority System**: Set and filter by High, Medium, Low priority levels
- **Advanced Filtering**: Search, filter by category, priority, and completion status
- **Local Persistence**: Automatic saving to localStorage for offline continuity
- **Real-time Statistics**: Live overview of total, pending, and completed todos

### External API Integration
- **Weather Widget**: Real-time weather data display on the home page
- **Mock Data Fallback**: Graceful handling when API is unavailable
- **Error Handling**: Robust error states and loading indicators

### Technical Excellence
- **TypeScript**: Comprehensive type safety with custom interfaces and types
- **Context API + useReducer**: Predictable state management for todo system
- **Responsive Design**: Mobile-optimized layout using TailwindCSS
- **Modern React**: Hooks, functional components, and best practices
- **Production Ready**: Optimized build with code splitting and tree-shaking

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS for utility-first responsive design
- **State Management**: Context API with useReducer pattern
- **Routing**: React Router for single-page application navigation
- **External API**: Weather API integration with fallback mock data
- **Development**: ESLint, TypeScript compiler for code quality
- **Deployment Ready**: Configured for Vercel/Netlify deployment

## 📱 Screenshots

### Desktop View
![Desktop Portfolio](https://github.com/user-attachments/assets/cb6190a1-59c7-4a02-b320-8c716f76942a)

### Mobile Responsive Design
![Mobile Projects View](https://github.com/user-attachments/assets/da5bc846-fc93-4455-a400-9ab6aa4c00f2)

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZiyauddinAnsari/portfolio_todo_combo.git
   cd portfolio_todo_combo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   # Create .env file in root directory
   VITE_WEATHER_API_KEY=your_weather_api_key_here
   ```
   > Note: The app works with mock weather data if no API key is provided

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗 Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The optimized build will be created in the `dist/` directory, ready for deployment.

## 📂 Project Structure

```
portfolio_todo_combo/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── todo/          # Todo-specific components
│   ├── contexts/          # React Context providers
│   ├── data/              # Static data and mock data
│   ├── pages/             # Page components (Home, About, etc.)
│   ├── services/          # API services and external integrations
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and helpers
│   └── index.css          # Global styles and Tailwind imports
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🎯 Key Features Implementation

### State Management
The application uses React Context API with useReducer for predictable state updates:

```typescript
// Todo state management
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO': // Handle adding new todos
    case 'UPDATE_TODO': // Handle todo updates
    case 'DELETE_TODO': // Handle todo deletion
    case 'TOGGLE_TODO': // Handle completion toggle
    // ... other actions
  }
};
```

### TypeScript Integration
Comprehensive type safety throughout the application:

```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: TodoCategory;
  priority: Priority;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Responsive Design
Mobile-first approach using TailwindCSS utility classes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Responsive grid layout */}
</div>
```

## 🌐 API Integration

The application integrates with external APIs for enhanced functionality:

- **Weather API**: Displays current weather and forecast
- **Fallback System**: Mock data when API is unavailable
- **Error Handling**: Graceful degradation for network issues

## 📱 Mobile Optimization

- **Responsive Navigation**: Hamburger menu for mobile devices
- **Touch-Friendly**: Optimized button sizes and spacing
- **Mobile-First CSS**: Tailored layouts for different screen sizes
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables if needed
4. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The optimized build works on any static hosting service.

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Run ESLint for code quality
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Contact

**Developer**: Ziyauddin Ansari
- **GitHub**: [@ZiyauddinAnsari](https://github.com/ZiyauddinAnsari)
- **Email**: contact@example.com

## 🎉 Acknowledgments

- Built with React, TypeScript, and TailwindCSS
- Weather data provided by WeatherAPI (with mock fallback)
- Icons and design inspiration from modern web standards
- Deployed with modern CI/CD practices

---

*This project showcases modern React development practices, TypeScript integration, responsive design, and real-world application architecture suitable for portfolio demonstration and production use.*
