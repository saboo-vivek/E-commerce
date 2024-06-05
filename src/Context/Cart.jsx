import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
   return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);

   // Function to add item to cart
   const addToCart = (item) => {
      const existingItemIndex = cartItems.findIndex(
         (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
         const updatedCartItems = [...cartItems];
         updatedCartItems[existingItemIndex].quantity += 1;
         setCartItems(updatedCartItems);
      } else {
         setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
      console.log(item);
   };

   // Function to remove item from cart
   const removeFromCart = (id) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
   };

   // Function to calculate total number of items in cart
   const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
   };

   const handleQuantityChange = (id, quan) => {
      setCartItems((prevItems) =>
         prevItems.map((item) =>
            item.id === id ? { ...item, quantity: quan } : item
         )
      );
   };

   const totalSum=()=>{
    return cartItems.reduce((total,item)=>total+(item.quantity*item.price),0)
   }
   
   return (
      <CartContext.Provider
         value={{
            cartItems,
            addToCart,
            removeFromCart,
            getTotalItems,
            handleQuantityChange,
            totalSum
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
