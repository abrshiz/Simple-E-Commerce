import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function LoginPage({setUserName}) {
  const SLIDES = {
    CREATE: 0,
    LOGIN: 1,
    FORGOT: 2,
  };

  const [slide, setSlide] = useState(SLIDES.LOGIN);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();
  let [name,setName]=useState('');


  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validator(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8 || password.length > 14) {
      alert("Password must be between 8 and 14 characters.");
      return;
    }

    alert("Account created successfully!");
     setUserName(name);
     navigate('/')
  }

  function loginValidator(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8 || password.length > 14) {
      alert("Password must be between 8 and 14 characters.");
      return;
    }

    alert("Login successful!");
    setUserName(name);
    navigate('/')
  }
  function Reset(e){
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert('password reseted')
   e.target.value=''
    navigate('/')
  }

  return (
    <div className="w-full max-w-md mx-auto my-20 overflow-hidden shadow-xl">
     
      <div className="relative w-full text-black">
     
        {/* Create Account */}
        {slide === 0 && (
          
        <div className="w-full max-w-md flex-shrink-0 px-4">
               <div className="flex justify-center mt-15 text-gray-800 bg-gray-800 text-white ">
                    <h1>welcome to E-Commerce. please login</h1>
               </div>
            <div className="bg-gray-100 w-full">
              <div className='flex justify-center text-2xl'>
                <h3>create account</h3>
              </div>
              <form className="mx-4 mt-10 bg-white">
                <input
                  type="text"
                  placeholder="Full name"
                  className="px-3 py-4 mb-2 border border-gray-800 w-full"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-4 mb-2 border border-gray-800 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-3 py-4 border border-gray-800 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>

              <div className="flex justify-center gap-10 mt-2">
                <button
                  onClick={() => setSlide(SLIDES.FORGOT)}
                  className="text-red-500 underline"
                >
                  forgot password?
                </button>
                <button
                  onClick={() => setSlide(SLIDES.LOGIN)}
                  className="text-green-500 underline"
                >
                  login
                </button>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="submit"
                  className="bg-gray-800 border border-gray-800 w-full py-2 text-white"
                  onClick={validator}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Login */}
        {slide === 1 && (
          <div className="w-full max-w-md flex-shrink-0 px-4">
               <div className="flex justify-center mt-15 text-gray-800 bg-gray-800 text-white ">
                    <h1>welcome to E-Commerce. please login</h1>
               </div>            
            <div className="bg-gray-100 w-full">
              <div className='flex justify-center text-2xl'>
                <h3>Log in</h3>
              </div>
              <form className="mx-4 mt-10 bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-4 mb-2 border border-gray-800 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-3 py-4 border border-gray-800 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>

              <div className="flex justify-center gap-10 mt-2">
                <button
                  onClick={() => setSlide(SLIDES.FORGOT)}
                  className="text-red-500 underline"
                >
                  forgot password?
                </button>
                <button
                  onClick={() => setSlide(SLIDES.CREATE)}
                  className="text-green-500 underline"
                >
                  create new account
                </button>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="submit"
                  className="bg-gray-800 border border-indigo-800 w-full py-2 text-white"
                  onClick={loginValidator}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Forgot Password */}
        {slide === 2 && (
          <div className="w-full max-w-md flex-shrink-0 px-4">
               <div className="flex justify-center mt-15 text-gray-800 bg-gray-800 text-white ">
                    <h1>welcome to E-Commerce. please login</h1>
               </div>           
            <div className="bg-gray-100 w-full">
              <div className='flex justify-center text-2xl'>
                <h3>reset password</h3>
              </div>
              <form className="mx-4 mt-10 bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-4 mb-2 border border-gray-800 w-full"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </form>

              <div className="flex justify-center gap-10 mt-2">
                <button
                  onClick={() => setSlide(SLIDES.LOGIN)}
                  className="text-red-500 underline"
                >
                  back to login
                </button>
                <button
                  onClick={() => setSlide(SLIDES.CREATE)}
                  className="text-green-500 underline"
                >
                  create new account
                </button>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="submit"
                  className="bg-gray-800 border border-indigo-800 w-full py-2 text-white"
                  onClick={Reset}
                  
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
