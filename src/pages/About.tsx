import main1 from '../assets/About/Juda.jpg';


function About() {
  return (
    <div style={{ fontFamily: 'Avenir, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* What We Do Section */}
      <div style={{ textAlign: 'center', padding: '8rem 5rem', marginBottom: '-6rem' }}>
        {/* <h1 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>
          <span style={{ color: '#28a745' }}>Our Mission</span>
        </h1> */}
        {/* <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>
          At The Tree Removal Specialist, we are dedicated arborists servicing Orlando, 
          FL and surrounding areas with expert tree removal and maintenance. Our skilled
          team is committed to promoting the health and safety of your trees while enhancing 
          the aesthetics of your property. Trust us for professional and reliable tree care services.
        </p> */}
      </div>

      {/* Our Story Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', padding: '4rem 15rem' }}>
        <div>
          <img
            src={main1}
            alt="Founder"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '80%',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: "Avenir", marginBottom: '1rem' }}>
            <span style={{ color: '#28a745' }}>Our Story</span>
          </h1>
          <p style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1rem',
            wordWrap: 'break-word',
            lineHeight: '1.6',
          }}>
           A century-old legacy of arboriculture excellence took root in Atlanta 
           in the early 1900s when the owner's great uncle established a pioneering tree 
           business. In 1975, his father joined the family enterprise
            to expand the family's green 
            legacy and cultivate a thriving 
            venture that has flourished through the decades. Today, under the 
            stewardship of <span style={{ color: '#28a745', fontWeight: 'bold' }}>Juda Beath</span>, they proudly carry forward this rich tradition 
            with an unwavering commitment to excellence that sets them apart in the industry.

          </p>
          <br />
          <p style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1rem',
            wordWrap: 'break-word',
            lineHeight: '1.6',
          }}>
            From routine maintenance to urgent 
            tree removal, Juda's dedication to quality and reliability has established him 
            as a trusted partner in creating and maintaining healthy, and aesthetically 
            pleasing outdoor spaces. With a century of expertise behind him, the company continues to grow, 
            innovate, and set new standards in arboricultural excellence.
          </p>
        </div>
      </div>





{/* Our Bottom Section */}
<section
  style={{
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: '#f9f9f9',
    padding: '1rem 1rem',
    paddingTop:'20px',
    flexDirection: 'column', // Stack items vertically
    height: '50vh', // Full height of the viewport
  }}
>
  {/* Top Section: Contact and Hours */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // Center items vertically
      width: '100%',
    }}
  >
    <div
      style={{
        flex: 1,
        maxWidth: '350px',
        marginRight: '1rem',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontFamily: "Avenir",
          color: '#28a745',
          marginBottom: '1.5rem',
        }}
      >
        Contact Us
      </h2>

      {/* Number */}
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#28a745', }}>
        <i className="fa fa-phone" style={{ marginRight: '0.5rem' }}></i>
        (407) 305-1912
      </p>

      {/* Email */}
      <p style={{ fontSize: '1rem' }}>
        <i className="fa fa-envelope" style={{ marginRight: '0.5rem', color: '#28a745', }}></i>
        thetreeremovalspecialist@gmail.com
      </p>
    </div>

    <div
      style={{
        flex: 1,
        maxWidth: '350px',
        paddingLeft: '2rem',
        borderLeft: '1px solid #ccc',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontFamily: "Avenir",
          color: '#28a745',
          marginBottom: '1rem',
        }}
      >
        Hours
      </h3>
      <ul
        style={{
          listStyle: 'disc',
          paddingLeft: '1.5rem',
          lineHeight: '1.6',
          fontSize: '1rem',
        }}
      >
        <li>Sun: 8:00am - 10:00pm</li>
        <li>Mon: 8:00am - 10:00pm</li>
        <li>Tue: 8:00am - 10:00pm</li>
        <li>Wed: 8:00am - 10:00pm</li>
        <li>Thu: 8:00am - 10:00pm</li>
        <li>Fri: 8:00am - 10:00pm</li>
        <li>Sat: 8:00am - 10:00pm</li>
      </ul>
    </div>
  </div>

  {/* Center Section: Insured | Bonded | Family Owned */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem',
      gap: '2rem', // Space between items
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa fa-check-circle" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
      <span>Insured</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa fa-shield" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
      <span>Bonded</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa fa-home" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
      <span>Family Owned</span>
    </div>
  </div>
</section>





    </div>
  );
}

export default About;
