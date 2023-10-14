import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import noImg from "../assets/noImg.jpeg";

const ItemsList = (itemCards) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItems = (item, id) => {
    // console.log(id);
    dispatch(removeItem(item, id));
  };
  return (
    <ul className="font-medium bg-white p-4 rounded-md">
      {itemCards?.items.map((item, i) => (
        <li
          key={i}
          className="text-sm p-2 text-left border-b-2 flex align-center justify-between"
        >
          {/* {console.log(item.card.info)} */}
          <div>
            <div className="flex">
              <p>
                {item?.card?.info?.name} - Rs.{" "}
                {(item?.card?.info?.price === undefined
                  ? item?.card?.info?.defaultPrice
                  : item?.card?.info?.price) / 100}
              </p>
              <p className="px-4">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </p>
            </div>
            <p className="font-normal text-gray-600 w-7/12">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            {item.card.info.imageId ? (
              <div>
                <>
                  <div
                    className="h-[20vh] w-[20vw]"
                    style={{
                      backgroundImage: `url(${
                        CDN_URL + item.card.info.imageId
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPositionX: "right",
                      borderRadius: "30px",
                    }}
                  ></div>
                  <div className="flex items-center justify-end">
                    <button
                      className=" bg-[#fc8019] text-white rounded-lg m-4 p-4"
                      onClick={() => {
                        handleAddItems(item);
                      }}
                    >
                      +
                    </button>
                    <p>{}</p>
                    <button
                      className=" bg-[#fc8019] text-white rounded-lg m-4 p-4"
                      onClick={() => handleRemoveItems(item, item.card.info.id)}
                    >
                      -
                    </button>
                  </div>
                </>
              </div>
            ) : (
              <img className="w-40 object-cover" src={noImg} alt="" />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
