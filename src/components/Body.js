import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const status = useOnlineStatus();
  const RestaurantCardPromo = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.737726&lng=77.122974&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(list);
  };

  if (status === false) return <h1>Looks like you're offline!</h1>;

  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* TOP RESTUARANTS */}
      <button
        className="search"
        onClick={() => {
          const temp = list.filter((res) => res.info.avgRating > 4);
          setFilteredList(temp);
        }}
      >
        Top Restaurants
      </button>

      {/* SEARCH FUNCTIONALITY */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchtext(e.target.value);
        }}
      />
      <button
        className="search"
        onClick={() => {
          const filtered = list.filter((li) =>
            li.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredList(filtered);
        }}
      >
        Search
      </button>

      {/* RENDER LIST */}
      <div className="res-container">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromo resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
