import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TheOcean: React.FC = () => {
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
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
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

    highlightsSection: {
      padding: '30px 10%',
      backgroundColor: '#f7f2ef', // Light beige background
    },
    highlightsTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '30px',
      fontWeight: 'bold',
      color: '#333',
    },
    highlightsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
    },
    highlightsText: {
      flex: '1',
      padding: '0 20px',
      textAlign: 'center',
      fontSize: '1rem',
      color: '#555',
    },
    highlightHeader: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      fontStyle: 'italic',
      color: '#333',
    },
    highlightsImage: {
      flex: '1',
      width: '80%',
      borderRadius: '10px',
      margin: '0 20px',
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
          src="src/assets/Hotels/Ocean Club/oceanBanner.webp"
          alt="Punta Islita Overview"
          style={styles.headerImage}
        />
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerTextContainer}>
          <h1 style={styles.headerMainText}>The Ocean Club, a Luxury
          Collection Resort, Costa Norte</h1>
          <p style={styles.headerSubText}>Puerto Plata, Dominican Republic</p>
        </div>
      </div>

      {/* Overview Section */}
      <h2 style={styles.overviewTitle}>Overview</h2>
      <section style={styles.overviewSection}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
          Overview
Enter into an oasis of tranquility located on the beautiful beach of Sosua, 
less than 20 minutes away from the Puerto Plata airport. The Ocean Club, a 
Luxury Resort Collection, offers a wide array of suites and residence-style 
accommodations each with large spaces, full kitchens, and private balconies 
that allow hotel guests to enjoy the most stunning views of the turquoise water 
in front of the resort's private beach. This hotel offers a combination of 
privileged location, unparalleled service, and exquisite Dominican and international 
cuisine that is sure to provide its guests with a truly unforgettable stay.

The destination features a championship golf course, and array of water 
sports and activities, providing the perfect balance of luxury, relaxation and adventure - 
the ideal escape for those seeking an upscale Caribbean getaway.
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
  <h2 style={styles.featuresHeading}>68 Suites & Residences | 5 Floors | 3 Restaurants</h2>
  <div style={styles.featuresContainer}>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Beach Access</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Sustainability</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Restaurant</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Spa</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Fitness Center</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Outdoor Pool</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Hot Tub</li>
    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Daily Housekeeping</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Turndown Service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Meeting Space</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>All-Suites</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Snorkeling</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Watercraft Rental</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Game Room</li>

    </div>
    <div style={styles.featuresColumn}>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Laundry</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Activities for kids</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Kitchen</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Room Service</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Wake up Calls</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Kitchenette</li>
      <li style={{ ...styles.featureItem, listStyleType: 'disc' }}>Service Request</li>

    </div>
  </div>
</section>

// Highlights Section
<section style={styles.highlightsSection}>
  <h2 style={styles.highlightsTitle}>Highlights</h2>
  
  <div style={styles.highlightsContainer}>
    <div style={styles.highlightsText}>
      <h1 style={styles.highlightHeader}><em>The Perfect Location in a Blue Zone!</em></h1>
      <p>
        From its inception, Punta Islita has maintained a deep connection with its local community.
        Situated in one of the five global Blue Zone regions, the community of Punta Islita possesses
        a wealth of knowledge to impart. Engage with and understand the harmonious Blue Zone lifestyle
        through activities such as sustainable cooking lessons and craft workshops, and carry a piece
        of this balanced life philosophy back home with you.
      </p>
    </div>
    <img
      src="src/assets/Hotels/Ocean Club/highlights.webp"
      alt="Punta Islita Highlights"
      style={styles.highlightsImage}
    />
  </div>
  
  <div style={styles.highlightsContainer}>
    <img
      src="src/assets/Hotels/Ocean Club/Cigar.webp"
      alt="Cigar and Glass"
      style={styles.highlightsImage}
    />
    <div style={styles.highlightsText}>
      <h1 style={styles.highlightHeader}><em>The Perfect Location in a Blue Zone!</em></h1>
      <p>
        Enjoy a relaxing evening accompanied by the finest collection of wines and aged rums.
        For cigar fans, The Ocean Club has partnered with Kelner Cigars to create an extraordinary
        blend for the hotel's most discerning guests.
      </p>
    </div>
  </div>

  <div style={styles.highlightsContainer}>
    <div style={styles.highlightsText}>
      <h1 style={styles.highlightHeader}><em>The Perfect Location in a Blue Zone!</em></h1>
      <p>
        Prepare your own fresh catch at the resort's most relaxing venue, The Spot. A living and
        dining room experience on the private beach where you can catch the most stunning sunsets
        and enjoy a glass of your favorite wine or spirit by the fireplace with your loved ones.
      </p>
    </div>
    <img
      src="src/assets/Hotels/Ocean Club/outside .webp"
      alt="Outdoor Venue"
      style={styles.highlightsImage}
    />
  </div>
</section>


      {/* Activities Section */}
<section style={styles.activitiesSection}>
  <h2 style={styles.activitiesTitle}>Destination Activities</h2>
  <div style={styles.activitiesList}>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Snorkeling in Playa Sosua</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Golfing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>City tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Rum and cigar tasting</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Catamaram tours</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Waterfalls of Damajagua</li>
    </div>
    <div style={styles.activitiesColumn}>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Whale watching in Samana</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Surfing and Kitesurfing</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Paradise Island</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Zip Lines</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>Tropical forest track</li>
      <li style={{ ...styles.activitiesItem, listStyleType: 'disc' }}>ATV, buggies, and horseback riding tours</li>
    </div>
  </div>
</section>


      {/* Quote Section */}
<section style={styles.quoteSection}>
  <h2 style={styles.quoteTitle}>Get a Quote Today!</h2>
  <p>Interested in making a reservation at The Ocean Club? Reach out to us below.</p>
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

export default TheOcean;
