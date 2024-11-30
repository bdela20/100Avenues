import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RitzyCharters: React.FC = () => {
  // const sliderRef = useRef<Slider | null>(null);
  


  {/* Banner Section */}
  const styles: { [key: string]: React.CSSProperties } = {
    headerSection: {
      position: 'relative',
      height: '600px',
      overflow: 'hidden',
    },
    headerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    headerTextContainer: {
      position: 'absolute', // Updated to absolute
      bottom: '20px',       // Set bottom positioning
      left: '20px',         // Keep left positioning
      color: 'white',
      textAlign: 'left',    // Changed text alignment to left
      padding: '20px',
      fontStyle: 'italic'
    },
    headerMainText: {
      fontSize: '2.5rem',
      margin: 0,
    },
    headerSubText: {
      fontSize: '1.2rem',
    },
  // {/* Overview Section */}
overviewTitle: {
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '2rem',
},
overviewSection: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#ffffff',
},
overviewLink: {
  display: 'block',
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '1rem',
  color: 'blue', // Customize the color as needed
  textDecoration: 'underline',
},


    //  {/* Quote Section */}
    quoteSection: {
      padding: '40px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
    },
    quoteTitle: {
      fontSize: '2rem',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    quoteForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
    },
    formInput: {
      width: '400px',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    formTextArea: {
      width: '400px',
      height: '100px',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#000000',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      width: '400px',
    },    
  };

  return (
    <div>
      {/* Banner Section */}
      <div style={styles.headerSection}>
        <img
          src="src/assets/Hotels/Ritzy Charters/Banner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>Ritzy Charters</h1>
          <p style={styles.headerSubText}>Caribbean & Mediterranean</p>
        </div>
      </div>

      <h2 style={styles.overviewTitle}>Overview</h2>
<section style={styles.overviewSection}>
  <div style={{ flex: '1', paddingRight: '20px' }}>
    <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
    Privacy has become the ultimate luxury as affluent 
    travelers seek exclusive experiences away from the masses. 
    This trend has fueled an increase in private yachting and 
    sailing. Whether your clients are looking for a romantic 
    sail through the Caribbean or an exotic weekend aboard a 
    private yacht in the Greek Isles, we know someone who can 
    make it happen! Ritzy Charters has an extensive network of 
    yacht owners and captains who can provide a customized 
    sailing experience like no other, fulfilling every request
     while delivering the incomparable thrill of the open sea.
    </p>
    <a 
      href="https://www.ritzycharters.com/" 
      style={styles.overviewLink} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Visit website
    </a>
  </div>
  <div style={{ flex: '1' }}>
    <img
      src="src/assets/Hotels/Ritzy Charters/overview.webp"
      alt="Punta Islita Room"
      style={{ width: '90%', borderRadius: '10px' }}
    />
  </div>
</section>
  


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation to explore the waters ahead? Reach out to us below.</p>
  <form style={styles.quoteForm}>
    <input
      type="text"
      placeholder="First Name"
      style={styles.formInput}
    />
    <input
      type="text"
      placeholder="Last Name"
      style={styles.formInput}
    />
    <input
      type="email"
      placeholder="Email *"
      style={styles.formInput}
    />
    <input
      type="text"
      placeholder="Subject *"
      style={styles.formInput}
    />
    <textarea
      placeholder="Leave us a message..."
      style={styles.formTextArea}
    />
    <button type="submit" style={styles.submitButton}>Submit</button>
  </form>
</section>
    </div>
  );
};

export default RitzyCharters;

