import { useState } from "react";
import { Link } from "react-router-dom";

const Todo6 = () => {
  const [todo, setTodo] = useState([
    { name: "kaddu khalo" },
    { name: "matkhao" },
    { name: "coding" },
    { name: "practice " },
    { name: "for interview" },
    { name: "hmmm" },
    { name: "I am noukri less 😢" }
  ]);
  const [onlyTodo, setOnlyTodo] = useState("");

  const addTodo = () => {
    if (onlyTodo.trim() !== "") {
      setTodo([...todo, { name: onlyTodo }]);
      setOnlyTodo("");
    }
  };
  const removeTodo = (index) => {
    setTodo(todo.filter((allValues, idx) => idx !== index));
  };

  return (
    <>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/form`}>
        <button>Form</button>
      </Link>
      <h1>Todo List 06</h1>
      <div className="upper">
        <input
          type="text"
          value={onlyTodo}
          placeholder="Add Todo"
          onChange={(e) => setOnlyTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="lower">
        <ol>
          {todo.map((todo, index) => (
            <div key={index}>
              <li>
                {todo.name}{" "}
                <button onClick={() => removeTodo(index)}>Remove Todo</button>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todo6;
