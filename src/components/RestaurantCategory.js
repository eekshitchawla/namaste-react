import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (category) => {
  const { title, itemCards } = category?.data?.card?.card;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="align-center">
        <div className="mx-auto my-4 font-bold text-lg bg-gray-100 p-4 w-6/12 ">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={handleClick}
          >
            <span>
              {" "}
              {title} ({itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {show ? <ItemsList items={itemCards} /> : ""}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
