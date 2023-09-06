import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");
  const {onSubmit} = props;

  function handleSubmit(e) {
    e.preventDefault();
  
    if (newItem === '')
      return
    
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            placeholder="Item description"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}


