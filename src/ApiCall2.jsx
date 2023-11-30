import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function ApiCall2() {

    const [Data, setData] = useState([])
    useEffect(() => {
        Api();
    }, [])
    const Api = async() => {
        const response = await fetch('https://api.github.com/users')
        const dataa = await response.json()
        setData(dataa)
    }
  return (
    <>
    <Link to={`/form`}>
        <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">Form</button>
      </Link>
      <Link to={`/todo`}>
        <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">Todo</button>
      </Link>
      <Link to={`/api`}>
        <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">Api</button>
      </Link>
      <Link to={`/`}>
        <button className="pr-3 pl-3 pt-1 pb-1 bg-cyan-300 text-white m-2">Home</button>
      </Link>
    <b>ApiCall2</b>

    <ol>
        {Data.map((data, index) => (
            <li key={index}> {data.login} </li>
        ))}
    </ol>
    </>
  )
}
