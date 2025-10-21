import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id, source } = useParams();

  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      source === "fakestore"
        ? `https://fakestoreapi.com/products/${id}`
        : `https://dummyjson.com/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); 
        setLoading(false);
      });
  }, [id, source]);

  if (loading || !product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-700 text-xl font-semibold">Loading product...</div>
      </div>
    );
  }

  // Normalize values for UI
  const image = source === "fakestore" ? product.image : product.thumbnail;
  const rating = source === "fakestore" ? product.rating?.rate : product.rating;
  const reviews = source === "fakestore" ? product.rating?.count : product.stock ?? 0;
  const discount = product.discountPercentage ?? 10;
  const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src={image}
          alt={product.title}
          className="w-full h-96 object-contain p-4 bg-gray-100"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-500 text-sm mb-4 capitalize">{product.category}</p>

          <div className="flex gap-6 items-center mb-4">
            <p className="text-2xl font-bold text-gray-800">${product.price}</p>
            <p className="text-sm line-through text-gray-500">
              ${discountedPrice}
            </p>
            <p className="text-sm text-green-700">-{Math.round(discount)}%</p>
          </div>

          <div className="text-yellow-600 text-sm mb-4">
            ⭐ {rating} ({reviews} reviews)
          </div>

          <p className="text-gray-700 mb-4">{product.description}</p>
          <ul className="text-sm text-gray-600 mb-4">
            <li><strong>Stock:</strong> {product.stock ?? reviews}</li>
            <li><strong>Seller:</strong> {source === "fakestore" ? "FakeStore Official" : "DummyJSON Vendor"}</li>
            <li><strong>Shipping:</strong> Free shipping within 5 days</li>
            <li><strong>Warranty:</strong> 2-year limited warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
