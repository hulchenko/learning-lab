import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./context/TodoContext.tsx";
import { useTodoStore } from "./store.ts";
import { useFetch } from "./hooks/useFetch.ts";

function App() {
  const [task, setTask] = useState<string | "">("");
  const { data, error, loading } = useFetch("https://67e97f30bdcaa2b7f5b98c85.mockapi.io/todo");

  // zustand store actions
  const { setTodos, todos, add: addTodo, remove: removeTodo } = useTodoStore((state) => state);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = (e.target as HTMLFormElement).content.value;
    addTodo(content);
    setTask("");
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <form onSubmit={submitHandler}>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="content" placeholder="add new todo.." />
        <button type="submit">Add</button>
      </form>
      {error
        ? error
        : todos.map((todo: Todo) => (
            <div key={todo.id}>
              <p>{todo.content}</p>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
          ))}
    </>
  );
}

export default App;
