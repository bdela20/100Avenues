import React from 'react';
import backgroundImage from '../assets/HomePage/about.webp'; // Make sure the path is correct.

function About() {
  return (
    <div>
      {/* Top section with background image and text */}
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: '3rem',fontFamily: "Playfair Display, serif", fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          ABOUT US
        </h1>
      </div>

      {/* Bottom section with content */}
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          padding: '60px 20px',
          color: '#333',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            lineHeight: '1.6',
            fontSize: '1.1rem',
            fontFamily: "Avenir, sans-serif",
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            At One Hundred Avenues, we connect discerning influencers, entrepreneurs, and travel industry
            advisors to exceptional destinations, hotels, and unique culinary and travel experiences. We excel in crafting
            bespoke retreats for content creators and their clientele, ensuring that each journey is unforgettable and
            meticulously tailored to their vision and desires.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Our founder, Waleska Curvelo, brings over fifteen years of hotelier experience from her tenure with
            globally celebrated luxury hotel brands, including The Ritz-Carlton, The St. Regis, Luxury Collection Resorts
            among others. Her dedication is our promise to our partners and clientele, granting them privileged access to
            extraordinary travel experiences.
          </p>
          <p>
            This commitment is echoed in our monthly digital publication that embodies our passion for travel,
            reaching an audience of over 120,000 travel aficionados, travel advisors, and corporate event organizers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
