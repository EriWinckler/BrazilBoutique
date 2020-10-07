import React from "react";
import "../style/main.scss";
import { Link } from "react-router-dom";

import data from "../data/data";

/**
 * @author
 * @function Tops
 **/

const Home = (props) => {
  const size = 3;

  const topsData = data.filter(function(pants) {
    return pants.category === "Tops"
  });

  const tops = topsData.slice(0, size).map((data, i) => {
    return (
      <div key={data.title}>
        <div className="container">
          <Link to={`/shop/${data.id}`}>
            <img src={data.image} alt={data.imageAlt} className="productImg" />
            <h5>{data.title}</h5>

            <p>{data.subtitle ? data.subtitle : null}</p>
            <p>{data.price ? `$ ${data.price}` : null}</p>
          </Link>
        </div>
      </div>
    );
  });

  const pantsData = data.filter(function(pants) {
    return pants.category === "Pants"
  });

  const pants = pantsData.slice(0, size).map((data, i) => {
    return (
      <div key={data.title}>
        <div className="container">
          <Link to={`/shop/${data.id}`}>
            <img src={data.image} alt={data.imageAlt} className="productImg" />
            <h5>{data.title}</h5>

            <p>{data.subtitle ? data.subtitle : null}</p>
            <p>{data.price ? `$ ${data.price}` : null}</p>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="sectionTitle">
      <Link to="/tops">
        <h2 className="sectionCategory" id="tops">
          Tops
        </h2>
      </Link>
      <div className="store">{tops}</div>

      <Link to="/pants">
        <h2 className="sectionCategory" id="pants">
          Pants
        </h2>
      </Link>
      <div className="store">{pants}</div>
    </section>
  );
};

export default Home;
