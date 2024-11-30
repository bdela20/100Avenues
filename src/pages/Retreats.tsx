import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HomePage/retreats2.webp';

function Retreats() {
  const retreats = [
    {
      img: "src/assets/Retreats/Home/Therapist.webp",
      date: "DEC 05-08",
      title: "Therapists Exclusive Getaway",
      description: "With Lauren Larkin in Costa Rica",
      path: "/TherapistsGetaway",
    },
    {
      img: "src/assets/Retreats/Home/Yoga.webp",
      date: "JAN 10 - 13",
      title: "Escape on a Relaxing Yoga Retreat",
      description: "With Shakara Zulu in Riviera Maya",
      path: "/YogaRetreat",
    },
    {
      img: "src/assets/Retreats/Home/Homewood.webp",
      date: "JAN 20 - 24",
      title: "Tap Into the Art of Womanhood",
      description: "With Holi Dilks in Tulum",
      path: "/ArtofWomanhood",
    },
    {
      img: "src/assets/Retreats/Home/Romance.webp",
      date: "FEB 07-09",
      title: "Romance on the Coast",
      description: "With Mackinzie Rummell in Dana Point, CA",
      path: "/RomanceOnCoast",
    },
    // {
    //   img: "src/assets/Retreats/Home/Nutrition.webp",
    //   date: "FEB 21 - 24",
    //   title: "Learn Nutrition & Wellness",
    //   description: "With Afya Ibomu in Riviera Maya, Mexico",
    //   path: "/NutritionWellness",
    // },
    {
      img: "src/assets/Retreats/Home/Healing.webp",
      date: "MAR 06 - 09",
      title: "Healing in a Safe LGBTQ+ Space",
      description: "With Kelly Minter in Florida",
      path: "/LgbtqSafeSpace",
    },
    {
      img: "src/assets/Retreats/Home/Therapist connect.webp",
      date: "MAR 14 - 16",
      title: "Therapists Connect & Grow",
      description: "With Mackinzie Rummell in Laguna Beach, CA",
      path: "/TherapistsConnect",
    },
  
    // {
    //   img: "src/assets/Retreats/Home/balance.webp",
    //   date: "COMING SOON!",
    //   title: "Balance & Bliss",
    //   description: "With Morganne Brownlee in Riviera Maya, MX",
    //   path: "/BalanceBliss",
    // },

    {
      img: "src/assets/Retreats/Home/sisterhood.webp",
      date: "COMING SOON!",
      title: "A Newfound Sisterhood",
      description: "With Loisa Lilian",
      path: "/Retreats",
    },
  ];

  return (
    <div>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '2rem',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', marginBottom: '1rem' }}>
          Upcoming Retreats
        </h1>
      </div>

      <div
        className="gridContainer"
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '0 1rem',
          background: "white"
        }}
      >
        {retreats.map((retreat, index) => (
          <Link to={retreat.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
              }}
            >
              <img
                src={retreat.img}
                alt={retreat.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#5A9BD4',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {retreat.date}
                </div>
                <div style={{ marginLeft: '1rem', textAlign: 'left' }}>
                  <h3 style={{ margin: '0 0 0.2rem 0' }}>{retreat.title}</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>{retreat.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stay Connected Section */}
      <div style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.5rem', color: 'black', fontStyle: 'italic', fontWeight: 'bold', paddingTop: '15px' }}>
        <p>Would You Like to Host Your Retreat With Us?</p>
      </div>
      <div style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1rem', color: 'black', fontStyle: 'italic' }}>
        <p>Let's connect!</p>
      </div>
      <div className="contactForm" style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <form style={{ display: 'grid', gap: '1rem' }}>
          <input type="text" name="name" placeholder="Name" required style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="text" name="subject" placeholder="Subject" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }} />
          <textarea name="message" placeholder="Type your message here..." required style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd', minHeight: '150px' }}></textarea>
          <button type="submit" style={{ padding: '0.8rem', backgroundColor: "#c68a30", color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Retreats;
