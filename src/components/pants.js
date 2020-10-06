import React from "react";

import SimpleModal from "./Modal";

import data from "../data/data";

/**
 * @author
 * @function Tops
 **/

const Pants = (props) => {
  return (
    <section className="sectionTitle">
      <h2 className="sectionCategory" id="pants">
        Pants
      </h2>
      <div className="store">
        {data.map((data, i) => {
          return data.category === "Pants" ? (
            <div key={data.title}>
              <div className="container">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="productLink"
                >
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="productImg"
                  />
                  <h5>{data.title}</h5>

                  <p>{data.subtitle ? data.subtitle : null}</p>
                  <p>{data.price ? `$ ${data.price}` : null}</p>
                </a>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Pants;
