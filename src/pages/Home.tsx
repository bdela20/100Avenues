import React, { FC } from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../assets/Home/Banner.mp4"; // Import the video file

const Home: FC = () => {

  return (
    <>
      {/* Banner Section */}
      <section
        className="home"
        style={{
          marginBottom: "-200px", 
          marginTop: "-150px",
          position: "relative",
          overflow: "hidden",
          width: "100vw", // Ensure full width
          height: "110vh", // Increase height for a bigger banner
        }}
      >
        <div className="overlay">
          <video
            src={bannerVideo} // Use the imported video file
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -100,
            }}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay to make the video darker */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
              zIndex: -50, // Ensure it stays above the video but below the content
            }}
          ></div>

          <div
            className="homeContent"
            style={{
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center",    // Center vertically
              flexDirection: "column",
              textAlign: "center",
              height: "100%", // Match parent section height
              width: "100%",   // Full width
              margin: "0 auto", // Center container itself
              position: "absolute", // Ensure it stays on top of the banner
              top: 0,
              left: 0,
            }}
          >
            <div className="textDiv">
              <h1
                className="homeTitle"
                style={{
                  fontSize: "clamp(5rem, 1vw, 2rem)", // Slightly larger font
                  textAlign: "center",
                  // fontWeight: "bold",
                  marginBottom: ".5rem",
                  letterSpacing: "0em",
                  color: "white",
                  fontFamily: "Avenir",
                }}
              >
                The Tree Removal Specialist
              </h1>
              <p
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)", // Adjusted for better scaling
                  textAlign: "center",
                  letterSpacing: "0em",
                  // fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  fontFamily: "Avenir",
                }}
              >
                OPEN 7 DAYS A WEEEK. GET A FREE QUOTE TODAY!
              </p>
            </div>
          </div>
        </div>
      </section>



<main>


 {/* Services */}
<section
  style={{
    padding: "5rem 0",
    backgroundColor: "#f9fafb",
    fontFamily: "Avenir",
  }}
>
  {/* Section Title */}
  <div
    style={{
      width: "100%",
      textAlign: "center",
      marginBottom: "3rem",
    }}
  >
    {/* <hr
      style={{
        width: "80%",
        border: "100px solid #1a202c",
        margin: "0 auto 1rem",
      }}
    /> */}
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: '#28a745',
      }}
    >
      Services We Provide
    </h2>
    <p
      style={{
        fontSize: "1rem",
        color: "#4a5568",
        fontStyle: "italic",
        fontFamily: "Avenir",
      }}
    ></p>
  </div>

  {/* Retreats Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "3rem",
      maxWidth: "1500px",
      margin: "0 auto",
      padding: "0 1.5rem",
    }}
  >
    {[
      {
        title: "Tree Removal",
        date: "",
        description:
          "Our team specializes in the safe and efficient removal of hazardous, damaged, or unwanted trees, using professional techniques and state-of-the-art equipment to protect your property and enhance the beauty of your landscape. Whether you're dealing with storm damage, overgrown trees, or simply need to clear space, we’re here to provide reliable, expert service you can trust.",
        image: "src/assets/Home/TreeRemoval.jpg", 
      },
      {
        title: "Tree Trimming",
        date: "",
        description:
          "Our team specializes in precise and professional tree trimming services, enhancing the health, safety, and appearance of your trees while protecting your property. Whether it’s shaping overgrown branches, improving sunlight exposure, or preventing potential hazards, we use expert techniques to ensure your trees thrive and your landscape looks its best.",
        image: "src/assets/Home/TreeTrimming.webp",
      },
      {
        title: "Stump Removal",
        date: " ",
        description:
          "Our team specializes in fast and efficient stump removal, eliminating unsightly stumps to restore the beauty and safety of your landscape. Using professional equipment, we remove stumps of all sizes, preventing hazards, pests, and regrowth, leaving your property clean and ready for your next project.",
        image: "src/assets/Home/StumRemoval.jpeg",
      },
    ].map((retreat, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={retreat.image}
          alt={retreat.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#1a202c",
              marginBottom: "0.5rem",
            }}
          >
            {retreat.title}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#718096",
              marginBottom: "1rem",
            }}
          >
            {retreat.date}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#4a5568",
              fontFamily: "Avenir",
            }}
          >
            {retreat.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Call-to-Action Button */}
  <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
    <Link to="/Services" style={{ textDecoration: "none" }}>
      <button
        style={{
          padding: "0.75rem 2rem",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "50px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontFamily: "Avenir Light",
          cursor: "pointer",
          border: "none",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#218838") 
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#28a745") 
        }
      >
        CLICK FOR MORE
      </button>
    </Link>
  </div>
</section>










<section
  style={{
    display: "flex",
    alignItems: "stretch", // Ensures both sections match in height
    justifyContent: "space-between",
    padding: "4rem 8rem",
    backgroundColor: "#f9fafb",
    fontFamily: "Avenir",
    flexWrap: "wrap", // Allows wrapping on smaller screens
  }}
>
  {/* Text Content */}
  <div
    style={{
      maxWidth: "50%",
      paddingRight: "2rem",
      flex: "1 1 50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#28a745",
      }}
    >
      About Us
    </h1>
    <p
      style={{
        fontSize: "1rem",
        color: "#4a5568",
        lineHeight: "1.6",
        marginBottom: "1rem",
        fontFamily: "Avenir",
      }}
    >
      At Tree Removal Specialist, we are dedicated to 
      providing top-quality tree care and property maintenance 
      services with a focus on safety, efficiency, and customer satisfaction.
    </p>
    <p
      style={{
        fontSize: "1rem",
        color: "#4a5568",
        lineHeight: "1.6",
        marginBottom: "1rem",
        fontFamily: "Avenir",
      }}
    >
      With years of experience in tree removal, 
      trimming, stump grinding, and seasonal clean-up, 
      our skilled team is committed to enhancing the beauty 
      and health of your landscape. We use the latest tools and 
      techniques to ensure your property remains safe, clean, and 
      beautiful all year round.
    </p>
    <p
      style={{
        fontSize: "1rem",
        color: "#4a5568",
        lineHeight: "1.6",
        marginBottom: "2rem",
        fontFamily: "Avenir",
      }}
    >
      Whether you're dealing with hazardous trees or 
      simply need a seasonal refresh, we are here to 
      provide reliable, professional service tailored to your needs.
    </p>
  </div>

  {/* Image */}
  <div
    style={{
      flex: "1 1 50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
    }}
  >
    <img
      src="src/assets/Home/About.jpg" // Replace with your actual image URL
      alt="About Us"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "8px",
        aspectRatio: "3 / 2", // Maintains proportionality
      }}
    />
  </div>
