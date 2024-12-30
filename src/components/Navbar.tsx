import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Home/LOGO.png"; // Adjust the path to your logo image

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-gray-100 p-6 z-50 fixed w-full top-0 shadow-md"
        style={{
          fontSize: ".9rem",
          padding: ".5rem 3.8rem",
          fontFamily: "Avenir, sans-serif",
        }}
      >
        <div className="flex items-center">
          <Link to="/Home" onClick={() => setIsVisible(false)}>
            <img src={logo} alt="100 Avenues Logo" className="h-20 w-auto mr-4" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center px-4 py-3 border rounded text-gray-800 border-gray-500"
          >
            <i className="fas fa-bars" style={{ fontSize: "1.5rem" }}></i>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <div className="text-base lg:flex-grow lg:flex lg:items-center space-x-6">
            <Link
              to="/Home"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/Services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
            >
              Services
            </Link>
            <Link
              to="/About"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
            >
              About
            </Link>
            {/* <Link
              to="/FAQ"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
            >
              FAQ
            </Link> */}
            <Link
              to="/Contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black"
            >
              Contact
            </Link>
            <a
              href="tel:4073051912"
              className="mt-4 lg:mt-0 lg:ml-6 bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600"
            >
              (407) 305-1912
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
