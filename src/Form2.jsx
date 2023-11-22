import { useState } from "react";

export default function Form2() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [popup, setPopup] = useState(false);

  const nameFunc = (e) => {
    setName(e.target.value);
    setNameErr(e.target.value.length < 3);
  };

  const passwordFunc = (e) => {
    setPassword(e.target.value);
    setPasswordErr(e.target.value.length < 3);
  };

  const emailFunc = (e) => {
    setEmail(e.target.value);
    setEmailErr(
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameErr && !emailErr && !passwordErr) {
      setPopup(true);
    }
  };

  const PopupWindow = () => {
    return (
      <>
        <div>
          <h1>userName: {name}</h1>
          <h1>email: {email}</h1>
          <h1>password: {password}</h1>
        </div>
      </>
    );
  };

  return (
    <>
    <h1>Form 2</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" name="name" onChange={nameFunc} placeholder="name" />
        {nameErr && <span>fix the name</span>}
        <br />
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={emailFunc}
          placeholder="jon@doe.com"
        />
        {emailErr && <span>fix the email</span>}

        <br />
        <label>password</label>
        <input
          type="password"
          onChange={passwordFunc}
          name="password"
        />
        {passwordErr && <span>fix the password</span>}

        <br />

        <button type="submit">Submit</button>
      </form>
      {popup && <PopupWindow />}
    </>
  );
}