</section>











 {/* About and Area Section */}
<section
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 1.5rem",
    backgroundColor: "#f0f0f0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      textAlign: "center",
      marginBottom: "2rem",
    }}
  >
    <h3
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#1a202c",
      }}
    >
      Areas We Proudly Serve
    </h3>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem", // Reduced gap to make elements closer
      width: "75%",
      maxWidth: "1000px", // Match the width to ensure alignment
    }}
  >
    {/* Screenshot Image */}
    <div style={{ flex: 1 }}>
      <img
        src="src/assets/Home/MAP.png"
        alt="Service Area Map"
        style={{
          width: "150%",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>

    {/* Message Section */}
    <div
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: "4rem", // Adjusted padding to match the content size
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        color: "#000",
      }}
    >
      <h4
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Connect with Us!
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {["Orlando", "Kissimmee", "Apopka", "Altamonte Springs", "Oviedo"].map(
            (location, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    marginRight: "0.5rem",
                  }}
                ></span>
                {location}
              </li>
            )
          )}
        </ul>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {["Alafaya", "Pine Hills", "Ocoee", "Winter Garden", "Winter Springs"].map(
            (location, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#28a745",
                    borderRadius: "50%",
                    marginRight: "0.5rem",
                  }}
                ></span>
                {location}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </div>
</section>




     {/* FAQ Section */}
     <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#fff',
          padding: '60px 0',
        }}
      >
        <div style={{ display: 'flex', maxWidth: '1200px', width: '100%' }}>
          {/* Left Title Section */}
          <div style={{ flex: '0 0 30%', paddingRight: '20px' }}>
            <h2
              style={{
                fontSize: '3.5rem',
                fontFamily: 'Avenir',
                color: '#28a745',
                lineHeight: '1.2',
                margin: 0,
              }}
            >
              Frequently <br /> Asked <br /> Questions
            </h2>
          </div>

          {/* Right Questions Section */}
          <div style={{ flex: '1' }}>
            {/* Single FAQ */}
            {[
              {
                question: 'Do you charge for providing tree service estimates?',
                answer:
                  'No, we provide FREE estimates for all tree services.',
              },
              {
                question: 'How is The Tree Removal Specialist different from other tree service companies?',
                answer:
                  'The Tree Removal Specialist stands out from other tree service companies due to our commitment to environmentally-friendly practices, our extensive experience in the industry, and our dedication to exceeding customer expectations on every job.',
              },
              {
                question: 'What services do you provide?',
                answer:
                  'The Tree Removal Specialist offers a wide range of tree services including tree trimming, tree removal, stump grinding, tree fertilization, and emergency tree services.',
              },
              
            ].map((item, index) => (
              <details key={index} style={{ borderTop: '1px solid #ccc', padding: '20px 0' }}>
                <summary
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '300',
                    color: '#333',
                  }}
                >
                  {item.question}
                  <span style={{ fontSize: '2rem', fontWeight: '300', color: '#333' }}>+</span>
                </summary>
                <p style={{ marginTop: '10px', fontSize: '1rem', color: '#555', lineHeight: '1.5' }}>
                  {item.answer}
                </p>
              </details>
            ))}
            {/* Final bottom border */}
            <div style={{ borderTop: '1px solid #ccc' }}></div>
          </div>
        </div>
      </section>






      </main>
    </>
  );
};

export default Home;
