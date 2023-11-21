import React from "react";
import {PRODUCTS} from '../Products';
import  {Product}  from './Product';
import { FeaturedBrands } from "../Features/FeaturedBrands";
import './Home.css'; 



const Home = () =>{


    return (
        <>
        <div className = "home-container" style = {{overflowY: 'auto'}} >
        <FeaturedBrands/>
        <div className = "Product">{PRODUCTS.map((produc) => (
            <Product key={produc.id} data = {produc}/>
        ))}
            
        </div>
        </div>
        </>
    )
}

export default Home;