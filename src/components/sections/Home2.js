import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";

import data from "../../data/data";

const Home = () => {
  const [{ cart }, dispatch] = useStateValue();
  const size = 4;

  const addToCart = () => {
    dispatch({
      // Add item to cart.
      type: "ADD_TO_CART",
      item: {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        image: data.image,
        imageAlt: data.imageAlt,
        price: data.price,
        rating: data.rating,
        details: data.details,
      },
    });
  };

  const topsData = data.filter(function (pants) {
    return pants.category === "Tops";
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
          <button onClick={addToCart} className="productButton">
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  const pantsData = data.filter(function (pants) {
    return pants.category === "Pants";
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
    <section id="home" className="sectionTitle">
      <Link to="/tops">
        <h2 className="sectionCategory">Tops</h2>
      </Link>
      <div className="store">{tops}</div>

      <Link to="/pants">
        <h2 className="sectionCategory">Pants</h2>
      </Link>
      <div className="store">{pants}</div>
    </section>
  );
};

export default Home;
