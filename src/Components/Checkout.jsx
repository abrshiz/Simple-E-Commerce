import React, { useEffect, useState } from 'react';

export default function Checkout({ cart, setCart, setCounter, decreasing, idle }) {
  const [quantities, setQuantities] = useState({});
  

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(p => {
      initialQuantities[p.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const increment = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
    setCounter();
  };

  const decrement = (id) => {
    if ((quantities[id] || 1) <= 1) {
      // Remove product
      setCart(prev => prev.filter(p => p.id !== id));
      const {[id]: _, ...rest} = quantities;
      setQuantities(rest);

      if (cart.length <= 1) idle();
    } else {
      setQuantities(prev => ({
        ...prev,
        [id]: prev[id] - 1
      }));
      decreasing();
    }
  };

  if (!cart.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-700 text-xl font-semibold">Your cart is empty</div>
      </div>
    );
  }

 function buyMessage(){
    alert('buy product will work soon.')
  }
  return (
    <div className="p-6">
      {cart.map((product, index) => (
        <div key={index} className="max-w-4xl mx-auto mb-6 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
          <span className='flex justify-end mr-2'>
            <button className='px-2 bg-red-800 text-white' onClick={() => decrement(product.id)}>
              X
            </button>
          </span>

          <img src={product.image} alt={product.title} className="w-full h-96 object-contain p-4 bg-gray-100" />

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{product.category}</p>

            <div className="flex gap-6 items-center mb-4">
              <p className="text-2xl font-bold text-gray-800">${product.price}</p>
              <p className="text-sm line-through text-gray-500">${(product.price * 1.1).toFixed(2)}</p>
              <p className="text-sm text-green-700">-10%</p>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => increment(product.id)} className="bg-gray-800 text-white px-3 py-1">+</button>
              <input value={quantities[product.id] || 1} disabled className="w-12 text-center" />
              <button onClick={() => decrement(product.id)} className="bg-gray-800 text-white px-3 py-1">-</button>
              <span>Total: ${(quantities[product.id] * product.price).toFixed(2)}</span>
              <button className='text-lg shadow-xl border border-gray-700 px-4 rounded-lg text-white mt-5 ml-96 bg-gray-800 w-auto h-10 boreder-8' onClick={()=>buyMessage()}> Buy </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
