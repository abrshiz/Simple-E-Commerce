// src/components/CustomerService.jsx
import React from 'react';

const CustomerService = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">Customer Service</h2>
        <p className="text-lg  mb-8">
          We’re here to help with anything you need. Whether it's tracking your order, processing a return, or answering a product question—our team has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold  mb-2">Contact Us</h3>
            <p className=" mb-2">Have questions? Reach out by phone, chat, or email.</p>
            <a href="/contact" className="text-blue-600 hover:underline">Go to Contact</a>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Returns & Refunds</h3>
            <p className=" mb-2">Easy returns within 30 days of purchase.</p>
            <a href="/returns" className="text-blue-600 hover:underline">Return Policy</a>
          </div>
          <div className=" p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Order Tracking</h3>
            <p className=" mb-2">Track your orders anytime from your account.</p>
            <a href="/track-order" className="text-blue-600 hover:underline">Track Order</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
