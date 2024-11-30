import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/HomePage/Blue.webp';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  // Close dropdown when a link is clicked or when the location changes
  useEffect(() => {
    setIsVisible(false);  // Close the dropdown on page navigation
  }, [location]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-4 z-50 fixed w-full top-0 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" onClick={() => setIsVisible(false)}>
          <img src={logo} alt="100 Avenues Logo" className="h-12 w-auto mr-3" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-500"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isVisible ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center space-x-4">
          <Link
            to="/"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/hotels"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Hotels & Experiences
          </Link>
          <Link
            to="/retreats"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Retreats
          </Link>
          {/* <Link
            to="/newsletter"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Travel Newsletter
          </Link> */}
          <Link
            to="/about"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Tavel Packages
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsVisible(false)}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
