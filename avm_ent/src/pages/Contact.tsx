import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Get in Touch</h2>
            <p className="mb-4 text-gray-600">We'd love to hear from you. Please fill out the form or use our contact information to reach us.</p>
            <ul className="space-y-2 text-gray-600">
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: info@avmenterprises.com</li>
              <li>Address: 123 Main St, City, State, ZIP</li>
            </ul>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

