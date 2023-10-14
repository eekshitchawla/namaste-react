import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhatsOnYourMind from "./WhatsOnYourMind.js";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [toggleList, setToggleList] = useState(true);
  const [searchText, setSearchtext] = useState("");
  const status = useOnlineStatus();
  const [mind, setMind] = useState(null);
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
    setMind(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    console.log(json);
  };

  if (status === false) return <h1>Looks like you're offline!</h1>;

  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex items-center justify-center flex-col flex-wrap ">
      {/* whats on your mind? */}
      <WhatsOnYourMind mind={mind} />

      {/* BUTTON AND SEARCH */}
      <div className=" border-t-4 border-b-4 py-4 topBar flex items-center justify-between w-[80vw]">
        {/* TOP RESTUARANTS */}
        <button
          className="text-[#fc8019] p-2 rounded-md text-md font-bold"
          onClick={() => {
            const temp = list.filter((res) => res.info.avgRating > 4);
            setToggleList(!toggleList);
            setFilteredList(toggleList ? list : temp);
          }}
        >
          {toggleList ? "Show Top Restaurants" : "Show All Restaurants"}
        </button>

        {/* SEARCH FUNCTIONALITY */}
        <div className="flex">
          <form>
            <input
              className="border border-b-2 border-[#fc8019] outline-none p-1 m-2 rounded-md"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchtext(e.target.value);
              }}
            />
            <button
              className="text-[#fc8019] p-2 rounded-md text-md font-bold search"
              onClick={(e) => {
                e.preventDefault();
                const filtered = list.filter((li) =>
                  li.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredList(filtered);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* RENDER LIST */}
      <div className="w-[100%] py-4 flex-wrap flex flex-col items-center justify-center">
        <div className="w-[80%] py-4 text-2xl">
          <strong>Restaurants with online food delivery in Delhi</strong>
        </div>
        <div className="w-[80%] flex flex-wrap">
          {filteredList?.length === 0 ? (
            <div className="mt-10 text-2xl">No Matching Results Founds 😓</div>
          ) : null}
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
    </div>
  );
};
export default Body;
