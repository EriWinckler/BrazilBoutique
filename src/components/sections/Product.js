import React from "react";
import { Link } from "react-router-dom";
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
    <div id="product">
      <div className="productInfo">
        <Link to={`/shop/${id}`} id={id}>
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
        </Link>
      </div>
      <img className="productImage" src={image} alt={imageAlt} />

      <button onClick={addToCart} className="productButton">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
