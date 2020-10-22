import React from "react";
import { useStateValue } from "../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      {/*<img
        className="checkoutAd"
        src="https://picsum.photos/1500/150"
        alt="ad"
      />*/}
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
          <div>
            <h2 className="checkoutTitle">Your Shopping Basket.</h2>

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
