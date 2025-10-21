// src/components/FAQ.jsx
import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-7 business days depending on your location.",
    },
    {
      question: "Can I return an item?",
      answer: "Yes, we accept returns within 30 days of purchase. Items must be unused and in original packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States. International shipping is coming soon!",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you will receive an email with a tracking link.",
    },
  ];

  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4  font-medium focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 ">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


