import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  var renderItems = [];
  const cartItems = useSelector((store) => store.cart.items);
  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    renderItems.push(element.payload);
  }
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div>CART</div>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear CART
      </button>
      {renderItems.length === 0 ? (
        "Go to Home add Some Items First"
      ) : (
        <div className="w-6/12">
          <ItemsList items={renderItems} />
        </div>
      )}
    </div>
  );
};
export default Cart;
