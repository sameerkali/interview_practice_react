import { useState } from "react";

export default function Form3() {
  const [name, setName] = useState("");
  const [nameerr, setNameerr] = useState(false);
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState(false);
  const [pass, setpass] = useState("");
  const [passerr, setasserr] = useState(false);

  const namefunc = (e) => {
    setName(e.target.value);
    setNameerr(e.target.value.length < 3);
  };
  const emailfunc = (e) => {
    setemail(e.target.value);
    setemailerr(
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)
    );
  };
  const passfunc = (e) => {
    setpass(e.target.value);
    setasserr(e.target.value.length < 3);
  };

  return (
    <>
      <form>
        <label>name</label>
        <input type="text" name="name" onChange={namefunc} />
        {nameerr && <p>name is short</p>}
        <label>email</label>
        <input type="email" name="email" onChange={emailfunc} />
        {emailerr && <p>email is encorrect</p>}

        <label>password</label>
        <input type="password" name="password" onChange={passfunc} />
        {passerr && <p>password is short</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
