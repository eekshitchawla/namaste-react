import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, isOpen, cloudinaryImageId } = resData.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{isOpen ? "OPEN NOW" : "CLOSED :/"}</h4>
        </div>
    );
};
export default RestaurantCard;