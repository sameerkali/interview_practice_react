import React, { useEffect, useState } from "react";
import UseName from "./UseName";
import useHTTP from "./UseHTTP";

const Index = () => {
  const [data, setData] = useState([]);
  const [postDataState, setPostDataState] = useState(null);
  const [userId, setUserId] = useState(69);
  const [id, setId] = useState(102); 
  const [title, setTitle] = useState("test from sameer 02");
  const [body, setBody] = useState("test from sameer 02");
  const sam = UseName();
  const { error, fetchData, postData } = useHTTP();

  const fetchDataFromAPI = async () => {
    const responseData = await fetchData(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(responseData);
  };

  const PostDataFromAPI = async () => {
    const PostResponseData = await postData(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId,
        id,
        title,
        body
      }
    );
    setPostDataState(PostResponseData);
  };

  useEffect(() => {
    fetchDataFromAPI();
    PostDataFromAPI();
  }, []);

  return (
    <div>
      <div>
        Test custom hook: {sam}
      </div>
      <div>
        {data.map((a) => (
          <p key={a.id}>
            {a.name}
          </p>
        ))}
      </div>
      {postDataState && (
        <div>
          Post Data State: {JSON.stringify(postDataState)}
        </div>
      )}
    </div>
  );
};

export default Index;
