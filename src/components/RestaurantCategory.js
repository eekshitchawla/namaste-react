import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  // const { title, itemCards } = category?.data?.card?.card;
  // console.log(props);
  const handleClick = () => {
    // console.log(props.setShowIndex);
    // console.log(props.showIndex);
    props.setShowIndex();
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="align-center">
        <div className="mx-auto my-4 font-bold text-lg bg-gray-100 p-4 w-6/12  rounded-lg">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={handleClick}
          >
            <span>
              {props?.data?.card?.card?.title} (
              {props?.data?.card?.card?.itemCards.length})
            </span>
            <span>⇓</span>
          </div>
          {props.showIndex ? (
            <ItemsList
              cartItems={cartItems}
              items={props?.data?.card?.card?.itemCards}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
