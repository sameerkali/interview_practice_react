import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordErr, setpasswordErr] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameErr(e.target.value.length < 3);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailErr(
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)
    );
  };
  const handlePasswoedChange = (e) => {
    setpassword(e.target.value);
    setpasswordErr(
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(
        e.target.value
      )
    );
  };

  const handleSubmit = (e) => {
    if (nameErr || emailErr || passwordErr) {
      alert("Please fix the validation errors before submitting the form.");
      return;
    } else {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <form className="main__div" onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleNameChange}
      />
      {nameErr && (
        <p style={{ color: "red" }}>Name should be more than 3 characters</p>
      )}
      <br />

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="jon@doe.com"
        onChange={handleEmailChange}
      />
      {emailErr && <p style={{ color: "red" }}>Invalid email address</p>}
      <br />

      <label>Password</label>
      <input type="password" onChange={handlePasswoedChange} name="password" />
      {passwordErr && <p style={{ color: "red" }}>make a strong password</p>}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
