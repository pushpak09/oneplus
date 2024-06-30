import { useDispatch, useSelector } from "react-redux";
import clearCart from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  //   const handleClearCart = () => {
  //     dispatch(clearCart());
  //   };

  return (
    <div className="text-center m-4 p-4 ">
      <span className="font-bold text-2xl">Cart</span>
      <div className="w-6/12  m-auto">
        {/* <button
          className="bg-black rounded m-2 p-2 text-zinc-50"
          onClick={handleClearCart}
        >
          Clear Cart
        </button> */}
        <ItemList cardData={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
