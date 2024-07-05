import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  //? Redux recommends taking this function inside of useSelector and placing it in the slice it's applied to.
  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  // );

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between px-4 py-4 text-sm uppercase text-stone-200 bg-stone-800 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 text-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
