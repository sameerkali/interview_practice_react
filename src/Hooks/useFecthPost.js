import { useEffect, useState } from "react";

const useFetchPost = params => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [url, completed, id, title, userId] = params;
  const postTheUrl = async () => {
    try {
      let allData = {
        completed: false,
        id: 6969,
        title: "tested by sameer faridi",
        userId: 6969
      };
      let apiData = await fetch(url, {
        method: "POST",
        body: JSON.stringify(allData),
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json"
        }
      });
      let responseFromApi = await apiData.json();
      setResponse(responseFromApi);
      console.log(responseFromApi, "response from custom hook post");
      setLoading(false);
    } catch (error) {
      console.log("error in post : ", error);
      setError(error);
      setLoading(true);
    }
  };
  useEffect(() => {
    postTheUrl();
  }, []);

  return [response, loading, error];
};
export default useFetchPost;
