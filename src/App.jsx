import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from './Navbar/Navbar'; 
import Home from './Home/Home'; 
import Shop from "./Shop";
import { Categories } from "./Categories";
import { ShopcontextProvider } from "./Context/Shop-context";

function App() {

  return (
    <>
    <div className="app">
    <ShopcontextProvider>
    <Router>
      <Navbar/>
      <Categories/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path = "/shop" element ={<Shop/>}/>
      
      </Routes>
   
    </Router>
    </ShopcontextProvider>
    </div>
    </>
    
  )
}

export default App;
