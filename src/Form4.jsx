import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const checkForError = () => {
    setNameErr(name.length < 3);
    setEmailErr(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email));
    setPasswordErr(password.length < 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkForError();
    if (!nameErr && !emailErr && !passwordErr) {
      alert("Form submitted successfully");

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      
      <Link to={`/`}>
    <button >Home</button>
    </Link>
      <Link to={`/todo`}>
    <button >Todo</button>
    </Link>
      <h1>Form4</h1>
      <form onSubmit={handleSubmit}>
        <label> User Name</label>
        <input type="text" name="userName" value={name} onChange={(e) => setName(e.target.value)} />
        {nameErr && <span style={{ color: "red" }}>Check name</span>}
        <hr />
        <label> User Email</label>
        <input type="email" name="userEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailErr && <span style={{ color: "red" }}>Check email</span>}
        <hr />

        <label> User Password</label>
        <input type="password" name="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        {passwordErr && <span style={{ color: "red" }}>Check password</span>}
        <hr />

        <button type="submit" name="submit">Login</button>
      </form>
    </>
  );
}
