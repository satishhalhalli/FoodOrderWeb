import React ,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

  const [items,updateItems]=useState([])
  const addItemToCart = (item) => {
    updateItems([...items, item]);

    // cartContext.items.push(item)
    console.log('inside addItem',cartContext)
  };
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    message:'click here'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('inside addItem',cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
