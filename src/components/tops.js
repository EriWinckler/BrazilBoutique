import React from "react";
import "../style/tops.scss";

import tshirtsData from "./tshirtsData";

/**
 * @author
 * @function Tops
 **/

const Tops = (props) => {
  const image = require(s.image)

  return (
    <section className="sectionTitle">
      <h2>Tops</h2>
      {tshirtsData.map((s, i) => (
        <div key={s.title}>
          <div className="store">
            <div className="container">
              <img src={image} alt={s.imageAlt} />
              <h5>{s.title}</h5>
              <p>{s.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </section>

    // <section className="sectionTitle">
    //     <h2>Tops</h2>
    //     <div className="store">
    //         <div className="container">
    //             <img src={require('../images/tshirts/white-front.png')} className="item" />
    //         </div>
    //         <div className="container">
    //             <img src={require('../images/tshirts/white-side.jpg')} className="item" />
    //         </div>
    //         <div className="container">
    //             <img src={require('../images/tshirts/white-back.jpg')} className="item" />
    //         </div>
    //         <div className="container">
    //             <img src=data.image />
    //         </div>
    //     </div>
    // </section>
  );
};

export default Tops;
