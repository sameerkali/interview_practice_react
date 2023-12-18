import { useState } from "react";
import { Link } from "react-router-dom";

const Form5 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
        <Link to={``}>
          <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">
            Home
          </button>
        </Link>
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col">
          <label className="block">Name</label>
          <input
            className="input border border-black"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          {name.length <= 3 && (
            <span className="text-red-500">Name is too short</span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="block">Email</label>
          <input
            className="input border border-black"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length <= 3 && (
            <span className="text-red-500">Email is too short</span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="block">Password</label>
          <input
            className="input border border-black"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length <= 3 && (
            <span className="text-red-500">Password is too short</span>
          )}
        </div>

        <button className="btn bg-black text-white px-3 py-2 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form5;
