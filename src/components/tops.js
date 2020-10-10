import React from "react";
import data from "../data/data";

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

export default Tops;
