import { useEffect, useState } from "react";

const ApiCall3 = () => {
  const [data, setData] = useState([]);
  console.log(data, "Fetching data");

  const fetchingData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const mainData = await data.json();
      setData(mainData);
      console.log("try is running");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      {data.map(d =>
        <div key={d.id}>
          <div>
            {d.title}
          </div>
        </div>
      )}
    </div>
  );
};
export default ApiCall3;
