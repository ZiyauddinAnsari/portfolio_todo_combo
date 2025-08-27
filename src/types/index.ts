// Core application types and interfaces

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  externalLink: string;
  category: 'react' | 'mobile' | 'api' | 'fullstack' | 'other';
  featured: boolean;
}

export interface Todo {
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

export type TodoCategory = 'work' | 'personal' | 'learning';
export type Priority = 'low' | 'medium' | 'high';

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  searchTerm: string;
}

export interface TodoFilter {
  category: TodoCategory | 'all';
  priority: Priority | 'all';
  completed: boolean | 'all';
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TODO'; payload: { id: string; updates: Partial<Todo> } }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: Partial<TodoFilter> }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'LOAD_TODOS'; payload: Todo[] };

// API Response types
export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }>;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component Props types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ProjectCardProps {
  project: Project;
}

export interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Error types
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}