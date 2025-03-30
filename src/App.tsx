import { FormEvent, useState } from "react";
import "./App.css";
// import { useTodo } from "./context/TodoContext.tsx";
import { Todo } from "./context/TodoContext.tsx";
import { useStore } from "./store.ts";
import { Store } from "./store.ts";

function App() {
  // const { todos, dispatch } = useTodo();
  const [task, setTask] = useState<string | "">("");

  // zustand store actions
  const todos = useStore((state: Store) => state.todos);
  const addTodo = useStore((state) => state.add);
  const removeTodo = useStore((state) => state.remove);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = (e.target as HTMLFormElement).content.value;
    addTodo(content);
    // dispatch({ type: "ADD", payload: { content } });
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
          <button
            // onClick={() => dispatch({ type: "REMOVE", payload: { id: todo.id } })}
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
