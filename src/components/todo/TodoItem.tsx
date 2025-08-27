import { useState } from 'react';
import type { TodoItemProps, Todo } from '../../types';

export default function TodoItem({ todo, onUpdate, onDelete, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description || '',
    category: todo.category,
    priority: todo.priority,
    dueDate: todo.dueDate ? todo.dueDate.toISOString().split('T')[0] : '',
  });

  const handleSave = () => {
    const updates: Partial<Todo> = {
      title: editData.title.trim(),
      description: editData.description.trim() || undefined,
      category: editData.category,
      priority: editData.priority,
      dueDate: editData.dueDate ? new Date(editData.dueDate) : undefined,
    };
    onUpdate(todo.id, updates);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: todo.title,
      description: todo.description || '',
      category: todo.category,
      priority: todo.priority,
      dueDate: todo.dueDate ? todo.dueDate.toISOString().split('T')[0] : '',
    });
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
      case 'personal': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400';
      case 'learning': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  if (isEditing) {
    return (
      <div className="card">
        <div className="space-y-4">
          <input
            type="text"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            className="input-field"
            placeholder="Todo title"
          />
          
          <textarea
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            className="input-field"
            placeholder="Description (optional)"
            rows={3}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={editData.category}
              onChange={(e) => setEditData({ ...editData, category: e.target.value as any })}
              className="input-field"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="learning">Learning</option>
            </select>
            
            <select
              value={editData.priority}
              onChange={(e) => setEditData({ ...editData, priority: e.target.value as any })}
              className="input-field"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            
            <input
              type="date"
              value={editData.dueDate}
              onChange={(e) => setEditData({ ...editData, dueDate: e.target.value })}
              className="input-field"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <button onClick={handleCancel} className="btn-secondary">
              Cancel
            </button>
            <button onClick={handleSave} className="btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card transition-all duration-200 ${todo.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start space-x-4">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
          }`}
        >
          {todo.completed && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
                {todo.title}
              </h3>
              {todo.description && (
                <p className={`text-sm mt-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  {todo.description}
                </p>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => setIsEditing(true)}
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                title="Edit todo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                title="Delete todo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(todo.category)}`}>
              {todo.category}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(todo.priority)}`}>
              {todo.priority} priority
            </span>
            {todo.dueDate && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                Due: {todo.dueDate.toLocaleDateString()}
              </span>
            )}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Created: {todo.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}