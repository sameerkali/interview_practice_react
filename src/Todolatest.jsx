import React, { useEffect, useState } from "react";

const Todolatest = () => {
  const [todo, setTodo] = useState([]);
  const [myTodo, setMyTodo] = useState([]);
//   console.log("----", todo, "----");

  const fetchTodo = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await result.json();
    setTodo(data);
  };
  //   const addTodo = async () => {
  //     let postTodo = {
  //       completed: true,
  //       id: 201,
  //       title: "test by sameer",
  //       userId: 201
  //     };
  //     let result = await fetch("https://jsonplaceholder.typicode.com/todos", {
  //       method: "POST",
  //       Headers: {
  //         Accept: "application.json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(postTodo)
  //     });
  //     const data = await result.json();
  //     console.log(data);
  //   };

  useEffect(() => {
    fetchTodo();
  }, []);
  const handleChange = (e) => {
    console.log(e)
    setMyTodo(e)
  }

  return (
    <div>
      <div>Todo List</div>
      <div className="flex ">
        <input type="text" onChange={(e)=> handleChange(e.target.value)}  placeholder="Enter your Todo Here" />
        <button onClick={() => {}}>Add Todo</button>
      </div>
      {todo.slice(0, 20).map(todo =>
        <ul key={todo.id}>
          <li>
            {todo.title}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Todolatest;
