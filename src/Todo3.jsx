import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo3() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addItems = () => {
    if (newTodo.trim() !== "") {
      setTodoItems([...todoItems, { name: newTodo }]);
      setNewTodo("");
    }
  };
  const removeItem = (index) => {
    setTodoItems(todoItems.filter((allValues, idx) => idx !== index));
  };

  return (
    <>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/form`}>
        <button>Form</button>
      </Link>
      <h1>Todo List 03</h1>
      <div className="input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => e.target.value}
          placeholder="add your task here"
        />
        <button onClick={addItems}>+</button>
      </div>
      <div className="output">
        <ol>
          {todoItems.map((todo, index) => (
            <li key={index}>
              {todo.name} <button onClick={() => removeItem(index)}>X</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
