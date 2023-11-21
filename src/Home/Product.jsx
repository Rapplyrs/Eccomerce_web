import React, { useContext } from 'react';
import { ShopContext } from '../Context/Shop-context';

export const Product = (props) => {
  
  const {id, name, price, image} = props.data;
  
  const {addToCart, cartItems} = useContext(ShopContext); 

  const AmountOfItems = cartItems[id]; 
  return ( <div className = "Productcard">
    <img src = {image}/>
    <div className = "text">
        <p>{name}</p>
        <p><b>${price}</b></p>
    
    <button className = "button-class" onClick = {() => addToCart(id)}>Add {AmountOfItems > 0 && <>({AmountOfItems})</>}</button>
    </div>
  </div>
  )
}; 

