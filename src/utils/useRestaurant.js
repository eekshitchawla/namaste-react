import { useEffect, useState } from "react";
import { API_PREFIX_URL, API_SUFFIX_URL } from "./constants";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_PREFIX_URL + resId + API_SUFFIX_URL);
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return resInfo;
};

export default useRestaurant;
