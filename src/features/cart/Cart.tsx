import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import CartItem from "./CartItem";
import Button from "../../components/ui/Button";
import SignupForm from "../../components/SignupForm";
import { useCart } from "../../context/cart/useCart";
import Loading from "../../components/ui/Loading";

function Cart() {
  const [loading, setLoding] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const TOTAL_DISCOUNT = 20;

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  const finalPrice = totalPrice - TOTAL_DISCOUNT;

  useEffect(() => {
    if (cartItems.length > 0 || cartItems.length === 0) {
      setLoding(false);
    }
  }, [cartItems]);

  // !Loading ...
  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex mb-7 justify-center items-center gap-5">
        <h1 className="text-3xl drop-shadow-xs drop-shadow-gray-700">
          Your Shopping Cart
        </h1>
        <ShoppingBag className="text-3xl drop-shadow-xs drop-shadow-gray-700" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-5">
        <div className="w-full md:w-2/3 p-3">
          <h3>Cart Items</h3>
          <div>
            <div className="flex flex-wrap md:flex-nowrap my-3 p-3 bg-gray-100 rounded-sm font-bold text-gray-500">
              <div className="md:w-1/2">
                <span>Product</span>
              </div>
              <div className="md:w-1/6">
                <span>Price</span>
              </div>
              <div className="md:w-1/6">
                <span>Quantity</span>
              </div>
              <div className="md:w-1/6">
                <span>Total</span>
              </div>
            </div>
            {cartItems.length === 0 ? (
              <p>Your cart is Empty</p>
            ) : (
              cartItems.map((product, index) => (
                <CartItem
                  key={index}
                  item={product}
                  quantity={product.quantity}
                  onQuantityChange={(newQuantity) =>
                    updateQuantity(product.product.id, newQuantity)
                  }
                  onRemove={() => removeFromCart(product.product.id)}
                />
              ))
            )}
          </div>
          <div className="p-2">
            <SignupForm />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
          <div className="text-center mb-10">
            <span className="text-2xl">Check Out</span>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3">
              <span>Total Quantity : </span>
              <span className="text-gray-500">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span>Total Price : </span>
              <span className="text-gray-500">$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-3">
              <span>Total Discount : </span>
              <span className="text-gray-500">$ {TOTAL_DISCOUNT}</span>
            </div>
            <div className="flex justify-between p-5">
              <span className="font-bold text-lg">Final Price : </span>
              <span className="font-bold text-lg">
                $ {finalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex items-start my-4">
            <input
              type="checkbox"
              id="terms"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="mr-1 mt-0.5 w-4 h-4 border border-gray-300 "
            />
            <span className="text-gray-500">
              I agree with the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                terms and conditions
              </Link>
              .
            </span>
          </div>
          <div className="grid items-center mt-10">
            <Button variant="success">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
