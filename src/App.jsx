import React,{useState} from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Detail from "./Components/Detail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Men from "./Components/Men";
import Electronics from "./Components/Electronics";
import Jewelery from "./Components/Jewalery";
import Women from "./Components/Women";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CustomerService from "./Components/CustomerServices";
import FAQ from "./Components/FAQ";
import Furniture from "./Components/Furniture";
function App() {
  let [userName,setUserName]=useState('guest,sign in')
  let [counter,setCounter]=useState(0);
  let [productId,setProductId]=useState();
  let [cart, setCart] = useState([]);

  const incrementFunction=()=>{
    setCounter(prev => prev +1)
  }
  const decrement=()=>{
    setCounter((prev)=>prev -1)
  }
  const remove=()=>{
    
    setCounter(0)
  }
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id && p.source === product.source);
      if (exists) return prev; // Skip duplicates
      return [...prev, product];
    });
  
    incrementFunction(); // Increase cart count
  };
  
  return (
    <>
      <Router>
      <Navbar name={userName} counter={counter}/>
     <Routes>
        <Route path="/signIn" element={<LoginPage setUserName={setUserName}/>}/>
        <Route path="/" element={<Hero/>}/>
        <Route path="/signIn2" element={<LoginPage/>}/>
        <Route path="/products"element={<Products setCounter={incrementFunction}  addToCart={addToCart} setProductId={setProductId}  />}/>
        <Route path="/detail/:source/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} id={productId} setCounter={incrementFunction} decreasing={decrement} idle={remove}/>}/>
        <Route path="/men" element={<Men setCounter={incrementFunction} setProductId={setProductId} addToCart={addToCart}/>}/>
        <Route path="/electronics" element={<Electronics setCounter={incrementFunction} setProductId={setProductId} addToCart={addToCart}/>}/>
        <Route path="/jewelery" element={<Jewelery setCounter={incrementFunction} setProductId={setProductId} addToCart={addToCart}/>}/>
        <Route path="/women" element={<Women setCounter={incrementFunction} setProductId={setProductId} addToCart={addToCart}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<CustomerService/>}/>
        <Route path="/faq" element={<FAQ/>}/>  
        <Route path="/furniture" element={<Furniture setCounter={incrementFunction} setProductId={setProductId} addToCart={addToCart}/>}/>  
     </Routes>
  
     <Footer/>
      </Router>
     
    </>
  )
}

export default App
