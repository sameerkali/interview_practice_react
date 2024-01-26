import { useState } from "react";
import { Link } from "react-router-dom";

const Todo6 = () => {
  const [todo, setTodo] = useState([{ name: "Learn React" }]);
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
    <div className="max-w-2xl mx-auto my-8">
      <div>
        <Link to={`/form`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Form
          </button>
        </Link>
        <Link to={`/todo`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Todo
          </button>
        </Link>
        <Link to={`/api`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Api
          </button>
        </Link>
        <Link to={`/query`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            query
          </button>
        </Link>
        <Link to={`/`}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Home
          </button>
        </Link>
      </div>
      <h1 className="text-5xl font-bold my-4">Todo List 06</h1>
      <div className="flex items-center space-x-4 my-4">
        <input
          type="text"
          value={onlyTodo}
          placeholder="Add Todo"
          onChange={(e) => setOnlyTodo(e.target.value)}
          className="border border-gray-300 px-3 py-2 w-64 focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <div>
        <ol>
          {todo.map((todo, index) => (
            <div key={index} className="mb-2">
              <li className="flex justify-between items-center border-b border-gray-300 py-2">
                {todo.name}
                <button
                  onClick={() => removeTodo(index)}
                  className="text-red-500 "
                >
                  Remove Todo
                </button>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo6;
