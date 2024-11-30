import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f8f8", padding: "2rem 0", textAlign: "center" }}>
      <div className="socialIcons" style={{ marginBottom: "1rem" }}>
        <a href="https://www.instagram.com/100avenuestravel/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#333", fontSize: "1.5rem" }}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@100avenuestravel" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#333", fontSize: "1.5rem" }}>
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://www.linkedin.com/company/one-hundred-avenues" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#333", fontSize: "1.5rem" }}>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p style={{ color: "#666", fontFamily: "Avenir, sans-serif", fontSize: "0.9rem" }}>
        ©2024 by One Hundred Avenues. All Rights Reserved. <br />
        <Link to="/Terms" style={{ color: "#007bff", textDecoration: "none" }}>
          Terms & Conditions
        </Link>.
      </p>
    </footer>
  );
};

export default Footer;

  