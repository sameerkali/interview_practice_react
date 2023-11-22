import { useState, useEffect } from "react";

export default function Todo4() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoItems(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todoItems change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  const addItems = () => {
    if (newTodo.trim() !== '') {
      setTodoItems([...todoItems, { name: newTodo }]);
      setNewTodo('');
    }
  }

  const removeItem = (index) => {
    setTodoItems(todoItems.filter((_, idx) => idx !== index));
  }

  return (
    <>
      <h1>Todo List 03</h1>
      <div className="input">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="add your task here" />
        <button onClick={addItems}>+</button>
      </div>
      <div className="output">
        <ol>
          {
            todoItems.map((todo, index) => (
              <li key={index}>{todo.name} <button onClick={() => removeItem(index)}>X</button></li>
            ))
          }
        </ol>
      </div>
    </>
  )
}
