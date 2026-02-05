import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./context/TodoContext.tsx";
import { useTodoStore } from "./store.ts";

function App() {
  const [task, setTask] = useState<string | "">("");

  // zustand store actions
  const { fetchTodos, todos, add: addTodo, remove: removeTodo } = useTodoStore((state) => state);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = (e.target as HTMLFormElement).content.value;
    addTodo(content);
    setTask("");
  };

  useEffect(() => {
    // zustand async fetch on initial render
    fetchTodos();
  }, []);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="content" placeholder="add new todo.." />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
