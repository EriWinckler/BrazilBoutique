import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import data from "../../data/data";

const Pants = () => {
  const pantsData = data.filter(function (tops) {
    return tops.category === "Pants";
  });

  return (
    <section id="home">
      <div className="homeTitle">
        <h1>Pants</h1>
      </div>
      <div className="store">
        {pantsData?.map((item) => (
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

export default Pants;
