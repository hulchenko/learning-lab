import { create } from "zustand";
import { Todo } from "./context/TodoContext";

interface Store {
  todos: Todo[];
  add: (content: string) => void;
  remove: (id: number) => void;
  setTodos: (fetchedTodos: Todo[]) => void;
}

export const useStore = create<Store>((set) => ({
  todos: [],
  setTodos: (fetchedTodos: Todo[]) =>
    set(() => ({
      todos: fetchedTodos, // overwrite it altogether
    })),
  add: (content: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), content }],
    })),
  remove: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
}));
