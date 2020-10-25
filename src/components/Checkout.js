import React from "react";
import { useStateValue } from "../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div>
        {cart?.length === 0 ? (
          <div className="checkoutEmptyMsg">
            <h2>Your cart is empty.</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <section id="checkoutList">
            <h2 className="checkoutTitle">Your Shopping Basket.</h2>
            <div>
              {cart?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {cart?.length > 0 && (
        <div className="checkoutSubtotal">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
