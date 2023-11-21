import React, {useContext} from "react";
import { ShopContext } from "./Context/Shop-context";
import { PRODUCTS } from "./Products";
import { Cart } from "./Cart";
import { useNavigate } from "react-router-dom";



const shop = () => {

const {Subtotal, cartItems} = useContext(ShopContext); 

const navigate = useNavigate(); 
    return(

        <div>
            <h1>
                Shop Here
            </h1>

        <div>
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] != 0){
              return <Cart data = {product}></Cart>;
            }

            })}
        </div>

        {Subtotal() > 0 ? (
        <div>
            
            <p> Subtotal: $ {Subtotal()} </p>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button>Checkout</button>

        </div>
        ) : (<h1>Your Cart is Empty bro</h1>)}
        </div>
    )
}

export default shop; 