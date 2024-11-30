import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function RomanceOnCoast() {
  const backgroundImageUrl = 'src/assets/Retreats/Romance/Banner.webp';
  const image1Url = 'src/assets/Retreats/Romance/couple.webp';
  const image2Url = 'src/assets/Retreats/Romance/face.webp';
 
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
      <h1 style={{ fontSize: '2.5rem', color: '#5a93e4', margin: '1rem 0' }}>
      Romance on the Coast Couple's Retreat
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      Escape to Romance this Valentine's Day!
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          Hosted by renowned couples therapist <span style={{ color: '#e29b20' }}>Mackinzie Rummell </span>, 
          this <span style={{ color: '#e29b20' }}>Romance on the 
          Coast Couple's Retreat'</span>'Romance on the 
          Coast Couple's Retreat' offers a unique opportunity for couples to celebrate 
          their love in a truly unforgettable setting. Nestled in the picturesque Dana Point, 
          California, this romantic getaway is perfect for couples who are looking to have a 
          romantic beach getaway with an added bonus of deepening your connection and pouring 
          into your relationship.
          </p>
          
          <p>
          Imagine waking up to stunning ocean views, enjoying romantic dinners under the stars, 
          and participating in meaningful activities designed for you and your partner. 
          This coming Valentine's, escape to a retreat designed to deepen your connection 
          and strengthen your love!
          </p>
        </div>

        {/* Information Cards */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  {/* Date & Location Card */}
  <div style={{
     border: '2px solid #5a93e4',
    borderRadius: '10px',
    padding: '1rem',
    maxWidth: '250px',
    textAlign: 'left',
    color: '#4a4a4a',
    fontSize: '1rem',
  }}>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaCalendarAlt color="#d4a05f" /> <strong>February 07 - 09, 2025</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Dana Point, CA
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Mackinzie Rummell
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $1950 Per Couple
    </p>
    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#6c6c6c' }}>
      *Installment payments available!
    </p>
  </div>
  {/* Who Is This Retreat For Card */}
  <div style={{
             border: '2px solid #5a93e4',
            borderRadius: '10px',
            padding: '1rem',
            maxWidth: '250px',
            textAlign: 'left',
            fontStyle: 'italic'
          }}>
            <p><strong style={{fontStyle: 'italic', color: '#e29b20' }}>Who is this retreat for?</strong></p>
            <p>
            All couples are welcome. Dating, Engaged, & Married!
            </p>
          </div>
</div>

      </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Embark on a Romnatic Journey Together</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Indulge in a Romantic Atmoshpere</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Celebrate Your Love Story</p>
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
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '500px' }}>
    <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
    2-night stay in the oceanfront
    <a href="https://elcaminantehotel.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
        El Caminante in Dana Point, CA
    </a>. 
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        All rooms include a king bed and ocean-view balcony
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        A personalized Welcome Package upon arrival with free goodies from Mackinzie!
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        3 interactive couples workshops designed to improve connection, communication, & intimacy
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Conveniently located near local gems to explore & enjoy during your time at leisure
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Amazing restaurants, hiking trails, & sunset views, all within walking distance from the hotel.
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
        Flights/Transportation
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#e29b20', fontSize: '1.25rem', marginRight: '0.5rem' }}>✗</span>
        Lunches and dinners
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
        <a href="https://www.mackinzierummelltherapy.com/new-page" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold' }}>Mackinzie Rummell</a>, 
        also known as <a href="https://www.instagram.com/beachy.therapist/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontStyle: 'italic' }}>the Beachy Therapist</a>, 
        specializes in helping couples and individuals connect deeply and manage conflict in their relationships. <a style={{ textDecoration: 'none', fontStyle: 'italic' }}>The best part? She does it all with kindness, grace, and a "let's work together" attitude!</a>
      </p>
      <p>
      Mackinzie has a unique ability to create a romantic and nurturing atmosphere where 
      couples can celebrate their love. With a blend of expert guidance and a touch of fun, 
      Mackinzie will lead you and your partner through a series of engaging activities designed 
      to make this romantic celebration truly unforgettable.
      </p>
      <p>
      Join Mackinzie and get ready for a getaway that's more than just a vacation!
      </p>
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/Romance/host.webp"
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
        afternoon: ['DAY ONE Check-in at 4pm. Happy Hour & Welcome for the group! Lets Get Connected Workshop I at 5pm.Perfect opportunity for a date night on the town, enjoy the luxurious scenery, or have a cozy night in!'],
        evening: ['No morning activities']
      },
      {
        day: 'Day Two',
        morning: ['Enjoy the morning view of the ocean from your room or take a stroll on the beach.Fight Like Lovers Workshop II at 10am. You can choose to the spend the day enjoying the ocean, walking the nearby trails, or renting bikes to explore! Ignite the Romance Workshop III at 5pm. Another perfect opportunity for a romantic date night on the town or whatever you choose to end the evening.' ],
        afternoon: ['No afternoon activities'],
        evening: ['No evening activities']
      },
      {
        day: 'Day Three',
        morning: [ 'DAY THREELets grab a coffee together as we say farewell to this magical weekend.Check-out is at 12pm.',],
        afternoon: ['No afternoon activities'],
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
    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>1.Will you assist me with my travel plans?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Absolutely! Your retreat participation includes our complimentary travel logistics services. 
    Please note that if you choose to have us arrange your flights, we kindly request that you 
    secure travel insurance. This is to safeguard your trip against unforeseen circumstances such 
    as cancellations, delays, or other unexpected events yet, it is not required should you decide 
    to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. Can you accommodate dietary restrictions and/or food allergies? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Of course! Once your participation is confirmed, our dedicated team will personally 
    reach out to you to gather important details about your dietary needs. 
    This information will be carefully communicated to our partnering hotel, ensuring 
    that your culinary experience throughout the retreat is not only safe but also delightful.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. What happens if I need to cancel my participation?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    We understand that plans can change, which is why we offer a flexible cancellation policy. 
    Cancellations made 15 days or more before your scheduled check-in date are eligible for a refund, 
    subject to applicable fees. However, due to our advance commitments for accommodations, activities, 
    transportation and retreat-related services, we regrettably cannot process refunds for cancellations 
    made within 14 days of the retreat start date. In the event of a refund approval, a 6% processing 
    fee and a $100 cancellation fee will be deducted from your refunded amount.
    </p>


    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. What happens if my retreat host decides to cancel?</h3>
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



{/* Room Options Section */}
<section style={{ padding: '3rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', color: '#e29b20', fontStyle: 'italic', fontWeight: '600', marginBottom: '2rem' }}>Explore these transformative Couples Workshops</h2>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', minWidth: '280px' }}>
      <h3 style={{ color: '#5a8dbf', fontWeight: '600' }}>
Workshop I: Let's Get Connected</h3>
      <p style={{ color: '#666', lineHeight: '1.8' }}>
      Learn the importance of connection within relationships, 
      building trust & appreciation, set intentions for the weekend, 
      and understand how to make meaningful changes in your relationship.</p>
    </div>
    
    <div style={{ borderLeft: '1px solid #5a8dbf', height: '100px', margin: '0 2rem' }} />

    <div style={{ flex: '1', minWidth: '280px' }}>
      <h3 style={{ color: '#5a8dbf', fontWeight: '600' }}>Workshop II: Fight Like Lovers</h3>
      <p style={{ color: '#666', lineHeight: '1.8' }}>Understand the role of communication & conflict in relationships. Learn skills to manage conflict, repair after hurts/ruptures, and reconnect after conflict. Aquire skills to communicate feelings in a healthy way.</p>
    </div>
 

    <div style={{ flex: '1', minWidth: '280px' }}>
      <h3 style={{ color: '#5a8dbf', fontWeight: '600' }}>Workshop III: Ignite the Romance</h3>
      <p style={{ color: '#666', lineHeight: '1.8' }}>Reignite passion in your relationship through reconnecting with your partner. Deepen your emotional connection by exploring ways to connect intimately.</p>
    </div>
  </div>
</section>

{/* Booking Section */}
<section style={{ padding: '2rem', backgroundColor: '#f7f3f1', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', color: '#666' }}>Ready to pack your bags?</h2>
  {/* <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $200 each!</p> */}
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Purchase</button>
    {/* <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Single Occupancy</button> */}
    {/* <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Double Occupancy</button> */}
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

export default RomanceOnCoast;
