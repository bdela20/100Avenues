import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FZHeliTours: React.FC = () => {
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
          src="src/assets/Hotels/FZ Heli Tours/Banner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>Royal Balloon Cappadocia</h1>
          <p style={styles.headerSubText}>Cappadocia, Turkey</p>
        </div>
      </div>

      <h2 style={styles.overviewTitle}>Overview</h2>
<section style={styles.overviewSection}>
  <div style={{ flex: '1', paddingRight: '20px' }}>
    <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
One of the best ways to experience Dubai? From above! 
Soar over Dubai's stunning skyline and iconic attractions 
on an unforgettable helicopter tour. Glide past the world's 
tallest building, Burj Khalifa, cruise the Palm Islands and 
the World Islands, and see Dubai's futuristic architecture 
from a bird's eye view. Cruise at low altitudes so you can 
spot every detail of this modern marvel of a city -from the 
glittering hotels and resorts dotting the coastline to the 
lush greenery of Dubai's parks and gardens, FZ Heli Tours 
will ensure you enjoy Dubai in all its splendor!
    </p>
    <a 
      href="https://fzhelitours.com/" 
      style={styles.overviewLink} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Visit website
    </a>
  </div>
  <div style={{ flex: '1' }}>
    <img
      src="src/assets/Hotels/FZ Heli Tours/Overview.webp"
      alt="Punta Islita Room"
      style={{ width: '90%', borderRadius: '10px' }}
    />
  </div>
</section>
  


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation to take to the skies in Dubai? Reach out to us below.</p>
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

export default FZHeliTours;
