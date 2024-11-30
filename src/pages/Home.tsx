import React, { FC } from "react";
import video from "../assets/HomePage/homepage.mp4";
import { Link } from "react-router-dom";

const Home: FC = () => {
  
  return (
    <>
     {/* Banner Section */}
<section
  className="home"
  style={{
    marginBottom: "300px", // Ensure it's 100px not just "100"
    marginTop:"-150px",
    position: "relative",
    overflow: "hidden"
  }}
>
  <div className="overlay">
    <video src={video} muted autoPlay loop
      typeof="video/mp4"
      style={{ position: "absolute",
        top: 180,
        left: 0,
        width: "120%",
        height: "70%",
        objectFit: "cover",
        zIndex: -100,
      }}
    />
    <div
      className="homeContent container"
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally centers the content
        alignItems: "center", // Vertically centers the content
        flexDirection: "column",
        textAlign: "center",
        height: "100vh", // Full viewport height
        color: "#fff",
        position: "relative",
      }}
    >
      <div className="textDiv">
        <h1
          className="homeTitle"
          style={{
            fontSize: "3.4rem",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "45rem",
            marginBottom: ".5rem",
            letterSpacing: "0.1em",
            color: "rgb(227, 229, 213)",
            fontFamily: "Playfair Display, serif",
          }}
        >
          ONE HUNDRED AVENUES
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            textAlign: "center",
            letterSpacing: "0.05em",
            marginLeft: "45rem",
            fontStyle: "italic",
            color: "rgb(227, 229, 213)",
            fontFamily: "Avenir, sans-serif",
            
          }}
        >
          ARCHITECTS OF UNFORGETTABLE TRAVEL EXPERIENCES
        </p>
      </div>
    </div>
  </div>
</section>



      <main>
        {/* About Us Section */}
        <section className="aboutUs" style={{ backgroundColor: "#f7f4f0", padding: "3rem 0", marginTop: "-42rem" }}>
          <div className="aboutContainer" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem",fontFamily: "Playfair Display, serif", fontWeight: "bold", marginBottom: "1rem" }}>About Us</h2>
            <p style={{ fontSize: "1.2rem", fontFamily: "Avenir, sans-serif", lineHeight: "1.4", color: "#666", marginBottom: "2rem", fontStyle: 'italic' }}>
              At One Hundred Avenues, we connect discerning influencers,
              entrepreneurs, and travel industry advisors to exceptional
              destinations, hotels, and unique culinary and travel experiences.
              We excel in crafting bespoke retreats for content creators and
              their clientele, ensuring that each journey is unforgettable and
              meticulously tailored to their vision and desires!
            </p>
            <Link to="/About">
              <button className="findOutMore" style={{
                backgroundColor: "#c68a30",
                color: "#fff",
                border: "none",
                padding: "0.8rem 2rem",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "30px",
                fontFamily: "Avenir, sans-serif",
              }}>
                Find Out More
              </button>
            </Link>
          </div>
        </section>

        {/* What's New Section */}
<section className="whatsNew" style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
  <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
    <h2 className="sectionTitle" style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "#333", fontFamily: "Playfair Display, serif", }}>What's New?</h2>
    <div className="newItems" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>

      {/* First Item */}
      <div className="item" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
        <img src="src/assets/HomePage/greece.jpg" alt="Travel to Greece" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "1rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem",fontFamily: "Avenir, sans-serif", color: "#333" }}>Travel to Greece</h3>
          <p style={{ fontSize: "1rem", fontFamily: "Avenir, sans-serif", color: "#666" }}>Explore the beauty of Greece with our exclusive tours.</p>
        </div>
      </div>

      {/* Second Item */}
      <div className="item" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
        <img src="src/assets/HomePage/maldives.jpg" alt="Resort in Maldives" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "1rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", fontFamily: "Avenir, sans-serif", color: "#333" }}>Resort in Maldives</h3>
          <p style={{ fontSize: "1rem", fontFamily: "Avenir, sans-serif", color: "#666" }}>Experience the luxury in Maldives with special offers.</p>
        </div>
      </div>

      {/* Third Item */}
      <div className="item" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
        <img src="src/assets/HomePage/italian_coast.jpg" alt="Italian Coastal Retreat" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "1rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontFamily: "Avenir, sans-serif", fontWeight: "bold", marginBottom: "0.5rem", color: "#333" }}>Italian Coastal Retreat</h3>
          <p style={{ fontSize: "1rem", fontFamily: "Avenir, sans-serif", color: "#666" }}>Discover the Italian coasts and their vibrant culture.</p>
        </div>
      </div>

      {/* Fourth Item */}
      <div className="item" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
        <img src="src/assets/HomePage/safari.jpg" alt="Luxury African Safari" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "1rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontFamily: "Avenir, sans-serif", fontWeight: "bold", marginBottom: "0.5rem", color: "#333" }}>Luxury African Safari</h3>
          <p style={{ fontSize: "1rem", fontFamily: "Avenir, sans-serif", color: "#666" }}>An unforgettable safari experience with world-class guides.</p>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Exclusive Access Section */}
