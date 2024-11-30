import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Monument: React.FC = () => {
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
          src="src/assets/Hotels/Monument/Banner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>Monument Hotel</h1>
          <p style={styles.headerSubText}>Barcelona, Spain</p>
        </div>
      </div>

      {/* Overview Section */}
      <h2 style={styles.overviewTitle}>Overview</h2>
      <section style={styles.overviewSection}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
          Overview
Set against the backdrop of Barcelona's elegant Passeig de Gràcia, 
the Monument Hotel is a luxurious fusion of 19th-century grandeur 
and contemporary sophistication. The hotel's prime location ensures that 
guests are just a stone's throw away from Gaudí's masterpieces, 
Casa Batlló and La Pedrera, as well as a mere 10-minute walk from 
the bustling Plaza Catalunya and the iconic Las Ramblas. Accommodations 
are a testament to thoughtful luxury, with rooms and suites featuring 
natural oak wood furnishings, floor-to-ceiling windows, and wrought 
iron balconies that offer a glimpse into the city's vibrant street life.

The hotel is not just a place to stay but a culinary destination 
in its own right, boasting two Michelin-starred restaurants, including 
the illustrious Lasarte with three stars—all under the guidance of the 
renowned Chef Martin Berasategui, who holds an impressive 12 Michelin stars.
          </p>
        </div>
        <div style={{ flex: '1' }}>
          <img
            src="src/assets/Hotels/Monument/Overview.webp"
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
  <h2 style={styles.featuresHeading}>84 Rooms | 5 Floors| 4 Restaurants</h2>
  <div style={styles.featuresContainer}>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Free Wi-Fi</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Room service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Wellness studio</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Fitness centre</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Outdoor pool</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Sauna / Steam room</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Family friendly</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Pet Friendly</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Balconies</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Rooftop terrace</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Incredible location</li>
      {/* <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Complimentary adventures and cultural activities</li> */}
    </div>
  </div>
</section>

      {/* Highlights Section */}
<section style={styles.highlightsSection}>
  <h2 style={styles.highlightsTitle}>Highlight</h2>
  <div style={styles.highlightsContainer}>
    <div style={styles.highlightsText}>
      {/* Apply italic style to the desired line */}
      <h1 style={{fontSize: '1.5rem',  marginBottom: '0.5rem' }}>
  {/* <em>The Perfect Location in a Blue Zone!</em> */}
</h1>
      <p>
      Restaurante Lasarte in Barcelona, a beacon of gastronomy since 2006, 
      achieved Michelin's highest honor of three stars in 2017. This culinary 
      haven, envisioned by Chef Martín Berasategui, is more than a restaurant—it's a 
      passion project delivered by a top-tier team. Its recent renovation 
      has infused the space with modern elegance and brightness, thanks to the 
      collaborative genius of architects Oscar Tusquets, Carles Bassó, Tote Moreno, 
      and designer Mercè Borrell. With a focus on light and texture, particularly oak,
       Lasarte offers an inviting atmosphere, complete with a semi-private dining area 
       and a Chef's Table overlooking the kitchen, providing an immersive gastronomic spectacle.
      </p>
    </div>
    <img
      src="src/assets/Hotels/Monument/highlight.webp"
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
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Museums</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Shooping</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Markets</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Sightseeing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}></li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Theaters</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Concerts</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Cultural tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Half-day tours</li>
      {/* <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}></li> */}
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Sailing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Hiking</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Day Trips</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Landmarks and parks</li>
      {/* <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Blue Zone culture classes</li> */}
    </div>
  </div>
</section>


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation at the Monument? Reach out to us below.</p>
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

export default Monument;
