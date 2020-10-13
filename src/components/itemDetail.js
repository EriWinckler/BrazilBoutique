import React from "react";
import "react-awesome-button/dist/styles.css";
import data from "../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { AwesomeButton } from "react-awesome-button";

/**
 * @author
 * @function ItemDetail
 **/

const ItemDetail = ({ match }) => {
  return (
    <section id="itemDetail">
      <div className="store">
        {data.map((data, i) => {
          return data.id === `${match.params.id}` ? (
            <div>
              <div key={data.title}>
                <div className="container">
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="productImg"
                  />
                </div>
              </div>
              <div className="description">
                <h5>{data.title}</h5>
                <p>{data.subtitle ? data.subtitle : null}</p>
                <p>{data.price ? `$ ${data.price}` : null}</p>
                <p className="details">
                  {data.details ? `${data.details}` : null}
                </p>
              </div>
              <div className="description">
                <AwesomeButton
                  size={"medium"}
                  type="primary"
                  ripple
                  onPress={() => {
                    // add to cart
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Add to cart
                </AwesomeButton>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default ItemDetail;
