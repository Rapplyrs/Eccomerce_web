import './Navbar.css'
import {Link} from 'react-router-dom'; 
import App from '../App';
import { ShoppingBag } from 'phosphor-react';
import {House} from 'phosphor-react'
import { Search } from '../Search';


const Navbar = () =>{
    return(
        <>
       
            <nav className = "navbar"> 
            <h1 className = "navtitle">Ravo Store</h1>
            <Search/>
                <ul className = "nav-links">
                    <li className = "nav-link">
                       <Link to ="/" >
                        <House className = "logo" size = {32}/>
                        </Link> 
                        </li>
                    <li className = "nav-link">
                        <Link to = "/shop">
                            <ShoppingBag className = "logo" size = {32}/>
                        </Link>
                        </li>
                </ul>
            </nav>
        
        </>
    )
}

export default Navbar; 