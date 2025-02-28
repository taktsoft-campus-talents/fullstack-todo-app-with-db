import "./App.css";
import axios from "axios";
import { useState } from "react";
import Todo from "./components/Todo";
import Registration from "./components/Registration";
import useLocalStorageState from "use-local-storage-state";

const API_HOST = import.meta.env.VITE_API_HOST;
console.log(import.meta.env);

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useLocalStorageState("user", {
    defaultValue: null,
  });

  function loginUser(user) {
    setUser(user);
  }

  async function handleGetTodos() {
    const response = await axios.get(`${API_HOST}/todos`);
    setTodos(response.data);
  }

  async function handleToggleDone(id, newValue) {
    try {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: newValue,
          };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      await axios.patch(`${API_HOST}/todos/${id}`, {
        isDone: newValue,
      });
    } catch (err) {
      handleGetTodos();
      alert("Something went wrong");
    }
  }
  return (
    <>
      <Registration user={user} loginUser={loginUser}></Registration>

      {user ? <p>Welcome {user.email}</p> : undefined}

      <h1>Todos</h1>
      <button onClick={handleGetTodos}>Get Todos</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo
                todo={todo}
                onToggleDone={(newValue) => {
                  handleToggleDone(todo.id, newValue);
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
