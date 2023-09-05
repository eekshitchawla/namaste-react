import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId)
  
  const restaurant = resInfo?.cards?.[0]?.card?.card?.info;
  const carrds = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;



  return resInfo ? (
    <div>
      <h1>{restaurant?.name.toUpperCase()}</h1>
      <h4>Cuisines: {restaurant?.cuisines.join(", ")}</h4>
      <h4>{restaurant?.costForTwoMessage}</h4>
      {carrds?.map((carrd) => (
        <li key={carrd.card.info.id}>
          {carrd.card.info.name} - Rs. {carrd.card.info.price / 100}
        </li>
      ))}
    </div>
  ): <Shimmer/>;
};

export default RestaurantMenu;

