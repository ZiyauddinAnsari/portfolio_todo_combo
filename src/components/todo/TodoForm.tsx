import { useState } from 'react';
import type { Todo, TodoCategory, Priority } from '../../types';

interface TodoFormProps {
  onSubmit: (todoData: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
  initialData?: Partial<Todo>;
}

export default function TodoForm({ onSubmit, onCancel, initialData }: TodoFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'personal' as TodoCategory,
    priority: initialData?.priority || 'medium' as Priority,
    dueDate: initialData?.dueDate ? initialData.dueDate.toISOString().split('T')[0] : '',
    completed: initialData?.completed || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (formData.dueDate && new Date(formData.dueDate) < new Date(new Date().toDateString())) {
      newErrors.dueDate = 'Due date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const todoData = {
      title: formData.title.trim(),
      description: formData.description.trim() || undefined,
      category: formData.category,
      priority: formData.priority,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined,
      completed: formData.completed,
    };

    onSubmit(todoData);
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {initialData ? 'Edit Todo' : 'Add New Todo'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={`input-field ${errors.title ? 'border-red-500 dark:border-red-500' : ''}`}
            placeholder="What needs to be done?"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="input-field"
            rows={3}
            placeholder="Add more details (optional)"
          />
        </div>

        {/* Category and Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as TodoCategory })}
              className="input-field"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="learning">Learning</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <select
              id="priority"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as Priority })}
              className="input-field"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className={`input-field ${errors.dueDate ? 'border-red-500 dark:border-red-500' : ''}`}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.dueDate && (
            <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
          )}
        </div>

        {/* Completed (only for edit mode) */}
        {initialData && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="completed"
              checked={formData.completed}
              onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
              className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="completed" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Mark as completed
            </label>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            {initialData ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
      </form>
    </div>
  );
}