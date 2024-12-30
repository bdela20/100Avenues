import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: "#000", // Black background
      padding: "1rem 0", // Smaller padding for reduced height
      textAlign: "center",
      color: "#fff" // White text
    }}>
      <div className="socialIcons" style={{ marginBottom: "0.5rem" }}>
        <a 
          href="https://www.facebook.com/Thetreeremovalspc/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.2rem" }} // White icon color
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a 
          href="https://www.google.com/maps/place/The+Tree+Removal+Specialist/@28.5426545,-81.3957791,10z/data=!3m1!4b1!4m6!3m5!1s0x661f0d5a9deae671:0xddf40fe24c634e97!8m2!3d28.5426544!4d-81.3957792!16s%2Fg%2F11srgwchk_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.2rem" }} // White icon color
        >
          <i className="fab fa-google"></i>
        </a>
      </div>
      <p style={{ 
        color: "#fff", // White text
        fontFamily: "Avenir, sans-serif", 
        fontSize: "1rem" // Slightly smaller font
      }}>
        ©2025 All Rights Reserved. <br />
        {/* <Link to="/Terms" style={{ color: "#007bff", textDecoration: "none" }}>
          Terms & Conditions
        </Link>. */}
      </p>
    </footer>
  );
};

export default Footer;
