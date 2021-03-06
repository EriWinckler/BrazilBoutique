import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import data from "../../data/data";

const Tops = () => {
  const topsData = data.filter(function (tops) {
    return tops.category === "Tops";
  });

  return (
    <section id="home">
      <div className="homeTitle">
        <h1>Tops</h1>
      </div>
      <div className="store">
        {topsData?.map((item) => (
          <Product
            id={item.id}
            category={item.category}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            imageAlt={item.imageAlt}
            details={item.details}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Tops;
