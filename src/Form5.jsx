import { useState } from "react";
import { Link } from "react-router-dom";

const Form5 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <>
     <Link to={`/`}>
    <button >Home</button>
    </Link>
      <Link to={`/todo`}>
    <button >Todo</button>
    </Link>
      <form>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        {name.length <= 3 && "name is short"}
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        {email.length <= 3 && "email is short"}
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        {password.length <= 3 && "password is short"}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form5;
