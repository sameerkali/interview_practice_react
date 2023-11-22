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
    <div>ApiCall2</div>
    <Link to={`/form`}>

    <button >Form</button>
    </Link>
    <Link to={`/todo`}>

    <button >Todo</button>
    </Link>
    <ol>
        {Data.map((data, index) => (
            <li key={index}> {data.login} </li>
        ))}
    </ol>
    </>
  )
}
