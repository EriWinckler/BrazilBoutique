export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      // Logic to add item to cart
      return { 
        ...state,
        cart: [...state.cart, action.item]
       };
    case "REMOVE_FROM_CART":
      // Logic to remove item to cart
      return { state };
    default:
      return state;
  }
};

export default reducer;
