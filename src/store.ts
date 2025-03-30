import { create } from "zustand";
import { Todo } from "./context/TodoContext";

export interface Store {
  todos: Todo[];
  add: (content: string) => void;
  remove: (id: number) => void;
}

export const useStore = create<Store>((set) => ({
  todos: [],
  add: (content: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), content }],
    })),
  remove: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
}));
