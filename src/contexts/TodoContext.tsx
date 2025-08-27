import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { Todo, TodoState, TodoAction } from '../types';
import { loadTodos, saveTodos } from '../utils/storage';

const initialState: TodoState = {
  todos: [],
  filter: {
    category: 'all',
    priority: 'all',
    completed: 'all',
  },
  searchTerm: '',
};

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: action.payload,
      };

    case 'ADD_TODO': {
      const newTodo: Todo = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedTodos = [...state.todos, newTodo];
      saveTodos(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case 'UPDATE_TODO': {
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.updates, updatedAt: new Date() }
          : todo
      );
      saveTodos(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case 'DELETE_TODO': {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodos(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      );
      saveTodos(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    case 'SET_FILTER':
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };

    case 'SET_SEARCH':
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
}

interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
  filteredTodos: Todo[];
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = loadTodos();
    if (savedTodos.length > 0) {
      dispatch({ type: 'LOAD_TODOS', payload: savedTodos });
    }
  }, []);

  // Filter todos based on current filters and search term
  const filteredTodos = React.useMemo(() => {
    return state.todos.filter(todo => {
      // Category filter
      if (state.filter.category !== 'all' && todo.category !== state.filter.category) {
        return false;
      }

      // Priority filter
      if (state.filter.priority !== 'all' && todo.priority !== state.filter.priority) {
        return false;
      }

      // Completed filter
      if (state.filter.completed !== 'all' && todo.completed !== state.filter.completed) {
        return false;
      }

      // Search filter
      if (state.searchTerm) {
        const searchLower = state.searchTerm.toLowerCase();
        return (
          todo.title.toLowerCase().includes(searchLower) ||
          todo.description?.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [state.todos, state.filter, state.searchTerm]);

  const contextValue: TodoContextType = {
    state,
    dispatch,
    filteredTodos,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}