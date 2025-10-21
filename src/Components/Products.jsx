import React, { useEffect, useState } from 'react';
import lightCart from "../assets/light-cart.svg";
import { Link } from "react-router-dom";

export default function Product({ setProductId, setProductSource, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProducts() {
      setLoading(true);

      try {
        const [dummyRes, fakeRes] = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://fakestoreapi.com/products')
        ]);

        const dummyData = await dummyRes.json();
        const fakeData = await fakeRes.json();

        const dummyProducts = dummyData.products.map(p => ({
          id: p.id,
          title: p.title,
          description: p.description,
          category: p.category,
          price: p.price,
          discountPercentage: p.discountPercentage,
          rating: p.rating,
          stock: p.stock,
          image: p.thumbnail,
          source: 'dummyjson',
        }));

        const fakeProducts = fakeData.map(p => ({
          id: p.id,
          title: p.title,
          description: p.description,
          category: p.category,
          price: p.price,
          discountPercentage: 10, // FakeStore doesn't include this
          rating: p.rating.rate,
          stock: p.rating.count,
          image: p.image,
          source: 'fakestore',
        }));

        setProducts([...dummyProducts, ...fakeProducts]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllProducts();
  }, []);


  function passer(id, source) {
    let url =
      source === 'dummyjson'
        ? `https://dummyjson.com/products/${id}`
        : `https://fakestoreapi.com/products/${id}`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const product =
          source === 'dummyjson'
            ? {
                ...data,
                image: data.thumbnail,
                source,
              }
            : {
                ...data,
                discountPercentage: 10,
                rating: data.rating.rate,
                stock: data.rating.count,
                source,
              };
  
        addToCart(product); // ✅ This actually adds it
      });
    
    setProductId(id);
    setProductSource(source);
  }
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-700 text-xl font-semibold">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Product List</h1>

      <div className="grid grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => {
          const finalPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

          return (
            <div
              key={`${product.source}-${product.id}`}
              className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain p-4 bg-gray-100"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <div className="flex gap-6 items-center mb-2">
                  <p className="font-bold text-xl text-gray-800">${product.price}</p>
                  <p className="text-sm line-through text-gray-500">${finalPrice}</p>
                  <p className="text-sm text-green-800">{Math.round(product.discountPercentage)}% off</p>
                </div>
                <div className="mt-2 flex items-center text-sm text-yellow-600">
                  ⭐ {product.rating} ({product.stock} in stock)
                </div>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">{product.description}</p>
              </div>
              <div className="flex justify-center mb-2 gap-6">
                <button className="bg-gray-800 rounded-lg h-14 mt-4 shadow-md hover:scale-105 duration-300">
                  <Link to={`/detail/${product.source}/${product.id}`}>
                    <p className="text-lg text-white font-semibold mb-2 px-3 capitalize">details</p>
                  </Link>
                </button>
                <button
                  className="rounded-lg h-14 mt-4 shadow-md hover:scale-105 duration-300"
                  onClick={() => passer(product.id, product.source)}
                >
                  <img src={lightCart} alt="cart logo" className="w-auto h-10 p-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
