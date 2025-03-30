import { ChangeEvent, FormEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [task, setTask] = useState<string | "">("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = (e.target as HTMLFormElement).content.value;
    const newTodo = {
      id: Date.now(),
      content,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTask("");
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <div>Test</div>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="content" placeholder="add new todo.." />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
