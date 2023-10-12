import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = (itemCards) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <ul className="font-medium ">
      {itemCards?.items.map((item, i) => (
        <li
          key={i}
          className="text-sm p-2 text-left border-b-2 flex align-center justify-between"
        >
          {/* {console.log(item.card.info)} */}
          <div>
            <p>
              {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
            </p>
            <p className="font-normal text-gray-600 w-7/12">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            {item.card.info.imageId && (
              <div>
                <>
                  <img
                    className="w-40 object-cover"
                    src={CDN_URL + item.card.info.imageId}
                    alt=""
                  />
                  <div>
                    <button
                      className="absolute -mt-5 p-2 bg-slate-400 rounded-lg"
                      onClick={() => handleAddItems(item)}
                    >
                      Add +
                    </button>
                  </div>
                </>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
