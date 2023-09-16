import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import SearchAndSortComponent from './search-sort.component';

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav className="bg-blue-900 p-4 w-full shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold"><Link to={'/home'}>C</Link>  </div>
        <SearchAndSortComponent items={[]}/>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex space-x-4 sm:space-x-6`}
        >
          <li className="text-white hover:text-gray-300">
            <Link to={'/sign-in'}>Sign-In</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link to={'/sign-up'}>Sign-Up</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link to="/home/profile">Profile</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link href="#">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Navigation;









