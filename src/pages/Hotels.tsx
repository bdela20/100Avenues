import React from 'react';
import { Link } from 'react-router-dom';

const Hotels: React.FC = () => {
  const styles = {
    hotelsSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      padding: '1rem',
      width: '100%',
    },
    headerSection: {
      position: 'relative' as const,
      width: '110%',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerImage: {
      position: 'absolute' as const,
      top: 4,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
    },
    headerText: {
      position: 'relative' as const,
      zIndex: 2,
      color: 'white',
      fontSize: '3rem',
      fontWeight: 'bold' as const,
      textAlign: 'center' as const,
      paddingTop: '50px',
      fontFamily: "Playfair Display, serif",
    },
    regionSection: {
      marginTop: '5rem',
      
      width: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      
      
    },
    hotelGrid: {
      display: 'grid',
      marginTop: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      justifyItems: 'center',
      width: '80%',
      fontFamily: "Playfair Display, serif",
    },
    hotelCard: {
      textAlign: 'center' as const,
      backgroundColor: '#f7f7f7',
      padding: '1rem',
      borderRadius: '10px',
      transition: 'transform 0.3s ease',
      width: '100%',
      maxWidth: '300px',
    },
    hotelCardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
  };

  return (
    <div style={styles.hotelsSection}>
      {/* Header Section */}
      {/* Header Section */}
<div style={styles.headerSection}>
  <img src="src/assets/HomePage/hotels.webp" alt="Header" style={styles.headerImage} />
  <h1 style={styles.headerText}>Hotels & Experiences</h1>
</div>


      {/* Caribbean & Americas Section */}
      <div style={styles.regionSection}>
      <h2>
  <span style={{ fontWeight: 'bold', fontFamily: "Playfair Display, serif", fontSize: '1.5rem' }}>Caribbean & Americas</span>
</h2>
        <div style={styles.hotelGrid}>
          <Link to="/Punta-Islita" style={styles.hotelCard}>
            <img src="src/assets/HomePage/PuntaIslitaMain.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Punta Islita, Autograph Collection</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Guanacaste, Costa Rica</em>
</h1></Link>
          <Link to="/ElMangroove" style={styles.hotelCard}>
            <img src="src/assets/Hotels/El Mangroove/Main Photo_JPG.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>El Mangroove, Autograph Collection</p>
            <h1 style={{fontSize: '.8rem',fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Guanacaste, Costa Rica</em> 
</h1></Link>
          <Link to="/TheOcean" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Ocean Club/THI_4236-Edit-r_edited.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>The Ocean Club, a Luxury
            Collection Resort, Costa Norte</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Puerto Plata, Dominican Republic</em>
</h1></Link>
        </div>
      </div>



      {/* Europe Section */}
      <div style={styles.regionSection}>
      <h2>
  <span style={{ fontWeight: 'bold', fontFamily: "Playfair Display, serif", fontSize: '1.5rem', }}>Europe</span>
</h2>
        <div style={styles.hotelGrid}>
        <Link to="/PreciseTale" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Precise Tale/s23-poggioallasala-maggio-45-copy.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Precise Tale Poggio Alla Sala</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Montepulciano, Italy</em>
</h1></Link>
          
          <Link to="/ElRompido" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Rompido/pool.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Precise El Rompido Costa de la Luz</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>El Rompido, Spain</em>
</h1> </Link>
<Link to="/SeehofDavos" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Seehof Davos/seehof-winter-aussen-nacht-web.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Precise Tale Seehof Davos</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Davos, Switzerland</em>
</h1></Link>
<Link to="/Poseidon" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Poseidon/premium03-gallery_edited.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Hotel Poseidon</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Positano, Italy</em>
</h1></Link>
<Link to="/AbidOru" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Abi d'Oru/11 Bella_edited_edited.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Abi d'Oru Hotel & Spa</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Sardinia, Italy</em>
</h1></Link>
<Link to="/TaleBerlin" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Tale Berlin/garden-0155-kopie-klein.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Precise Tale Berlin</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Berlin, Germany</em>
</h1></Link>
<Link to="/Monument" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Monument/mh-fachada-1339.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Monument Hotel</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Barcelona, Spain</em>
</h1></Link>
<Link to="/RoyalBalloon" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Royal Balloon/Image.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Royal Balloon Cappadocia</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Cappadocia, Turkey</em>
</h1></Link>
<Link to="/RitzyCharters" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Ritzy Charters/3672brochure1.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Private Yachting</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Greek Islands</em>
</h1></Link>
        </div>
      </div>





      {/* Asia Section */}
      <div style={styles.regionSection}>
      <h2>
  <span style={{ fontWeight: 'bold', fontFamily: "Playfair Display, serif", fontSize: '1.5rem' }}>Asia</span>
</h2>
        <div style={styles.hotelGrid}>
        <Link to="/Sowaka" style={styles.hotelCard}>
            <img src="src/assets/Hotels/Sowaka/g_39.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Sowaka</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Kyoto, Japan</em>
</h1></Link>
<Link to="/FZHeliTours" style={styles.hotelCard}>
            <img src="src/assets/Hotels/FZ Heli Tours/uofou_edited_edited.webp" alt="Punta Islita" style={styles.hotelCardImage} />
            <p>Helicopter Tours</p>
            <h1 style={{fontSize: '.8rem', fontFamily: "Avenir, sans-serif",  marginBottom: '0.5rem' }}>
  <em>Dubai, United Arab Emirates</em>
</h1></Link>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
