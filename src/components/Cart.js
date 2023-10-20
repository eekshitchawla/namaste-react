import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import trash from "../assets/circle-trash.png";
import empty from "../assets/cart_is_empty.png";

const Cart = () => {
  var renderItems = [];
  const cartItems = useSelector((store) => store.cart.items);
  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    renderItems.push(element.payload);
  }
  // console.log(renderItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < renderItems.length; index++) {
      const item = renderItems[index];
      total +=
        ((item?.card?.info?.price === undefined
          ? item?.card?.info?.defaultPrice
          : item?.card?.info?.price) /
          100) *
        item?.card?.info?.qty;
    }
    return total;
  };

  return (
    <div className="flex flex-col items-center justify-start">
      {renderItems.length === 0 ? (
        <div className="h-[90vh] w-[100vw] bg-white flex justify-center items-center">
          <img
            className="cursor-pointer"
            src={empty}
            alt=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />
        </div>
      ) : (
        <div className="w-[80vw] flex flex-col items-center justify-center">
          <div className="w-full py-8 flex justify-around">
            <strong>EEKSHIT's CART</strong>
            <img
              className="h-7 w-7 cursor-pointer"
              src={trash}
              alt=""
              onClick={handleClearCart}
            />
          </div>
          <div className="flex">
            <div className="w-8/12">
              <ItemsList cartItems={cartItems} items={renderItems} />
            </div>
            <div className="w-4/12 flex flex-col items-center justify-start border rounded-lg p-8 border-slate-400">
              <div className="text-2xl pb-8 font-bold">
                Billing <hr />
              </div>
              {renderItems.map((item) => {
                return (
                  <div
                    key={item?.card?.info?.id}
                    className="w-10/12 py-2 flex justify-between"
                  >
                    <div>{item?.card?.info?.name}</div>
                    {"  "}
                    <div id="eachVal">
                      {parseFloat(
                        ((item?.card?.info?.price === undefined
                          ? item?.card?.info?.defaultPrice
                          : item?.card?.info?.price) /
                          100) *
                          item?.card?.info?.qty
                      ).toFixed(2)}
                    </div>
                  </div>
                );
              })}
              <div className="text-xl ml-auto">
                <strong>Total: {calculateTotal().toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
