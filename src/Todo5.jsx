import { useState } from "react";
import { Link } from "react-router-dom";

const Todo5 = () => {
  const [todo, setTodo] = useState([]);
  const [only, setonly] = useState("");

  const handleTodo = () => {
    if (only.trim() !== "") {
      setTodo([...todo, { name: only }]);
      setonly("");
    }
  };

  return (
    <>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/form`}>
        <button>Form</button>
      </Link>
      <h1>Todo List 05</h1>
      <div className="upper">
        <input
          type="text"
          placeholder="todo list"
          value={only}
          onChange={(e) => setonly(e.target.value)}
        />
        <button type="submit" onClick={handleTodo}>
          Add
        </button>
      </div>
      <div className="lower">
        <ol>
          {todo.map((todo, i) => (
            <li key={i}>{todo.name}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todo5;
