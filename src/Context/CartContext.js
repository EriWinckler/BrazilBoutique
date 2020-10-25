import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([
        {
            id: "1",
            category: "Tops",
            title: "Lorem Ipsum",
            subtitle: "Win the views!",
            image: "https://picsum.photos/300/350",
            imageAlt: "Lorem Ipsum",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida. Orci dapibus ultrices in iaculis nunc sed augue lacus.",
            price: 19.99
        }
    ]);
    return (
        <CartContext.Provider value={[ cart, setCart ]}>
            {props.children}
        </CartContext.Provider>
    )
}