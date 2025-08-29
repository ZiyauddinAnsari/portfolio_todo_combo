import { Todo, TodoFilter } from "../types/todo";
import {
  format,
  isToday,
  isTomorrow,
  isPast,
  differenceInDays,
} from "date-fns";

export const formatDate = (date: Date): string => {
  return format(date, "MMM dd, yyyy");
};

export const formatDateTime = (date: Date): string => {
  return format(date, "MMM dd, yyyy HH:mm");
};

export const getRelativeDate = (date: Date): string => {
  if (isToday(date)) return "Today";
  if (isTomorrow(date)) return "Tomorrow";
  if (isPast(date)) {
    const days = Math.abs(differenceInDays(new Date(), date));
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  const days = differenceInDays(date, new Date());
  return `In ${days} day${days > 1 ? "s" : ""}`;
};

export const filterTodos = (
  todos: Todo[],
  filter: TodoFilter,
  searchQuery: string
): Todo[] => {
  let filteredTodos = [...todos];

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredTodos = filteredTodos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.description?.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (filter.category !== "ALL") {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.category === filter.category
    );
  }

  // Filter by priority
  if (filter.priority !== "ALL") {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.priority === filter.priority
    );
  }

  // Filter by status
  if (filter.status === "COMPLETED") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  } else if (filter.status === "PENDING") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  }

  // Sort todos
  filteredTodos.sort((a, b) => {
    let aValue: any;
    let bValue: any;

    switch (filter.sortBy) {
      case "title":
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
      case "dueDate":
        aValue = a.dueDate ? a.dueDate.getTime() : 0;
        bValue = b.dueDate ? b.dueDate.getTime() : 0;
        break;
      case "priority":
        const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
        aValue = priorityOrder[a.priority];
        bValue = priorityOrder[b.priority];
        break;
      default: // createdAt
        aValue = a.createdAt.getTime();
        bValue = b.createdAt.getTime();
    }

    if (filter.sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return filteredTodos;
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "urgent":
      return "text-red-600 bg-red-100";
    case "high":
      return "text-orange-600 bg-orange-100";
    case "medium":
      return "text-yellow-600 bg-yellow-100";
    case "low":
      return "text-green-600 bg-green-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    Work: "text-blue-600 bg-blue-100",
    Personal: "text-purple-600 bg-purple-100",
    Learning: "text-indigo-600 bg-indigo-100",
    Health: "text-green-600 bg-green-100",
    Finance: "text-yellow-600 bg-yellow-100",
    Other: "text-gray-600 bg-gray-100",
  };
  return colors[category] || "text-gray-600 bg-gray-100";
};

export const getOverdueTodos = (todos: Todo[]): Todo[] => {
  return todos.filter(
    (todo) =>
      !todo.completed &&
      todo.dueDate &&
      isPast(todo.dueDate) &&
      !isToday(todo.dueDate)
  );
};

export const getTodayTodos = (todos: Todo[]): Todo[] => {
  return todos.filter(
    (todo) => !todo.completed && todo.dueDate && isToday(todo.dueDate)
  );
};

export const getUpcomingTodos = (todos: Todo[]): Todo[] => {
  return todos.filter(
    (todo) =>
      !todo.completed &&
      todo.dueDate &&
      differenceInDays(todo.dueDate, new Date()) > 0
  );
};
