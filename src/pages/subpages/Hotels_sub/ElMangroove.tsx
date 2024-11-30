import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ElMangroove: React.FC = () => {
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
      backgroundColor: 'beige',
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
      backgroundColor: 'beige',
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
          src="src/assets/Hotels/El Mangroove/MangrooveBanner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>El Mangroove, Autograph Collection</h1>
          <p style={styles.headerSubText}>Guanacaste, Costa Rica</p>
        </div>
      </div>

      {/* Overview Section */}
      <h2 style={styles.overviewTitle}>Overview</h2>
      <section style={styles.overviewSection}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '1rem' }}> 
          El Mangroove, Autograph Collection in Guanacaste, 
          Costa Rica, offers an exquisite fusion of sophistication, 
          unparalleled service, and tranquility. This boutique hotel, 
          nestled on the beachfront, provides a panoramic view of the 
          Gulf of Papagayo and is deeply influenced by the region's verdant 
          forests, sun-drenched beaches, and dynamic culture. Discover local 
          attractions such as the Santa Rosa National Park or surrender to an 
          afternoon of indulgence at the Bearth Spa. The hotel, unique in the 
          area with two private tour boats, promises adventure. As dusk falls, 
          enjoy a meal at one of our two restaurants, each offering a stunning 
          vista of the Gulf of Papagayo, before retiring to your commodious suite. 
          Each suite is equipped with comfortable beds, spa-inspired bathrooms, 
          and a balcony featuring a hammock for the ultimate relaxation.
          </p>
        </div>
        <div style={{ flex: '1' }}>
          <img
            src="src/assets/Hotels/El Mangroove/overview.webp"
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
  <h2 style={styles.featuresHeading}>121 Suites | 2 Floors | 3 Restaurants</h2>
  <div style={styles.featuresContainer}>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Family-friendly</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Sustainability</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>On-site spa</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Free Wifi</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Snorkeling</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Watercraft Rentals</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>All-Suites</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Restaurants</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Outdoor Pools</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>24-hr Room Service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Beach Access</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Turndown Service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Gift Shop</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Fitness Center</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Bicycle Rental</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Game Room</li>
    </div>
  </div>
</section>

      {/* Highlights Section */}
<section style={styles.highlightsSection}>
  <h2 style={styles.highlightsTitle}>Highlights</h2>
  <div style={styles.highlightsContainer}>
    <div style={styles.highlightsText}>
      {/* Apply italic style to the desired line */}
      {/* <h1 style={{fontSize: '1.5rem',  marginBottom: '0.5rem' }}>
  <em>The Perfect Location in a Blue Zone!</em>
</h1> */}
      <p>
      El Mangroove Hotel offers a variety of water-based activities 
      through the resort's exclusive water concierge, Azul Ocean Adventures. 
      Guests can enjoy beach hopping tours, snorkeling, jet skiing, 
      and standup paddleboarding, with lessons and equipment provided. 
      For a unique experience, the hotel organizes personalized sunset 
      tours along the Pacific coast, perfect for romantic outings or proposals. 
      Azul also arranges half-day or full-day fishing trips, ensuring guests have 
      all the support and equipment needed for an unforgettable sea adventure.
      </p>
    </div>
    <img
      src="src/assets/Hotels/El Mangroove/highlights.webp"
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
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Beach hopping</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Snorkeling</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Jet skiing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Standup paddle boarding</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Zip lining</li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Sunsent Tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Fishing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>National park and forest</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Hiking</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Yoga</li>
    </div>
  </div>
</section>


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation at El Mangroove? Reach out to us below.</p>
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

export default ElMangroove;
