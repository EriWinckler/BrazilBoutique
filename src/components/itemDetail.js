import React from "react";
import "react-awesome-button/dist/styles.css";
import data from "../data/data";

import { useStateValue } from "../Context/StateProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { AwesomeButton } from "react-awesome-button";

const ItemDetail = ({
  match,
  id,
  title,
  subtitle,
  image,
  price,
  rating,
  imageAlt,
  details,
}) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // Add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        subtitle,
        image,
        imageAlt,
        price,
        rating,
        details,
      },
    });
  };
  console.log(id);

  return (
    <section id="itemDetail">
      <div className="store">
        <div key={title}>
          <div className="container">
            <img src={image} alt={imageAlt} className="productImg" />
          </div>
        </div>
        <div className="description">
          <h5>{title}</h5>
          <p>{subtitle ? subtitle : null}</p>
          <p>{price ? `$ ${price}` : null}</p>
          <p className="details">{details ? `${details}` : null}</p>
        </div>
        <div className="buttom">
          <buttom onClick={addToCart}>Add to basket</buttom>
          <AwesomeButton
            size={"medium"}
            type="primary"
            ripple
            onPress={addToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </AwesomeButton>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
