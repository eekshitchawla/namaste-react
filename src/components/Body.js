import React, { useState } from "react";
import RestaurantCard from "./RestuarantCard";
import { resList } from '../utils/mockData';

const Body = () => {
    const [list, setList] = useState(resList);
    return (
        <div className="body">
            <button className="search" onClick={() => {
                const temp = list.filter(
                    (res) => res.info.avgRating > 4
                )
                setList(temp)
            }}>Top Restuarents</button>
            <div className="res-container">
                {list.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
export default Body;
