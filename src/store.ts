import { create } from "zustand";
import { Todo } from "./context/TodoContext";

interface Store {
  todos: Todo[];
  add: (content: string) => void;
  remove: (id: number) => void;
  setTodos: (fetchedTodos: Todo[]) => void; // using useEffect or React Query. This is a wrong approach, and it causes duplication
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<Store>((set) => ({
  todos: [],
  setTodos: (todos: Todo[]) => set({ todos }),
  fetchTodos: async () => {
    const response = await fetch("https://67e97f30bdcaa2b7f5b98c85.mockapi.io/todo");
    const data = await response.json();
    set(() => ({ todos: data }));
  },
  add: (content: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), content }],
    })),
  remove: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
}));
