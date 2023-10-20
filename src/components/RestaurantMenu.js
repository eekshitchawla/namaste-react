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
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(restaurant);

  return resInfo ? (
    <div className="p-1 align-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-6/12 py-2 flex items-center justify-between font-bold text-lg">
          <div>{restaurant?.name.toUpperCase()}</div>
          <div className="text-green-600">{restaurant?.avgRating}⭐️</div>
        </div>
        <div className="w-6/12 py-2">
          <strong>Cuisines</strong>: {restaurant?.cuisines.join(", ")}
        </div>
        <div className="w-6/12 py-2 border-b-2 text-right">
          {restaurant?.costForTwoMessage}
        </div>
      </div>
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
