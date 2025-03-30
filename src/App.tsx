import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import { Todo } from "./context/TodoContext";
import { addTodo, getTodos, removeTodo } from "./lib/queries";

const FETCH_URL = "https://67e97f30bdcaa2b7f5b98c85.mockapi.io/todo";

function App() {
  const queryClient = useQueryClient();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const {
    data: todos,
    isLoading,
    error: todosError,
  } = useQuery({
    queryKey: ["todos", FETCH_URL],
    queryFn: () => getTodos(FETCH_URL),
    retry: false,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => setError("Failed adding todo."),
  });

  const { mutateAsync: removeTodoMutation } = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => setError("Failed removing todo."),
  });

  const addTodoHandler = async () => {
    await addTodoMutation({ content: task, url: FETCH_URL });
    setTask("");
  };

  const removeTodoHandler = async (id: number) => {
    await removeTodoMutation({ id, url: FETCH_URL });
  };

  if (isLoading) return <div>Loading...</div>;
  if (todosError) return <div>{todosError.message}</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="content" placeholder="Add new todo.." />
        <button type="submit" onClick={addTodoHandler}>
          Add
        </button>
      </div>
      {todos?.map((todo: Todo) => (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => removeTodoHandler(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
