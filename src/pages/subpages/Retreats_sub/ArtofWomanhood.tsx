import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ArtofWomanhood() {
  const backgroundImageUrl = 'src/assets/Retreats/Womanhood/Banner.webp';
  const image1Url = 'src/assets/Retreats/Womanhood/faces.webp';
  const image2Url = 'src/assets/Retreats/Womanhood/hug.webp';
 
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></div>

      {/* Title and Subtitle */}
      <h1 style={{ fontSize: '2.5rem', color: '#5a93e4', fontStyle: 'italic', margin: '1rem 0' }}>
      The Art of Womanhood
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      Celebrate the woman you are in luxurious Riviera Maya
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          Join <span style={{ color: '#e29b20' }}> Holi </span> for a transformative women's retreat designed to empower you to 
          connect you to your womanhood, alongside like-minded women in a supportive 
          environment, engage in inspiring workshops, and explore holistic practices 
          that nurture your mind, body, and spirit. Together, we'll <span style={{ color: '#e29b20' }}> cultivate and celebrate the woman that you are </span> 
          in luxurious Riviera Maya.
          </p>
          <p>
          This retreat is for women seeking personal growth and connection 
          through holistic practices in a supportive environment.
          </p>
        </div>

        {/* Information Cards */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  {/* Date & Location Card */}
  <div style={{
    border: '1px solid #5a93e4',
    borderRadius: '10px',
    padding: '1rem',
    maxWidth: '250px',
    textAlign: 'left',
    color: '#4a4a4a',
    fontSize: '1rem',
  }}>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaCalendarAlt color="#d4a05f" /> <strong>January 20 - 24, 2025</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Riviera Maya, Mexico
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Holi Dilks
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $4099 Single-Occupancy
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $2777 Double-Occupancy
    </p>
    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#6c6c6c' }}>
      *Installment payments available!
    </p>
  </div>
</div>

      </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Connect to, strengthen & celebrate the woman you are</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Experience transformational workshops and discover new parts of you</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Learn powerful tools to connect to your true self and other women</p>
  </div>
</div>


      {/* Retreat Inclusions and Exclusions */}
<div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
  <h3 style={{ color: '#5a93e4', fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 'bold', letterSpacing: '1px' }}>RETREAT INCLUSIONS</h3>
  
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4rem',
    flexWrap: 'wrap',
  }}>
    {/* First Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '600px' }}>
    <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
    4-night stay at
    <a href="https://en.bluediamondluxuryboutiquehotel.com/?partner=2348&gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgClmfdBoWY_AEi1hq7zimPhvgA58938-eV7xo9QSRRrrvHGCEXlHI-ThoCpoEQAvD_BwE" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
    Blue Diamond Luxury Boutique Hotel
    </a> in Riviera Maya, Mexico. 
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Daily Breakfast, Lunch, Dinner, and All Beverages
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        30-minute swim at hotel's Cenote
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Roundtrip Airport Transfers
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Wellness Workshops
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Resort Fees
      </p>
    </div>
  </div>

  <h3 style={{ color: '#e29b20', fontSize: '1.75rem', margin: '2rem 0 1rem', fontWeight: 'bold', letterSpacing: '1px' }}>RETREAT EXCLUSIONS</h3>
  
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4rem',
    flexWrap: 'wrap',
  }}>
    {/* First Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#e29b20', fontSize: '1.25rem', marginRight: '0.5rem' }}>✗</span>
        Flights
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#e29b20', fontSize: '1.25rem', marginRight: '0.5rem' }}>✗</span>
        Travel Insurance
      </p>
    </div>
  </div>



     {/* Host Intro */}
  <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem', backgroundColor: '#f7f3f1' }}>
  <div style={{ display: 'flex', gap: '3rem', maxWidth: '1200px', width: '100%', alignItems: 'center' }}>
    {/* Text Section */}
    <div style={{ width: '60%', lineHeight: '1.8' }}>
      <h2 style={{ fontSize: '2rem', color: '#4a90e2', fontWeight: '600', marginBottom: '2rem' }}>Meet your incredible host!</h2>
      <p>
        <a href="https://www.instagram.com/healwithholi/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Holi</a>, 
        is an holistic therapist and mentor with a deep connection to 
        spirit and being in service to humankind and mother earth. A 
        certified Breathwork practitioner, Somatic Therapist and Reiki 
        Master, Holi combines her exploration of movement and alternative 
        methods of communication with her potent spiritual practices.
      </p>
      <p>
      Guiding people to connect deeper to their heart, body, spirit, 
      mind and energetics through a variety of different offerings. 
      She creates transformational, in depth and authentic spaces in 
      which people can wonder deeper into their inner wisdom and truth.</p>
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/Womanhood/Host.webp"
      alt="Host Image"
      style={{ width: '40%', maxWidth: '400px', borderRadius: '8px', objectFit: 'cover' }}
    />
  </div>
