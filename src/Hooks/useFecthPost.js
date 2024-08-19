import { useEffect, useState } from "react";

const useFetchPost = ({ url, completed, id, title, userId }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postTheUrl = async () => {
    try {
      setLoading(true);

      let allData = {
        completed: completed ?? false,
        id: id ?? 6969,
        title: title ?? "tested by sameer faridi",
        userId: userId ?? 6969
      };

      let apiData = await fetch(url, {
        method: "POST",
        body: JSON.stringify(allData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      if (!apiData.ok) {
        throw new Error(`HTTP error! status: ${apiData.status}`);
      }

      let responseFromApi = await apiData.json();
      setResponse(responseFromApi);
      console.log(responseFromApi, "response from custom hook post");
      setLoading(false); 
    } catch (error) {
      console.log("Error in post: ", error);
      setError(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    if (url) {
      postTheUrl();
    }
  }, [url]);

  return [response, loading, error];
};

export default useFetchPost;
