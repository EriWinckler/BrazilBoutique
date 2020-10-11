import React, { useState, useEffect } from "react";
import data from '../data/data';

/**
 * @author
 * @function ItemDetail
 **/

const ItemDetail = ({match}) => {
  

  return (
    <section id="itemDetail">
      <div className="store">
        {data.map((data, i) => {
          return data.id === `${match.params.id}` ? (
            <div key={data.title}>
              <div className="container">
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="productImg"
                />
                <h5>{data.title}</h5>

                <p>{data.subtitle ? data.subtitle : null}</p>
                <p>{data.price ? `$ ${data.price}` : null}</p>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default ItemDetail;
