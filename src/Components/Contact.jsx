import React, { useState } from 'react'
import emailIcon from "../assets/email.svg";
import phone from "../assets/phone-book.svg";
export default function Contact() {

    const [email,setEmail]=useState();
    const [name,setName]=useState()
    const [comment,setComment]=useState();
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
        else{
            setEmail('')
            setName('')
            setComment('')
            alert('your comment is submmited successfully.')
        }
      }
    
  return (

        <div className='w-full max-w-md mx-auto my-20 overflow-hidden bg-gray-200 '>
          <div>
            <h1 className='text-white w-full text-center text-2xl mb-2 bg-gray-800'>Contact us</h1>
         
          </div>
            <div className='w-full max-w-md mx-auto overflow-hidden px-2'>
        <div className='text-black'>
           <form action="">
            <input
                  type="text"
                  placeholder="Full name"
                  className="px-3 py-4 mb-2 border bg-white border-gray-800 w-full  "
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-4 mb-2 bg-white border border-gray-800 w-full "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className='border '>
                <textarea cols="40" rows="6" placeholder='write your comment hear....' className='p-2 bg-white' 
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}> 
                </textarea>
                </div>
            </form>
            </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 text-black mt-2 text-sm'>
                <div className='flex items-center gap-2'>
                  <img src={emailIcon} alt="email" className='w-auto h-5' />
                  <p>ecommerce@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={phone} alt="phone" className='w-auto h-5' />
                  <p>+251-986-31-25-07</p>
                </div>
              </div>
            <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-gray-800 border border-gray-800 w-full py-2 text-white"
                  onClick={validator}
                >
                  Submit
                </button>
              </div>
        </div>
  )
}
