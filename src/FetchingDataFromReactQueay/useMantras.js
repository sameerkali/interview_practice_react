
import { useQuery } from "react-query";

const useMantras = () => {
  const fetchMantras = async () => {
    const response = await fetch(
      "https://divinezone.azurewebsites.net/getAllMantrasForBuild"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  };

  return useQuery("mantras", fetchMantras);
};

export default useMantras;
