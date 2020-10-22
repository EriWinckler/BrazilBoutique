import React from "react";
import Product from "./Product";

function Home() {
  return (
    <section id="home">
      <div className="store">
        <Product
          id="1"
          category="Tops"
          title="Lorem Ipsum"
          subtitle="Win the views!"
          image="https://picsum.photos/300/350"
          imageAlt="Lorem Ipsum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida. Orci dapibus ultrices in iaculis nunc sed augue lacus."
          price={19.99}
          rating={5}
        />
        <Product
          id="2"
          category="Tops"
          title="Venenatis a Condimentum"
          subtitle="Win the views!"
          image="https://picsum.photos/250/400"
          imageAlt="Venenatis a Condimentum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida."
          price={19.99}
          rating={5}
        />
        <Product
          id="3"
          category="Tortor at Auctor"
          title="Red Top"
          image="https://picsum.photos/300/600"
          imageAlt="Tortor at Auctor"
          details="Nulla malesuada pellentesque elit eget gravida."
          price={29.99}
          rating={4}
        />

        <Product
          id="8"
          category="Pants"
          title="Egestas Erat"
          subtitle="Win the views again!"
          image="https://picsum.photos/300/250"
          imageAlt="Egestas Erat"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={19.99}
          rating={4}
        />
        <Product
          id="10"
          category="Pants"
          title="Ultrices"
          subtitle="Win the views again!"
          image="https://picsum.photos/200/300"
          imageAlt="Ultrices"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tortor id aliquet lectus proin nibh."
          price={19.99}
          rating={5}
        />
        <Product
          id="11"
          category="Pants"
          title="Placerat"
          subtitle="Win the views again!"
          image="https://picsum.photos/300/350"
          imageAlt="Placerat"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={19.99}
          rating={4}
        />
      </div>
    </section>
  );
}

export default Home;
