import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchtext] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.737726&lng=77.122974&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return list?.length === 0 ? (<Shimmer/> ): (
        <div className="body">

            {/* TOP RESTUARANTS */}
            <button className="search" onClick={() => {
                const temp = list.filter(
                    (res) => res.info.avgRating > 4
                )
                setFilteredList(temp)
            }}>Top Restaurants</button>

            {/* SEARCH FUNCTIONALITY */}
            <input type="text" value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}} />
            <button className="search" onClick={() => {
                const filtered = list.filter((li)=>li.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                setFilteredList(filtered)
            }}>Search</button>
            
            {/* RENDER LIST */}
            <div className="res-container">
                {filteredList?.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;

