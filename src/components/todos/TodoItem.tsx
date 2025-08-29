import React from "react";
import { motion } from "framer-motion";
import { Check, Edit2, Trash2, Calendar, Flag } from "lucide-react";
import { Todo } from "../../types/todo";
import { useTodo } from "../../context/TodoContext";
import {
  formatDate,
  getPriorityColor,
  getCategoryColor,
} from "../../utils/todoUtils";
import Card from "../ui/Card";

interface TodoItemProps {
  todo: Todo;
  index: number;
  onEdit?: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, onEdit }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch({ type: "DELETE_TODO", payload: todo.id });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Card
        className={`transition-all duration-200 ${
          todo.completed ? "opacity-75" : ""
        }`}
      >
        <div className="flex items-start space-x-4">
          {/* Checkbox */}
          <button
            onClick={handleToggle}
            className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              todo.completed
                ? "bg-primary-600 border-primary-600 text-white"
                : "border-gray-300 hover:border-primary-400"
            }`}
          >
            {todo.completed && <Check size={14} />}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-medium ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-900"
                  }`}
                >
                  {todo.title}
                </h3>
                {todo.description && (
                  <p
                    className={`text-sm mt-1 ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {todo.description}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => {
                    if (onEdit) {
                      onEdit(todo);
                    }
                  }}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={todo.completed}
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {/* Category */}
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(
                  todo.category
                )}`}
              >
                {todo.category}
              </span>

              {/* Priority */}
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium flex items-center ${getPriorityColor(
                  todo.priority
                )}`}
              >
                <Flag size={12} className="mr-1" />
                {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
              </span>

              {/* Due Date */}
              {todo.dueDate && (
                <span className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  {formatDate(todo.dueDate)}
                </span>
              )}

              {/* Created Date */}
              <span className="text-xs text-gray-400">
                Created {formatDate(todo.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TodoItem;
