import { Todo } from "../context/TodoContext";

const getTodos = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching todos");
  }
  const data = await response.json();
  return data;
};

const addTodo = async ({ content, url }: { content: string; url: string }): Promise<Todo> => {
  const newTodo = {
    id: Date.now(),
    content,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error("Error adding todo");
  }

  return newTodo;
};

const removeTodo = async ({ id, url }: { id: number; url: string }) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error removing todo");
  }
};

export { getTodos, addTodo, removeTodo };
