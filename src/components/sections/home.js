import React from "react";
import Product from "./Product";

function Home() {
  return (
    <section id="home">
      <div className="homeRow">
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
          id= "2"
          category= "Tops"
          title= "Venenatis a Condimentum"
          subtitle= "Win the views!"
          image= "https://picsum.photos/250/400"
          imageAlt= "Venenatis a Condimentum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida."
          price={19.99}
          rating={5}
        />
      </div>

      <div className="homeRow">
       <Product 
          id= "3"
          category= "Tortor at Auctor"
          title= "Red Top"
          image= "https://picsum.photos/300/600"
          imageAlt= "Tortor at Auctor"
          details="Nulla malesuada pellentesque elit eget gravida."
          price={29.99}
          rating={4}
       />
       <Product 
          id= "4"
          category= "Tops"
          title= "Eget Nunc Lobortis"
          subtitle= "Win the views!"
          image= "https://picsum.photos/400/400"
          imageAlt= "Eget Nunc Lobortis"
          price={28.99}
          rating={3}
       />
       <Product 
          id= "5"
          category= "Tops"
          title= "Quam Adipiscing Vitae"
          subtitle= "Win the views!"
          image= "https://picsum.photos/300/400"
          imageAlt= "Quam Adipiscing Vitae"
          price={159.99}
          rating={5}
       />
      </div>
    </section>
  );
}

export default Home;
