import type { Todo } from '../types';

const TODOS_STORAGE_KEY = 'portfolio_todo_todos';
const THEME_STORAGE_KEY = 'portfolio_todo_theme';

export function loadTodos(): Todo[] {
  try {
    const stored = localStorage.getItem(TODOS_STORAGE_KEY);
    if (stored) {
      const todos = JSON.parse(stored);
      // Convert date strings back to Date objects
      return todos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: new Date(todo.updatedAt),
        dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined,
      }));
    }
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
  }
  return [];
}

export function saveTodos(todos: Todo[]): void {
  try {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
}

export function loadTheme(): 'light' | 'dark' {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && (stored === 'light' || stored === 'dark')) {
      return stored;
    }
  } catch (error) {
    console.error('Error loading theme from localStorage:', error);
  }
  
  // Default to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
}

export function clearAllData(): void {
  try {
    localStorage.removeItem(TODOS_STORAGE_KEY);
    localStorage.removeItem(THEME_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing data from localStorage:', error);
  }
}