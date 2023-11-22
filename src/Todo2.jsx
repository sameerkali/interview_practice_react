import { useState } from "react"


export default function Todo2() {
    const [addTodo, setAddTodo] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const add = () => {
        if(newTodo.trim() !== '') {
            setAddTodo([...addTodo, { name : newTodo}])
            setNewTodo("")
        }
    }
    const removeItem = (index) => {
        setAddTodo(addTodo.filter((a,i) => i !== index))
    }
  return (
    <>
        <h1>Todo List</h1>
        <div className="input__contaienr">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="add the pending tasks..." id="add__input"  /> 
        <button onClick={add}>add</button> 
        </div>
        <div className="result__container">
            <ol>
                {addTodo.map((todo, index) => (
                    <li key={index}> {todo.name} <button onClick={() => removeItem(index)}>X</button> </li> 
                ))}
            </ol>
        </div>
    </>
  )
}
