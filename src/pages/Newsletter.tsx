import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-4 shadow-md">
      {/* Navbar Links */}
      <div className="w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center space-x-4">
          <Link
            to="/all-posts"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black transition-all duration-300 ease-in-out"
            style={styles.navLink}
          >
            All Posts
          </Link>
          <Link
            to="/travel-experiences"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black transition-all duration-300 ease-in-out"
            style={styles.navLink}
          >
            TRAVEL EXPERIENCES
          </Link>
          <Link
            to="/hotels-destinations"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black transition-all duration-300 ease-in-out"
            style={styles.navLink}
          >
            HOTELS & DESTINATIONS
          </Link>
          <Link
            to="/news-trends"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black transition-all duration-300 ease-in-out"
            style={styles.navLink}
          >
            NEWS & TRENDS
          </Link>
          <Link
            to="/Retreats"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black transition-all duration-300 ease-in-out"
            style={styles.navLink}
          >
            RETREATS
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navLink: {
    fontSize: '18px', // Adjusted font size for better appearance
    fontFamily: 'Georgia, serif', // Elegant font
    letterSpacing: '1px', // Slight letter spacing for readability
    fontWeight: '500', // Semi-bold for premium look
    padding: '0.5rem 1rem', // Added padding for spacing
    transition: 'color 0.3s ease', // Smooth color transition on hover
  },
};

export default Navbar;
