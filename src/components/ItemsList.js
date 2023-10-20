import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import noImg from "../assets/noImg.jpeg";

const ItemsList = (props) => {
  const { cartItems, items } = props;
  const itemCards = items;
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItems = (item, id) => {
    dispatch(removeItem(item, id));
  };
  const qtyMap = {};
  // console.log(cartItems);
  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index].payload;
    // console.log(element.card.info.id);
    qtyMap[element.card.info.id] = element.card.info.qty;
  }
  // console.log(qtyMap);
  return (
    <ul className="font-medium bg-white p-4 rounded-md">
      {itemCards?.map((item, i) => (
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
                    <p>
                      {/* {item?.card?.info?.qty !== undefined
                        ? item?.card?.info?.qty
                        : 0} */}
                      {qtyMap[item.card.info.id]}
                    </p>
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
