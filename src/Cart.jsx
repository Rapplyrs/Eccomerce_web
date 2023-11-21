import React, {useContext} from 'react'; 
import {ShopContext} from "./Context/Shop-context"; 

export const Cart = (props) => {

const {updateCartItemValue, cartItems, addToCart, removeFromCart} = useContext(ShopContext); 

const {id, name, price, image} = props.data;
 
return (

    <div>
        <img src ={image}/>
        <div>
        <p>{name}</p>
        <p>${price}</p>
        <button onClick = {() => removeFromCart(id)}> - </button>
        <input value = {cartItems[id]} onChange={(e) => updateCartItemValue(Number(e.target.value), id) }/>
        <button onClick = {() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}
