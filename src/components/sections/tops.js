import React from "react";
import { Link } from "react-router-dom";

import data from "../../data/data";

/**
 * @author
 * @function Tops
 **/

const Tops = (props) => {
  return (
    <section className="sectionTitle">
      <h2 className="sectionCategory" id="tops">
        Tops
      </h2>
      <div className="store">
        {data.map((data, i) => {
          return data.category === "Tops" ? (
            <div key={data.title}>
              <div className="container">
                <Link to={`/shop/${data.id}`}>
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="productImg"
                  />
                  <h5>{data.title}</h5>

                  <p>{data.subtitle ? data.subtitle : null}</p>
                  <p>{data.price ? `$ ${data.price}` : null}</p>
                </Link>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Tops;
