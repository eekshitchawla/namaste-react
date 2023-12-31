import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;

  const contextData = useContext(UserContext);
  return (
    <div className="noScroll scroll w-64 h-96 m-2 p-3 flex flex-col items-left justify-center text-left overflow-scroll shadow-lg hover:shadow-2xl rounded-xl">
      <img
        className="w-[100%] rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <strong className="text-xl">{name.toUpperCase()}</strong>
      <br />
      <h4>
        <strong>Cuisines: </strong>
        {cuisines.join(", ")}
      </h4>
      <br />
      <h4>
        {" "}
        <strong>Rating: </strong>
        {avgRating} stars
      </h4>
      <br />
      <h4>
        <strong>Delivering in: </strong>
        {sla.deliveryTime} mins
      </h4>
      <br />
      <h4>
        {" "}
        <strong>User: </strong>
        {contextData.loggedInUser}
      </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-green-600 text-white text-sm rounded-lg">
          PURE 🟢
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
