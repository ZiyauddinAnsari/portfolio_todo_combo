import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle, Circle, AlertCircle, Calendar } from "lucide-react";
import { useTodo } from "../context/TodoContext";
import { Todo } from "../types/todo";
import {
  filterTodos,
  getOverdueTodos,
  getTodayTodos,
  getUpcomingTodos,
} from "../utils/todoUtils";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import AddTodoForm from "../components/todos/AddTodoForm";
import TodoItem from "../components/todos/TodoItem";
import TodoFilters from "../components/todos/TodoFilters";

const Todos: React.FC = () => {
  const { state } = useTodo();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const { todos, filter, searchQuery } = state;

  const filteredTodos = filterTodos(todos, filter, searchQuery);
  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);
  const overdueTodos = getOverdueTodos(todos);
  const todayTodos = getTodayTodos(todos);
  const upcomingTodos = getUpcomingTodos(todos);

  const stats = [
    {
      label: "Total Todos",
      value: todos.length,
      icon: <Circle size={20} />,
      color: "text-blue-600 bg-blue-100",
    },
    {
      label: "Completed",
      value: completedTodos.length,
      icon: <CheckCircle size={20} />,
      color: "text-green-600 bg-green-100",
    },
    {
      label: "Pending",
      value: pendingTodos.length,
      icon: <AlertCircle size={20} />,
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      label: "Overdue",
      value: overdueTodos.length,
      icon: <Calendar size={20} />,
      color: "text-red-600 bg-red-100",
    },
  ];

  // Helper functions for editing
  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingTodo(null);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Todo Manager
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Organize your tasks efficiently with categories, priorities, and due
            dates. Stay productive and never miss a deadline.
          </p>

          <Button size="lg" onClick={() => setShowAddForm(true)}>
            <Plus size={20} className="mr-2" />
            Add New Todo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.color} mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="mb-8">
            <TodoFilters />
          </Card>
        </motion.div>

        {/* Todos List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          {filteredTodos.length > 0 ? (
            <AnimatePresence mode="popLayout">
              {filteredTodos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  onEdit={handleEditTodo}
                />
              ))}
            </AnimatePresence>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {todos.length === 0
                  ? "No todos yet"
                  : "No todos match your filters"}
              </h3>
              <p className="text-gray-600 mb-6">
                {todos.length === 0
                  ? "Create your first todo to get started with organizing your tasks."
                  : "Try adjusting your search or filter criteria."}
              </p>
              {todos.length === 0 && (
                <Button onClick={() => setShowAddForm(true)}>
                  <Plus size={20} className="mr-2" />
                  Create Your First Todo
                </Button>
              )}
            </div>
          )}
        </motion.div>

        {/* Summary Cards */}
        {todos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {/* Today's Todos */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar size={20} className="mr-2 text-blue-600" />
                Due Today ({todayTodos.length})
              </h3>
              <div className="space-y-2">
                {todayTodos.slice(0, 3).map((todo) => (
                  <div
                    key={todo.id}
                    className="text-sm p-2 bg-blue-50 rounded-lg"
                  >
                    <div className="font-medium text-blue-900">
                      {todo.title}
                    </div>
                    <div className="text-blue-700 text-xs">{todo.category}</div>
                  </div>
                ))}
                {todayTodos.length === 0 && (
                  <div className="text-sm text-gray-500 italic">
                    No todos due today
                  </div>
                )}
              </div>
            </Card>

            {/* Overdue Todos */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle size={20} className="mr-2 text-red-600" />
                Overdue ({overdueTodos.length})
              </h3>
              <div className="space-y-2">
                {overdueTodos.slice(0, 3).map((todo) => (
                  <div
                    key={todo.id}
                    className="text-sm p-2 bg-red-50 rounded-lg"
                  >
                    <div className="font-medium text-red-900">{todo.title}</div>
                    <div className="text-red-700 text-xs">{todo.category}</div>
                  </div>
                ))}
                {overdueTodos.length === 0 && (
                  <div className="text-sm text-gray-500 italic">
                    No overdue todos
                  </div>
                )}
              </div>
            </Card>

            {/* Upcoming Todos */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Circle size={20} className="mr-2 text-green-600" />
                Upcoming ({upcomingTodos.length})
              </h3>
              <div className="space-y-2">
                {upcomingTodos.slice(0, 3).map((todo) => (
                  <div
                    key={todo.id}
                    className="text-sm p-2 bg-green-50 rounded-lg"
                  >
                    <div className="font-medium text-green-900">
                      {todo.title}
                    </div>
                    <div className="text-green-700 text-xs">
                      {todo.category}
                    </div>
                  </div>
                ))}
                {upcomingTodos.length === 0 && (
                  <div className="text-sm text-gray-500 italic">
                    No upcoming todos
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Add Todo Form Modal */}
      <AnimatePresence>
        <AddTodoForm
          isOpen={showAddForm}
          onClose={handleCloseForm}
          editingTodo={editingTodo}
        />
      </AnimatePresence>
    </div>
  );
};

export default Todos;
