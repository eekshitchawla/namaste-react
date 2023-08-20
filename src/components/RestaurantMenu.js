import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_PREFIX_URL, API_SUFFIX_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

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
  const restaurant = resInfo?.cards?.[0]?.card?.card?.info;
  const carrds = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;



  return resInfo ? (
    <div>
      <h1>{restaurant?.name.toUpperCase()}</h1>
      <h4>Cuisines: {restaurant?.cuisines.join(", ")}</h4>
      <h4>{restaurant?.costForTwoMessage}</h4>
      {carrds?.map((carrd, i) => (
        <li key={carrd.card.info.id}>
          {carrd.card.info.name} - Rs. {carrd.card.info.price / 100}
        </li>
      ))}
    </div>
  ): <Shimmer/>;
};

export default RestaurantMenu;

