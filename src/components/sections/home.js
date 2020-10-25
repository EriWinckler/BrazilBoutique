import React from "react";
import Product from "./Product";
import data from "../../data/data";
import { Link } from "react-router-dom";

function Home() {
  const size = 3;

  const topsData = data.filter(function (tops) {
    return tops.category === "Tops";
  });

  const pantsData = data.filter(function (pants) {
    return pants.category === "Pants";
  });

  return (
    <section id="home">
      <Link to={"/tops"}>
        <div className="homeTitle">
          <h1>Tops</h1>
        </div>
      </Link>
      <div className="store">
        {topsData?.slice(0, size).map((item) => (
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

      <Link to={"/pants"}>
        <div className="homeTitle">
          <h1>Pants</h1>
        </div>
      </Link>
      <div className="store">
        {pantsData?.slice(0, size).map((item) => (
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
}

export default Home;
