import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);
  const [showIndex, setShowIndex] = useState(null);

  const restaurant = resInfo?.cards?.[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo ? (
    <div className="text-center p-1">
      <h1 className="font-bold text-lg">{restaurant?.name.toUpperCase()}</h1>
      <h4>Cuisines: {restaurant?.cuisines.join(", ")}</h4>
      <h4>{restaurant?.costForTwoMessage}</h4>
      {categories?.map((category, i) => (
        <RestaurantCategory
          key={i}
          data={category}
          setShowIndex={() => setShowIndex(i)}
          showIndex={showIndex === i ? true : false}
          // showIndex={showIndex}
        />
      ))}
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
