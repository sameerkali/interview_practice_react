import { useEffect, useState } from "react";

export default function ApiCall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api();
  }, []);
  const api = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <h1>ApiCall</h1>
      {data.map((data, index) => (
        <li key={index}> {data.login} </li>
      ))}
    </>
  );
}
