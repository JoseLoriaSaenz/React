import { TodoItem } from "../TodoItem";

export function TodoList(props) {
  const {todos, toggleTodo, deleteTodo} = props;
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          );
        })}
      </ul>
    </>
  );
}
