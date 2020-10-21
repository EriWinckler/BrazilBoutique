export const initialState = {
  cart: [
    {
      id: "1",
      category: "Tops",
      title: "Lorem Ipsum",
      subtitle: "Win the views!",
      image: "https://picsum.photos/300/350",
      imageAlt: "Lorem Ipsum",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida. Orci dapibus ultrices in iaculis nunc sed augue lacus.",
      price: 19.99,
      rating: 5,
    },
    {
      id: "2",
      category: "Tops",
      title: "Lorem Ipsum",
      subtitle: "Win the views!",
      image: "https://picsum.photos/300/350",
      imageAlt: "Lorem Ipsum",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida. Orci dapibus ultrices in iaculis nunc sed augue lacus.",
      price: 19.99,
      rating: 5,
    },
  ],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      // Logic to add item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      // Logic to remove item to cart

      // Cloning the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in cart, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the cart.`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
