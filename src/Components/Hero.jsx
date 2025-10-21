import React from 'react'
import '../heroCss.css';
import { Link } from 'react-router-dom';
import Furniture from './Furniture';
export default function Hero() {
  return (
    <div>
      <div class="relative overflow-hidden ">
  <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div class="sm:max-w-lg">
        <h1 class="text-4xl font-bold tracking-tight  sm:text-6xl">Summer styles are finally here</h1>
        <p class="mt-4 text-xl t">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div class="mt-10">
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl ">
            <div class="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/products" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</Link>
        </div>
      </div>
    </div>
  </div>
  </div>

    <div className='Hero2 w-screen md:grid grid-cols-2'>
    <div className='order-1 md:order-2'>
                 <div class="pt-16 sm:pt-24 md:pt-40 ">
                        <div class="relative mx-auto max-w-7xl  sm:static sm:px-6 lg:px-8">
                            <div class="sm:max-w-lg ml-7">
                                <h1 class="text-4xl font-bold tracking-tight  sm:text-6xl">Fashion for all And More!</h1>
                                <p class="mt-4 text-xl t">Every style thrives—formal, casual, vintage, sporty, luxury, streetwear—offering endless outfits and products for every taste, trend, and occasion imaginable.
                                </p>
                             </div>
                             <div className='mt-10 ml-7'>
                                <button className='w-45 h-13 text-white rounded-lg bg-indigo-600'>
                                   <Link to="/products">view all</Link>
                                </button>
                             </div>
                        </div>
                </div>
        </div>
        <div className="order-2 md:order-1 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row w-full  h-auto md:mt-28 ml-3 mr-1 lg:ml-3">

{/* Image Box 1 */}
<div className="relative w-full lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
  <Link
   to="/men"
    className="block w-full h-full relative bg-[url('./assets/men-fashion.jpg')] bg-cover bg-center"
  >
  
    {/* Dark overlay (mask) */}
    <div className="absolute inset-0 bg-white/10"></div>

    {/* Bottom-centered text */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
      <h2 className="text-lg font-semibold">Men's Fashion</h2>
      <p className="text-sm">Shop the latest styles</p>
    </div>
    </Link>
</div>

{/* Image Box 2 */}
<div className="relative w-full lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
  <Link
    to="/women"
    className="block w-full h-full relative bg-[url('./assets/women-fashion.avif')] bg-cover bg-center"
  >
    <div className="absolute inset-0 bg-white/10"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
      <h2 className="text-lg font-semibold">Women's Outfits</h2>
      <p className="text-sm">Stylish and trendy</p>
    </div>
  </Link>
</div>

{/* Image Box 3 */}
<div className="relative w-full lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
  <Link
    to="electronics"
    className="block w-full h-full relative bg-[url('./assets/elecronics.jpg')] bg-cover bg-center"
  >
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
      <h2 className="text-lg font-semibold">Electronics</h2>
      <p className="text-sm">Smart gadgets & more</p>
    </div>
  </Link>
</div>
</div>
</div>

<div className="Hero3 w-screen  md:grid grid-cols-2 ">
    <div className=" flex items-center justify-center px-4">
    <div className="pt-16 sm:pt-24  lg:pt-32 lg:pb-40 max-w-xl ml-10">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Furniture Products
      </h1>
      <p className="mt-4 text-xl">
        Discover timeless furniture pieces crafted with elegance, comfort, and modern design in mind — perfect for any space.
      </p>
      <div className="mt-10">
        <button className="w-44 h-12 text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
          <Link to="furniture">Shop Now</Link>
        </button>
      </div>
    </div>
  </div>

  {/* 🖼️ Image Grid Section */}
  <div className=" flex flex-wrap flex flex-wrap lg:flex-nowrap flex-col lg:flex-row w-full h-auto md:mt-28 mr-3 ml-1 lg:mr-3">

    {/* 🛋️ Living Room */}
    <div className="relative  lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
      <Link
        to={'furniture'}
        className="block w-full h-full relative bg-[url('./assets/sofa.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
          <h2 className="text-lg font-semibold">Living Room</h2>
          <p className="text-sm">Modern & cozy sofas</p>
        </div>
      </Link>
    </div>

    {/* 🛏️ Bedroom */}
    <div className="relative w-full lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
      <Link
        to={'furniture'}
        className="block w-full h-full relative bg-[url('./assets/bedRoom.webp')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
          <h2 className="text-lg font-semibold">Bedroom</h2>
          <p className="text-sm">Beds, dressers & more</p>
        </div>
      </Link>
    </div>

    {/* 💼 Workspace */}
    <div className="relative w-full lg:w-1/3 h-[33.33vh] lg:h-96 mt-2">
      <Link 
       to={'furniture'} className="block w-full h-full relative bg-[url('./assets/workSpace.jpg')] bg-cover sm:bg-contain sm:bg-no-repeat bg-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center px-4 z-10">
          <h2 className="text-lg font-semibold">Workspace</h2>
          <p className="text-sm">Desks & office chairs</p>
        </div>
      </Link>
    </div>

  </div>
</div>

    </div>
  

  )
}
