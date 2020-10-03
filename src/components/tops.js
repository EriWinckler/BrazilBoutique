import React from "react";
import "../style/tops.scss";

import tshirtsData from "../data/tshirtsData";

/**
 * @author
 * @function Tops
 **/

const Tops = (props) => {
  
  return (
    <section className="sectionTitle">
      <h2>Tops</h2>
      <div className="store">
        {tshirtsData.map((s, i) => (
          <div key={s.title}>
            <div>
              <div className="container" onClick={s.link}>
                <img src={s.image} alt={s.imageAlt} className="productImg" />
                <h5>{s.title}</h5>
                <p>{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tops;
