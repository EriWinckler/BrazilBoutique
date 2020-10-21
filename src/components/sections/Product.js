import React from "react";
import { useStateValue } from "../../Context/StateProvider";

function Product({ id, title, image, price, rating, imageAlt }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      // Add item to cart.
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={imageAlt} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
