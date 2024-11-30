import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AbidOru: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  
  const galleryImages = [
    'src/assets/Hotels/Gallery/First.jpg',
    'src/assets/Hotels/Gallery/second.jpg',
    'src/assets/Hotels/Gallery/3rd.jpg',
    'src/assets/Hotels/Gallery/sunset.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  const handleThumbnailClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

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

    // {/* Gallery Section with Slider */}
    gallerySection: {
      textAlign: 'center',
      padding: '40px 0',
      backgroundColor: '#f8f8f8',
    },
    galleryTitle: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    thumbnailsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    thumbnail: {
      width: '100px',
      height: '70px',
      objectFit: 'cover',
      margin: '0 5px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'transform 0.2s',
    },
    leftArrow: {
      position: 'absolute',
      top: '50%',
      left: '10px',
      zIndex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      cursor: 'pointer',
    },
    rightArrow: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      zIndex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      cursor: 'pointer',
    },

    // {/* Features Section */}
    featuresSection: {
      padding: '40px',
      backgroundColor: '#ffffff',
    },
    featuresHeading: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
    },
    featuresContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    featuresColumn: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      margin: '10px 0',
      fontSize: '.9rem',
    },

    //  {/* Highlights Section */}
    highlightsSection: {
      padding: '30px',
      backgroundColor: 'beige',
    },
    highlightsTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
      // fontWeight: 'bold'
    },
    highlightsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    highlightsText: {
      flex: '1',
      paddingRight: '10px',
    },
    highlightsImage: {
      flex: '1',
      width: '90%',
      borderRadius: '10px',
    },


    // {/* Activities Section */}
    activitiesTitle: {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '2rem',
    },
    activitiesList: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    activitiesColumn: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    activitiesItem: {
      margin: '10px 0',
      fontSize: '1rem',
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
          src="src/assets/Hotels/Abi d'Oru/Banner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>Abi d'Oru Hotel & Spa</h1>
          <p style={styles.headerSubText}>Sardinia, Italy</p>
        </div>
      </div>

      {/* Overview Section */}
      <h2 style={styles.overviewTitle}>Overview</h2>
      <section style={styles.overviewSection}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
          Overview
Immerse yourself in the epitome of Sardinian luxury at the Abi d'Oru Hotel, 
a five-star sanctuary poised on the edge of the Costa Smeralda's azure waters. 
This coastal haven blends local charm with modern elegance, offering guests sumptuous 
rooms with stunning sea views. Indulge in exquisite dining experiences, unwind in the 
tranquil spa, or bask in the sun at the private beach and pool. 

​

Active guests will appreciate the hotel's proximity to world-class golf courses, water 
sports facilities, and the opportunity to explore the rugged beauty of Sardinia's landscape. 
Whether it's a romantic getaway, a family holiday, or a solo retreat, the Abi d'Oru Hotel 
promises an unforgettable experience where luxury meets the natural beauty of the Mediterranean.
          </p>
        </div>
        <div style={{ flex: '1' }}>
          <img
            src="src/assets/Hotels/Room8_JPG.webp"
            alt="Punta Islita Room"
            style={{ width: '90%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Gallery Section with Slider */}
      <section style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Gallery</h2>
        <div style={{ position: 'relative' }}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {galleryImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <button onClick={goToPrev} style={styles.leftArrow}>←</button>
          <button onClick={goToNext} style={styles.rightArrow}>→</button>

          {/* Thumbnails placed below the slider */}
          <div style={styles.thumbnailsContainer}>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={styles.thumbnail}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
<section style={styles.featuresSection}>
  <h2 style={styles.featuresHeading}>130 Rooms | 3 Floors| 3 Restaurants</h2>
  <div style={styles.featuresContainer}>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Family-friendly</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>On-site spa</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Free Wifi</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Snorkeling</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Pet friend</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Beach</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Fishing</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Game room</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Outdoor pools</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Tennis</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Health club</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Golf course</li>
    </div>
  </div>
</section>

      {/* Highlights Section */}
<section style={styles.highlightsSection}>
  <h2 style={styles.highlightsTitle}>Highlights</h2>
  <div style={styles.highlightsContainer}>
    <div style={styles.highlightsText}>
      {/* Apply italic style to the desired line */}
      <h1 style={{fontSize: '1.5rem',  marginBottom: '0.5rem' }}>
  <em>Dolphin Encounter!</em>
</h1>
      <p>
      Experience the joy of watching dolphins as they frolic, 
      feed, and swim freely in the waters around Golfo Aranci. 
      The Dolphin Watching excursions are conducted with the utmost 
      care for these friendly marine inhabitants and their habitat. 
      The area also boasts several stunning spots perfect for swimming 
      or snorkeling, accessible to both adults and children. Convenient 
      shuttle service is available from the hotel, ensuring a seamless 
      adventure for all guests.
      </p>
    </div>
    <img
      src="src/assets/Hotels/Abi d'Oru/highlight.webp"
      alt="Punta Islita Highlights"
      style={styles.highlightsImage}
    />
  </div>
</section>


      {/* Activities Section */}
<section style={styles.activitiesSection}>
  <h2 style={styles.activitiesTitle}>Destination Activities</h2>
  <div style={styles.activitiesList}>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Water skiing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Bicycling</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Horseback riding</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Jet skiing</li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Shooping</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Golfing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Canoeing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Yatching</li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Daiving</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Windsurfing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Stand-up paddling</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Sailing</li>
    </div>
  </div>
</section>


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation at Abi d'Oru? Reach out to us below.</p>
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

export default AbidOru;
