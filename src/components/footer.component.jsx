import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-sm">Have questions? Get in touch with us!</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-300 hover:text-blue-100 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-blue-300 hover:text-blue-100 transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-blue-300 hover:text-blue-100 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-blue-300 hover:text-blue-100 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} Your Construction Company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

