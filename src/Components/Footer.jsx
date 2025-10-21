import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/commerce-logo.png";
import flag from "../assets/flag.svg";
import github from "../assets/github.svg";
import telegram from "../assets/telegram.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram-1.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone-book.svg";

export default function Footer() {
  return (
    <div>
      <div className='mx-5 border-y border-gray-300 pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Shop */}
<div>
  <h3 className='font-semibold mb-2'>Shop</h3>
  <ul className='space-y-1'>
    <li><Link to="products">All Products</Link></li>
    <li><Link to="#">New Arrivals</Link></li>
    <li><Link to="#">Best Sellers</Link></li>
  </ul>
</div>

{/* Help & Support */}
<div>
  <h3 className='font-semibold mb-2'>Help</h3>
  <ul className='space-y-1'>
    <li><Link to="/services">Customer Service</Link></li>
    <li><Link to="#">Shipping & Delivery</Link></li>
    <li><Link to="#">Returns & Refunds</Link></li>
    <li><Link to="/faq">FAQs</Link></li>
  </ul>
</div>

{/* Account & Policies */}
<div>
  <h3 className='font-semibold mb-2'>Account</h3>
  <ul className='space-y-1'>
    <li><Link to="#">My Account</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms & Conditions</Link></li>
  </ul>
</div>

<div className='text-sm text-center text-gray-500 mb-5'>
  © {new Date().getFullYear()} ECommerce Inc. All rights reserved.
</div>

<div className="flex flex-col md:flex-row items-center justify-between pb-5 gap-6 text-sm text-gray-500">
  <ul className='flex flex-wrap gap-3 justify-center md:justify-end'>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Terms of Use</Link></li>
    <li><Link to="#">Site Map</Link></li>
  </ul>
  <div className="flex items-center gap-2">
    <img src={flag} className='w-auto h-5' alt="flag" />
    <span>Ethiopia</span>
  </div>
</div>
</div>
</div>

{/* Footer Bottom */}
<div className='bg-gray-800 py-8'>
  <div className='flex justify-center mb-4'>
    <img src={logo} alt="logo" className='w-auto h-18 rounded-full' />
  </div>

  <div className='flex flex-col md:flex-row items-center justify-center gap-6 text-white text-sm'>
    <div className='flex items-center gap-2'>
      <img src={email} alt="email" className='w-auto h-5' />
      <p>ecommerce@gmail.com</p>
    </div>
    <div className='flex items-center gap-2'>
      <img src={phone} alt="phone" className='w-auto h-5' />
      <p>+251-986-31-25-07</p>
    </div>
  </div>



        <div className='flex justify-center mt-4 gap-4'>
          <a href="https://www.instagram.com/wegenjr" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className='w-auto h-6' /></a>
          <a href="https://t.me/zarathustra0666" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegram" className='w-auto h-6' /></a>
          <a href="https://github.com/wegen-jr" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className='w-auto h-6' /></a>
          <a  href="https://www.linkedin.com/in/wegen Geremew" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className='w-auto h-6' /></a>
        </div>
      </div>
      </div>
  );
}
