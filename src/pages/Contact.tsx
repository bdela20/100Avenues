import React from 'react';
import backgroundImage from '../assets/HomePage/contact.webp'; // Make sure the path is correct.

function Contact() {
  return (
    <div>
      {/* Top section with background image and text */}
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '.5rem',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontFamily: "Playfair Display, serif", fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', marginBottom: '1rem' }}>
          Connect with us
        </h1>
        <p style={{ fontSize: '1.2rem', fontFamily: "Avenir, sans-serif", textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
          Have any questions or comments for us? <br />
          Please feel free to email us below or connect with us on social media!
        </p>
      </div>

      {/* Middle section with email */}
      <div style={{ textAlign: 'center', fontFamily: "Avenir, sans-serif", margin: '1rem 0', fontSize: '1.2rem', color: '#333' }}>
        <p>hello@onehundredavenues.com</p>
      </div>

      {/* Bottom section with form */}
      <div className="contactForm" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'grid', fontFamily: "Avenir, sans-serif", gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd', minHeight: '150px' }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '0.8rem',
              backgroundColor: "#c68a30",
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: "Avenir, sans-serif",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
