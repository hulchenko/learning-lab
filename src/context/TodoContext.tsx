import { createContext, ReactNode, useContext, useState, useReducer } from "react";

export interface Todo {
  id: number;
  content: string;
}

interface TodoContextType {
  todos: Todo[];
  dispatch: React.ActionDispatch<any>;
}

type ReducerActions = { type: "ADD"; payload: { content: string } } | { type: "REMOVE"; payload: { id: number } };

const reducer = (state: Todo[], action: ReducerActions): Todo[] => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
      };
      return [...state, newTodo];
    case "REMOVE":
      const id = action.payload.id;
      const updatedTodos = state.filter((todo: Todo) => todo.id !== id);
      return updatedTodos;
    // important to keep default
    default:
      return state;
  }
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