<section className="exclusiveAccess" style={{ textAlign: "center", padding: "4rem 0", backgroundColor: "#f9f9f9" }}>
  <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
    <h2 className="sectionTitle" style={{ fontSize: "2rem", fontStyle: "italic", fontFamily: "Playfair Display, serif", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}>
      Get Exclusive Access!
    </h2>
    <p style={{ fontSize: "1.2rem", fontFamily: "Avenir, sans-serif", color: "#555", margin: "5px 0" }}>
      Our Insiders' Circle gets access to our latest promotions, updates, and ongoing
      booking incentives.
    </p>
    <p className="spamText" style={{ fontStyle: "italic", fontFamily: "Avenir, sans-serif", color: "red", marginBottom: "2rem" }}>
      Don't worry, we hate spam too!
    </p>
    <form className="accessForm" style={{ display: "flex", fontFamily: "Avenir, sans-serif", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
      <input type="text" name="firstName" placeholder="First Name" required 
        style={{ padding: "10px", fontSize: "1rem", fontFamily: "Avenir, sans-serif", border: "1px solid #ccc", borderRadius: "5px", width: "calc(33% - 10px)", maxWidth: "220px" }} />
      <input type="text" name="lastName" placeholder="Last Name" required 
        style={{ padding: "10px", fontSize: "1rem", fontFamily: "Avenir, sans-serif", border: "1px solid #ccc", borderRadius: "5px", width: "calc(33% - 10px)", maxWidth: "220px" }} />
      <input type="text" name="company" placeholder="Company" required 
        style={{ padding: "10px", fontSize: "1rem", fontFamily: "Avenir, sans-serif", border: "1px solid #ccc", borderRadius: "5px", width: "calc(33% - 10px)", maxWidth: "220px" }} />
      <input type="email" name="email" placeholder="Enter your email" required 
        style={{ padding: "10px", fontSize: "1rem", fontFamily: "Avenir, sans-serif", border: "1px solid #ccc", borderRadius: "5px", width: "100%", maxWidth: "500px" }} />
      <button type="submit" style={{ backgroundColor: "#ff5a37", color: "#fff", padding: "10px 20px", fontSize: "1rem", border: "none", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s ease" }}>
        Yes Please!
      </button>
    </form>
  </div>
</section>


        {/* Paying Homage Section */}
<section
  style={{
    backgroundImage: "url(src/assets/HomePage/Portfolio.webp)",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }}
  ></div>

  <div
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      color: "#fff",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <h1 style={{ fontSize: "3rem", fontFamily: "Playfair Display, serif", fontStyle: 'italic', fontWeight: "bold", marginBottom: "1rem" }}>
      Paying Homage to The Art of Extraordinary Travel
    </h1>
    <p style={{ fontSize: "1.5rem", fontFamily: "Avenir, sans-serif", marginBottom: "2rem" }}>One Hundred Avenues</p>
    <a
      href="src/assets/100 Avenues Portfolio.pdf"
      download="100 Avenues Portfolio.pdf"
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          backgroundColor: "#c68a30",
          border: "none",
          padding: "1rem 2rem",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Download our Portfolio
      </button>
    </a>
  </div>
</section>


        {/* Stay Connected Section */}
<section className="stayConnected" style={{ padding: "4rem 0", backgroundColor: "#f5f5f5", textAlign: "center" }}>
  <h2 style={{ fontSize: "2rem",fontStyle:'italic', fontFamily: "Playfair Display, serif", fontWeight: "bold", marginBottom: "2rem", color: "#333" }}>Stay Connected with Us</h2>
  
  <div className="imageGrid" style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
    <div className="imageItem" style={{ flex: "1", margin: "0 1rem" }}>
      <img src="src/assets/HomePage/maldives.jpg" alt="Stay connected 1" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
    </div>
    <div className="imageItem" style={{ flex: "1", margin: "0 1rem" }}>
      <img src="src/assets/HomePage/paradise.jpg" alt="Stay connected 2" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
    </div>
    <div className="imageItem" style={{ flex: "1", margin: "0 1rem" }}>
      <img src="src/assets/HomePage/stay3.webp" alt="Stay connected 2" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
    </div>
    <div className="imageItem" style={{ flex: "1", margin: "0 1rem" }}>
      <img src="src/assets/HomePage/stay4.webp" alt="Stay connected 2" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
    </div>
  </div>
  
  <h2 style={{ fontSize: "1.8rem",fontStyle:'italic', fontWeight: "bold", fontFamily: "Playfair Display, serif", marginBottom: "2rem", color: "#333" }}>Get In Touch!</h2>
  <div className="contactForm" style={{ maxWidth: "600px", fontFamily: "Avenir, sans-serif", margin: "0 auto" }}>
    <form style={{ display: "grid", gap: "1rem" }}>
      <input type="text" name="name" placeholder="Name" required style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ddd" }} />
      <input type="email" name="email" placeholder="Email" required style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ddd" }} />
      <input type="text" name="subject" placeholder="Subject" style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ddd" }} />
      <textarea name="message" placeholder="Type your message here..." required style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ddd", minHeight: "150px" }}></textarea>
      <button type="submit" style={{ padding: "0.8rem", fontFamily: "Avenir, sans-serif", backgroundColor: "#c68a30", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>Submit</button>
    </form>
  </div>
</section>

      </main>
    </>
  );
};

export default Home;
