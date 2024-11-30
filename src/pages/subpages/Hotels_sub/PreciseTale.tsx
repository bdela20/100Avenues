import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreciseTale: React.FC = () => {
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
          src="src/assets/Hotels/Precise Tale/banner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>Precise Tale Poggio Alla Sala</h1>
          <p style={styles.headerSubText}>Montepulciano, Italy</p>
        </div>
      </div>

      {/* Overview Section */}
      <h2 style={styles.overviewTitle}>Overview</h2>
      <section style={styles.overviewSection}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
Nestled in the heart of Tuscany's rolling hills, Precise Tale 
Poggio Alla Sala is a luxurious sanctuary that promises an escape 
to the rustic charm and serene beauty of the Italian countryside. 
This exquisite hotel, set against the backdrop of the historic town 
of Montepulciano, offers a harmonious blend of traditional Tuscan 
architecture and modern comfort. The indoor and outdoor pools provide 
a tranquil setting for guests to unwind and rejuvenate. Whether you're 
seeking a romantic getaway, a family vacation, or a solitary retreat, 
this hotel offers a timeless experience that will linger in your memories 
long after your stay.


          </p>
        </div>
        <div style={{ flex: '1' }}>
          <img
            src="src/assets/Hotels/Precise Tale/overview.webp"
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
  <h2 style={styles.featuresHeading}>71 Rooms | 4 Floors | 2 Restaurants</h2>
  <div style={styles.featuresContainer}>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Bicycling</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Pool(Indoor Pool, Outdoor Pool)</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>On-site spa</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Pool Bar</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Restaurant</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Nearby golf</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Free onsite parking</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Room service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Nearby horseback riding</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Jogging Trails</li>
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
  {/* <em>The Perfect Location in a Blue Zone!</em> */}
</h1>
      <p>
      Wellness at Precise Tale Poggio Alla Sala is an artful blend 
      of ancient traditions and modern practices, designed to offer 
      a holistic experience that caters to every aspect of well-being. 
      Drawing inspiration from the East, the spa offers a range of 
      Asian-European treatments that are tailored to individual needs; 
      rituals that are known for their healing and balancing properties. 
      The spa's thermal experiences are a highlight, featuring a Turkish 
      hammam and a Finnish sauna.
      </p>
    </div>
    <img
      src="src/assets/Hotels/Aerial4_JPG.webp"
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
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Pasta Making classes</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Winery Tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Wine tastings</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Museums</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Walking tours</li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Bike/Vespa tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Art Gelleries </li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Cultural & food tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Day-trips</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Hot air balloon</li>
    </div>
  </div>
</section>


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation at Poggio Alla Sala? Reach out to us below.</p>
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

export default PreciseTale;
