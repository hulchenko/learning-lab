import { createContext, ReactNode, useContext, useState } from "react";

export interface Todo {
  id: number;
  content: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (content: string) => {
    const newTodo = {
      id: Date.now(),
      content,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
