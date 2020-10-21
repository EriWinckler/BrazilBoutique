import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";

function Subtotal() {
  const [{ cart }, reducer] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (
              {cart.length === 1
                ? cart.length + " item"
                : cart.length + " items"}
              ): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout.</button>
    </div>
  );
}

export default Subtotal;
