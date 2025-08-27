import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';
import type { Todo, TodoCategory, Priority } from '../types';
import TodoItem from '../components/todo/TodoItem';
import TodoForm from '../components/todo/TodoForm';

export default function Todos() {
  const { state, dispatch, filteredTodos } = useTodos();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = (todoData: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    dispatch({ type: 'ADD_TODO', payload: todoData });
    setShowAddForm(false);
  };

  const handleUpdateTodo = (id: string, updates: Partial<Todo>) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, updates } });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const totalTodos = state.todos.length;
  const completedTodos = state.todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Todo Management
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Stay organized and productive with your personal todo management system.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Overview
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{totalTodos}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Pending</span>
                  <span className="font-semibold text-orange-600">{pendingTodos}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Completed</span>
                  <span className="font-semibold text-green-600">{completedTodos}</span>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search todos..."
                  value={state.searchTerm}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
                  className="input-field text-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={state.filter.category}
                  onChange={(e) => dispatch({ 
                    type: 'SET_FILTER', 
                    payload: { category: e.target.value as TodoCategory | 'all' }
                  })}
                  className="input-field text-sm"
                >
                  <option value="all">All Categories</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="learning">Learning</option>
                </select>
              </div>

              {/* Priority Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Priority
                </label>
                <select
                  value={state.filter.priority}
                  onChange={(e) => dispatch({ 
                    type: 'SET_FILTER', 
                    payload: { priority: e.target.value as Priority | 'all' }
                  })}
                  className="input-field text-sm"
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={state.filter.completed.toString()}
                  onChange={(e) => {
                    const value = e.target.value;
                    const completed = value === 'all' ? 'all' : value === 'true';
                    dispatch({ type: 'SET_FILTER', payload: { completed } });
                  }}
                  className="input-field text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="false">Pending</option>
                  <option value="true">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Add Todo Button */}
          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              Add New Todo
            </button>
          </div>

          {/* Add Todo Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full">
                <TodoForm
                  onSubmit={handleAddTodo}
                  onCancel={() => setShowAddForm(false)}
                />
              </div>
            </div>
          )}

          {/* Todo List */}
          {filteredTodos.length > 0 ? (
            <div className="space-y-4">
              {filteredTodos.map((todo, index) => (
                <div
                  key={todo.id}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TodoItem
                    todo={todo}
                    onUpdate={handleUpdateTodo}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleTodo}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {state.todos.length === 0 ? 'No todos yet' : 'No matching todos found'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {state.todos.length === 0 
                  ? 'Create your first todo to get started!'
                  : 'Try adjusting your search or filter criteria.'
                }
              </p>
              {state.todos.length === 0 && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="btn-primary"
                >
                  Create First Todo
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}