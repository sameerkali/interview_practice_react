import React from "react";
import useFetchPost from "./Hooks/useFecthPost";

const CustomHookTesting = () => {
  const [response, loading, error] = useFetchPost({
    url: "https://jsonplaceholder.typicode.com/todos",
    completed: true,
    id: 699,
    title: "test result by sameer",
    userId: 69
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error: {error.message}
      </p>
    );

  return (
    <div>
      {response &&
        <p>
          Response: {JSON.stringify(response)}
        </p>}
    </div>
  );
};

export default CustomHookTesting;

// import React from 'react'
// import UseFetch from './Hooks/UseFetch'

// const CustomHookTesting = () => {
//     const [data, loading] = UseFetch("https://jsonplaceholder.typicode.com/todos")
//     console.log("data: ", data)
//   return (
//     <div>{loading ? <div>loading....</div> :<div>
//         <ol>{
//             data.map((data) => (
//                 <li key={data.id}>{data.title}</li>
//             ))
//         }</ol>
//     </div>}</div>
//   )
// }

// export default CustomHookTesting
