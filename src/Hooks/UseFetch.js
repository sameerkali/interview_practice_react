import { useEffect, useState } from "react";

const UseFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const apidata = await fetch(url);
      const dataApi = await apidata.json();
      setData(dataApi);
      setLoading(false);
    } catch (err) {
      console.log("OOPS - Error fetching:", err);
      setLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

export default UseFetch;
