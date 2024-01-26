// useMantras.js
import { useQuery } from "react-query";
import { BaseUrl } from "../constants/Constant";

const useMantras = () => {
  const fetchMantras = async () => {
    const response = await fetch(
      `${BaseUrl}/getAllMantrasForBuild`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  };

  return useQuery("mantras", fetchMantras, {
    staleTime: 60000, // 1 minute
    cacheTime: 3600000, // 1 hour
  });
};

export default useMantras;
