import { FormEvent, useState } from "react";
import "./App.css";
import { useTodo } from "./context/useTodo.tsx";
import { Todo } from "./context/useTodo.tsx";

function App() {
  const { todos, addTodo, removeTodo } = useTodo();
  const [task, setTask] = useState<string | "">("");
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodo = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const content = (e.target as HTMLFormElement).content.value;
  //   const newTodo = {
  //     id: Date.now(),
  //     content,
  //   };
  //   setTodos((prev) => [...prev, newTodo]);
  //   setTask("");
  // };

  // const removeTodo = (id: number) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = (e.target as HTMLFormElement).content.value;
    addTodo(content);
    setTask("");
  };

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
