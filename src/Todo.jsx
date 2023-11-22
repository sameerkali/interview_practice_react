import { useState } from "react";

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const removeTodo = (index) => {
    setTodoItems(todoItems.filter((allitems, indexOfFilter) => indexOfFilter !== index));
  };
  

  const addTodo = () => {
    if(newTodo.trim() !== ""){
      setTodoItems([...todoItems, { name: newTodo }]);
      setNewTodo("");
    }
    
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <ol>
          {
            todoItems.map((todo, index) => (
            <li key={index}> {todo.name} <button onClick={() => removeTodo(index)}>Remove</button> </li> ))
          }
        </ol>
      </div>
      <div className="button__container">
        <input type="text" className="input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}
