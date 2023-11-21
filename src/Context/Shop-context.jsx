import React, {useState, createContext} from "react"; 
import {PRODUCTS} from "../Products"; 

export const ShopContext = createContext(null); 




const getDefaultCart = () => {
    let cart = {}; 
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0; 
    }
    return cart; 
}

export const ShopcontextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());  

  const Subtotal = () => {
    let amount = 0; 
  
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        amount = amount + cartItems[item] * itemInfo.price; 
      }
    }
    return amount; 
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1})); 
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1})); 
  };

  const updateCartItemValue = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount }))
  }
   
  const contextValue = { Subtotal, updateCartItemValue, cartItems, addToCart, removeFromCart}; 

  console.log(cartItems); 
  return (
    <ShopContext.Provider value= {contextValue}>{props.children}</ShopContext.Provider>
  )
}; 
