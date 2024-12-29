import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
            <p className="mb-4 text-gray-200">We'd love to hear from you. Please fill out the form or use our contact information to reach us.</p>
            <ul className="space-y-2 text-gray-200">
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: info@avmenterprises.com</li>
              <li>Address: 123 Main St, City, State, ZIP</li>
            </ul>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-black bg-opacity-50 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-black bg-opacity-50 text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-200">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-black bg-opacity-50 text-white placeholder-gray-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#C4A484] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
