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

export enum TodoCategory {
  WORK = "Work",
  PERSONAL = "Personal",
  LEARNING = "Learning",
  HEALTH = "Health",
  FINANCE = "Finance",
  OTHER = "Other",
}

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

export interface TodoFilter {
  category: TodoCategory | "ALL";
  priority: Priority | "ALL";
  status: "ALL" | "COMPLETED" | "PENDING";
  sortBy: "createdAt" | "dueDate" | "priority" | "title";
  sortOrder: "asc" | "desc";
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: Omit<Todo, "id" | "createdAt" | "updatedAt"> }
  | { type: "UPDATE_TODO"; payload: { id: string; updates: Partial<Todo> } }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Partial<TodoFilter> }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "LOAD_TODOS"; payload: Todo[] };
