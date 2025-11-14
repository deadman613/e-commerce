import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">E-Commerce</span> — your one-stop shop for quality products at unbeatable prices.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to simplify online shopping by offering a seamless experience, high-quality products, and outstanding customer support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Wide range of products</li>
              <li>Secure payment system</li>
              <li>Fast delivery & easy returns</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? Reach out to us at <a href="mailto:xyz@ecommerce.com" className="text-blue-600 dark:text-blue-400 underline">xyz@ecommerce.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
