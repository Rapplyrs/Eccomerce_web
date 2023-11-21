import React from 'react'
import { PRODUCTS } from "../Products";
import { Features } from './Features';
import './Features.css'; 



export const FeaturedBrands = () => {

  const featured_items = PRODUCTS.slice(0 , 4); 

  return (
    <div className = "featurecontainer">
      <h1> Weekly Featured Items</h1>
    <div className = "features">
            {featured_items.map((produc) => (
            <Features data = {produc}/>
        ))}
    </div>
    
    </div>
  )
}
