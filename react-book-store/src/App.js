import React, {useState, useEffect} from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./components";
import Signup from './components/Signup';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom";
import data from "./data/products";


function App() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  const addToCart = (idToAdd) => {
    let newItems = [...items, idToAdd];
    setItems(newItems);
  };

  const removeFromCart = (idToRemove) => {
      let newItems = items.filter((id) => id !== idToRemove);
      setItems(newItems);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    setProducts(shuffleArray(data));
  }, []);

  

  const getProduct = (products, item) => {
      return products.find((product) => item === product.id);
  };


  let itemDetails = items.map((id) => getProduct(products, id));

  return(
    <Router>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} removeFromCart={removeFromCart} products={products} items={items}/>} />;

        <Route path="/cart" element={<Cart removeFromCart={removeFromCart} inCart={itemDetails}/>} />;

        <Route path="/signup" element={<Signup /> }/>;

      </Routes>
    </Router>
  );
}

export default App;