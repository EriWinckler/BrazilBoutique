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
    data.map((data, i) => {
      return data.id === `${match.params.id}`
        ? dispatch({
            type: "ADD_TO_CART",
            item: {
              id: data.id,
              title: data.title,
              subtitle: data.subtitle,
              image: data.image,
              imageAlt: data.imageAlt,
              price: data.price,
              rating: data.rating,
              details: data.details,
            },
          })
        : null;
    });
  };

  console.log(data.rating);

  return (
    <section id="itemDetail">
      <div className="store">
        {data.map((data, i) => {
          return data.id === `${match.params.id}` ? (
            <div>
              <div key={data.title}>
                <div className="product">
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="productImage"
                  />
                  <div className="description">
                    <h5>{data.title}</h5>
                    <p>{data.subtitle ? data.subtitle : null}</p>
                    <p className="productPrice">
                      <small>$</small>
                      <strong>{data.price}</strong>
                    </p>
                    <div className="productRating">
                      {data.rating
                        ? Array(data.rating)
                            .fill()
                            .map((_) => <p>⭐</p>)
                        : null}
                    </div>
                    <p className="details">
                      {data.details ? `${data.details}` : null}
                    </p>
                  </div>
                  <div className="buttom">
                    <button onClick={addToCart} className="productButton">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default ItemDetail;
