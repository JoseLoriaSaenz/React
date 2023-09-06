export function TodoItem(props) {
  const {todo, deleteTodo, toggleTodo} = props;
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />{" "}
          {todo.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
}
