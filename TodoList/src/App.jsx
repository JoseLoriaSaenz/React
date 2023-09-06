import { useState, useEffect } from "react";
import "./styles.css";
import { NewTodoForm } from "./Components/NewTodoForm";
import { TodoList } from "./Components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("TODOS");
    if (storedTodos == null) return []
    return JSON.parse(storedTodos)
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function addTodo(title) {
      setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    }); 
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
