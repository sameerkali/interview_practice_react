import React from 'react'
import UseFetch from './Hooks/UseFetch'

const CustomHookTesting = () => {
    const [data, loading] = UseFetch("https://jsonplaceholder.typicode.com/todos")
    console.log("data: ", data)
  return (
    <div>{loading ? <div>loading....</div> :<div>
        <ol>{
            data.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))
        }</ol>
    </div>}</div>
  )
}

export default CustomHookTesting