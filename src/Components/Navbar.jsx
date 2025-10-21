import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../navCSS.css';
import cartLogo from "../assets/cart-svg.svg";
import lightCart from "../assets/light-cart.svg";
import darkLogo from "../assets/dark-svg.svg";
import lightLogo from "../assets/sun-svg.svg";
import optionLogo from "../assets/option-button.svg";
import commerceLogo from "../assets/commerce-logo.png";
import login from "../assets/new-login.svg";
import lightOption from "../assets/option2.svg";

export default function Navbar({ name,counter}) {
  let [logo, setLogo] = useState(darkLogo);
  let [Cart, setCart] = useState(cartLogo);
  let [isDark, setIsDark] = useState(false);
  let [option, setOption] = useState(optionLogo);

  React.useEffect(() => {
    document.documentElement.className = 'light-mode';
  }, []);

  const toggler = () => {
    let currentMode = document.documentElement.className;
    if (currentMode === 'light-mode') {
      document.documentElement.className = 'dark';
      setLogo(lightLogo)
      setCart(lightCart)
      setOption(lightOption)
    } else {
      document.documentElement.className = 'light-mode';
      setLogo(darkLogo)
      setCart(cartLogo)
      setOption(optionLogo)
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50'>
      <div className='grid grid-rows-2 sticky top-0 justify-content-center font-serif text-base '>
        <div className='grid grid-cols-3 bg-gray-800 items-center'>
          <div className='ml-2'>
            <img src={commerceLogo} alt="logo" className='w-auto h-12 rounded-full' />
          </div>
          <div>
            <input type="search" placeholder=' search the product'
             className='border border-gray-300 text-gray-200 px-2 w-36' 
             />
            <button className='border border-gray-300 text-white px-1'
            >GO</button>
          </div>
          <div className='mr-5 flex items-end justify-end'>
            <img src={login} alt="pic" className='w-auto h-8' />
            <Link to="signIn" className=''>{name}</Link>
          </div>
        </div>

        <div>
          <div>
            <div className='flex items-center justify-between border-b border-gray-300 pb-4 w-full gap-4'>
              <div className='ml-2'>
                <button onClick={toggleMenu}>
                  <img src={option} alt="option" className='h-6 w-auto' />
                </button>
                {isMenuOpen && (
                  <div className={`${isDark ? '' : 'bg-white/5'} absolute w-sm  left-8 shadow-md rounded p-4 z-50 space-y-2`}>
                    <div className='flex lg:hidden block justify-center bg-gray-800'>
                      <img src={login} alt="pic" className='w-auto h-8' />
                      <Link to="signIn" className='lg:hidden block bg-gray-800 text-white'>{name}</Link>
                    </div>
                    <div className='flex gap-20'>
                    <div>
                    <Link to="/" className="lg:hidden block  hover:text-violet-600">Home</Link>
                    <Link to="products" className="lg:hidden block  hover:text-violet-600">Products</Link>
                    <Link to="#" className="lg:hidden block  hover:text-violet-600">Contact</Link>
                    <Link to="#" className="lg:hidden block  hover:text-violet-600"><img src={Cart} alt="cart-logo" className='h-8 w-auto' /></Link>
                    <Link to="/checkout" className="lg:hidden block  hover:text-violet-600">Checkout</Link>
                    <Link to="/about" className="lg:hidden block  hover:text-violet-600">About</Link>
                   
                    </div>
                    <div>
                    <Link to="men" className="block  hover:text-violet-600">Men</Link>
                    <Link to="women" className="block  hover:text-violet-600">Women</Link>
                    <Link to="jewelery" className="block  hover:text-violet-600">Jewalary</Link>
                    <Link to="#" className="block  hover:text-violet-600">pants</Link>
                    <Link to="checkout" className="hidden lg:block  hover:text-violet-600"><img src={Cart} alt="cart-logo" className='h-8 w-auto' /></Link>
                    <Link to="#" className="block  hover:text-violet-600">Baby</Link>
                    <Link to="electronics" className="block  hover:text-violet-600">Electronics</Link>
                    <Link to="furniture" className="block  hover:text-violet-600">furniture</Link>
                  </div>
                  </div>
                  </div>
                )}
              </div>

          
              <div className="hidden lg:grid grid-cols-3 gap-4">
                <Link to="/" className='transition-transform hover:scale-105 duration-300'>Home</Link>
                <Link to="products" className='transition-transform hover:scale-105 duration-300'>products</Link>
              </div>

            
              <div className="hidden lg:grid grid-cols-5 gap-4 items-center">
                <Link to="/checkout" className='transition-transform hover:scale-105 duration-300'>Checkout</Link>
                <Link to="/about" className='transition-transform hover:scale-105 duration-300'>About</Link>
                <Link to="contact" className='transition-transform hover:scale-105 duration-300'>Contact</Link>
                <Link to="#" className='overflow-hidden flex transition-transform hover:scale-105 p-1 duration-300 border border-gray-300 gap-3'>
                  <img src={Cart} alt="cart-logo" className="h-6 w-auto" />
                  <span className='bg-gray-800 text-white px-1 rounded-lg'>{counter}</span>
                </Link>
              </div>

        
              <div className='mr-5'>
                <button onClick={toggler}>
                  <img src={logo} alt="dark-mode" className="h-6 w-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
