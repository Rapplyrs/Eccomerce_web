import React, {useState} from 'react'
import "./Categories.css";


export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (category) => {
    console.log("Hovering over", category); 
    setSelectedCategory(category);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="categorycontainer">
      <ul className="categorylist">
        <li
          className={`categorylinks ${selectedCategory === 'Women' ? 'selected' : ''}`}
          onMouseEnter={() => handleCategoryHover('Women')}
          onMouseLeave={handleCategoryLeave}
        >
          Women
          <ul className="dropdown">
            <li>Tops</li>
            <li>Dresses</li>
            <li>Pants</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li
          className={`categorylinks ${selectedCategory === 'Men' ? 'selected' : ''}`}
          onMouseEnter={() => handleCategoryHover('Men')}
          onMouseLeave={handleCategoryLeave}
        >
          Men
          <ul className="dropdown">
            <li>Shirts</li>
            <li>Pants</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li
          className={`categorylinks ${selectedCategory === 'LifeStyle' ? 'selected' : ''}`}
          onMouseEnter={() => handleCategoryHover('LifeStyle')}
          onMouseLeave={handleCategoryLeave}
        >
          Accessories
          <ul className="dropdown">
            <li>Health & Fitness</li>
            <li>Necklaces & Braces</li>
            <li>Smoke Shop</li>
            <li>Fun & Games</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