</section>



{/* Preview of Itinerary */}
<section style={{ padding: '3rem', paddingBottom: '10rem', backgroundColor: '#f7f3f1' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#e29b20', fontWeight: '600', marginBottom: '2rem' }}>Preview of Itinerary</h2>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '2000px', margin: '0 auto' }}>
    {/* Each Day Card */}
    {[
      {
        day: 'Day One',
        morning: ['No morning activities'],
        afternoon: ['Check-In & Arrival: Arrive at the Blue Diamond Retreat and settle into your accommodations **(Check-In Times TBC)','Welcoming Circle: Step into a circle of empowerment and connection'],
        evening: ['Dinner: Enjoy a delicious dinner together to connect with your fellow retreat-goers', 'Womens Element Ceremony: Embark on a transformative journey of self-discovery']
      },
      {
        day: 'Day Two',
        morning: ['Morning Meditation: Start your day with a guided meditation to center your mind and body', 'Gaga Movement: Unleash your inner power and express yourself through this unique movement practice', 'Breakfast: Fuel your body with a delicious and nourishing breakfast', '​Somatic Communication Workshop: Deepen your understanding of nonverbal communication and body language' ],
        afternoon: ['Lunch: Enjoy a delicious lunch and relax in the beautiful surroundings', 'Beach Time: Spend time relaxing and restoring on the pristine beach', 'Art of Women Workshop: Connect to the beauty of a womans true essence, and fall in love with the woman that you are'],
        evening: ['Dinner: Enjoy a delicious dinner together and connect with your fellow retreat-goers', 'Fire Ceremony: Witness the power of transformation through this sacred ritual']
      },
      {
        day: 'Day Three',
        morning: [ 'Morning Meditation: Start your day with a guided meditation to center your mind and body', 'Ecstatic Movement: Create freedom in your mind, body and soul through embodied movement', 'Breakfast: Fuel your body with a delicious and nourishing breakfast', 'Rebirthing Ceremony: Embark on a profound journey of self-discovery through breath-work',],
        afternoon: ['Lunch & Rest: Enjoy a delicious lunch and take some time to rest and recharge'],
        evening: ['A Womans Touch Workshop: Celebrate the power of feminine touch and connection','Dinner: Enjoy a delicious dinner together and connect with your fellow retreat-goers', 'Evening on the Beach: Relax and enjoy the beauty of the ocean']
      },
      {
        day: 'Day Four',
        morning: ['Morning Meditation: Start your day with a guided meditation to center your mind and body','Intuitive Movement: Explore the intuitive embodiment that is within','Breakfast: Fuel your body with a delicious and nourishing breakfast', 'Witness Her Workshop: Witness the power of feminine energy and support'],
        afternoon: ['Lunch and Rest: Enjoy a delicious lunch and take some time to rest and recharge','Rest, Nourishment, and Play: Spend time relaxing, nourishing your body, and having fun'],
        evening: ['Farewell Dinner and Shares: Celebrate your journey together with a delicious dinner and heartfelt shares']
      },
      {
        day: 'Day Five',
        morning: ['Breakfast: Enjoy a final breakfast together','Closing Circle: Reflect on your journey and share your insights'],
        afternoon: ['Check Out and Farewell: Depart with a sense of peace, empowerment, and connection'],
        evening: ['No evening activities']
      },

    ].map(({ day, morning, afternoon, evening }, index) => (
      <div key={index} style={{ position: 'relative', width: '100%', maxWidth: '250px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', padding: '1rem' }}>
        
        {/* Day Label on the Left Side */}
        <div style={{ 
          position: 'absolute', 
          left: '-190px', 
          top: '50%', 
          transform: 'translateY(-50%) rotate(-90deg)', 
          backgroundColor: '#a9d3e6', 
          padding: '0.5rem 2rem', 
          borderRadius: '6px', 
          color: '#ffffff', 
          fontWeight: '600',
          textAlign: 'center',
          width: '360px'
        }}>
          {day.toUpperCase()}
        </div>
        
        {/* Morning Section */}
        {morning.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Morning</h4>
            <ul style={{ paddingLeft: '1rem', color: '#666' }}>
              {morning.map((activity, i) => <li key={i}>{activity}</li>)}
            </ul>
          </div>
        )}

        {/* Afternoon Section */}
        {afternoon.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Afternoon</h4>
            <ul style={{ paddingLeft: '1rem', color: '#666' }}>
              {afternoon.map((activity, i) => <li key={i}>{activity}</li>)}
            </ul>
          </div>
        )}

        {/* Evening Section */}
        {evening.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Evening</h4>
            <ul style={{ paddingLeft: '1rem', color: '#666' }}>
              {evening.map((activity, i) => <li key={i}>{activity}</li>)}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
</section>





{/* FAQ */}
<section style={{ padding: '3rem', backgroundColor: '#ffffff', maxWidth: '800px', margin: '0 auto' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#5a8dbf', fontWeight: '600', marginBottom: '2rem' }}>
    Frequently Asked Questions
  </h2>
  
  <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}>
    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>1. Will you assist me with my travel plans?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Absolutely! Your retreat participation includes our complimentary 
    travel logistics services. Please note that if you choose to have us 
    arrange your flights, we kindly request that you secure travel insurance. 
    This is to safeguard your trip against unforeseen circumstances such as cancellations, 
    delays, or other unexpected events yet, it is not required should you 
    decide to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. How will I get to the hotel from the airport?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    The retreat package includes roundtrip airport transfers 
    and whether you choose to book your flights through our 
    services or make your own arrangements, we'll gladly 
    coordinate your transportation to perfectly align with 
    your travel schedule.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. Can you accommodate dietary restrictions and/or food allergies? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Of course! Once your participation is confirmed, 
    our dedicated team will personally reach out to you to 
    gather important details about your dietary needs.This 
    information will be carefully communicated to our 
    partnering hotel, ensuring that your culinary experience 
    throughout the retreat is not only safe but also delightful.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. What happens if I need to cancel my participation?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    We understand that plans can change, which is why we 
    offer a flexible cancellation policy. Cancellations made 
    15 days or more before your scheduled check-in date are 
    eligible for a refund, subject to applicable fees. However, 
    due to our advance commitments for accommodations, activities, 
    transportation and retreat-related services, we regrettably cannot 
    process refunds for cancellations made within 14 days of the retreat 
    start date. In the event of a refund approval, a 6% processing fee 
    and a $100 cancellation fee will be deducted from your refunded amount.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>5. What happens if my retreat host decides to cancel?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      Occasionally, unforeseen circumstances may force a retreat host to cancel the retreat. While such instances are uncommon,
      we’re committed to providing you with flexible options should they occur. You may request a full refund of your payment,
      noting that while there will be no cancellation fee, a 6% processing fee (included in your original payment) is
      non-refundable and will be deducted from your refund amount. Alternatively, you can choose to convert your paid amount
      into a vacation credit, and our dedicated team would be delighted to work closely with you to redesign an enjoyable travel
      experience that meets your preferences. Rest assured, in the event of a host-initiated cancellation, our priority is to
      minimize any inconvenience and ensure your satisfaction.
    </p>

    <p style={{ color: '#333', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>
      Should you have any other questions prior to booking your participation, please feel free to reach out to us at
      <a href="mailto:retreats@onehundredandseven.com" style={{ color: '#5a8dbf', textDecoration: 'none', fontWeight: '600' }}>
        retreats@onehundredandseven.com
      </a>.
    </p>
  </div>
</section>


{/* Booking Section */}
<section style={{ padding: '2rem', backgroundColor: '#f7f3f1', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', color: '#666' }}>Ready to pack your bags?</h2>
  {/* <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $200 each!</p> */}
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    {/* <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Book With A Friend!</button> */}
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Single Occupancy</button>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Double Occupancy</button>
  </div>
  
  <p style={{ fontSize: '1rem', color: 'black' }}>
    Payable in installments with <span style={{ fontWeight: '600' }}>afterpay</span> or <span style={{ fontWeight: '700' }}>affirm</span>.
    <br />
    By purchasing this retreat, you agree to our 
    <Link to="/terms" style={{ color: '#5a8dbf', textDecoration: 'none', fontWeight: '600' }}>
        Terms & Conditions
    </Link>.
</p>

</section>


</div>

    </div>
  );
}

export default ArtofWomanhood;
