import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TherapistsConnect() {
  const backgroundImageUrl = 'src/assets/Retreats/TherapistsConnect/Banner.webp';
  const image1Url = 'src/assets/Retreats/TherapistsConnect/House.webp';
  const image2Url = 'src/assets/Retreats/TherapistsConnect/Yoga.webp';
 
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
      <h1 style={{ fontSize: '2.5rem', color: '#5a93e4',fontStyle:'italic', margin: '1rem 0' }}>
      Connect & Grow Retreat for Therapists
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      A Getaway to Unwind, Recharge, and Elevate
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          <p>
          Hosted by renowned couples therapist <span style={{ color: '#e29b20' }}>Mackinzie Rummell,</span> this <span style={{ color: '#e29b20' }}>'Connect & Grow Retreat for Therapists' </span> 
          offers a transformative experience for therapists seeking to rejuvenate, recharge, and elevate their practice. 
          Nestled in the picturesque Laguna Beach, California, this serene getaway provides the perfect escape from the 
          daily stresses of therapy. Indulge in wellness activities, connect with like-minded therapists, and discover
           new ways to recharge and find balance. But that's not all! This retreat also offers valuable workshops on 
           social media marketing designed to equip you with the essential tools and strategies to maximize your 
           online presence and attract new clients.
          </p>
          </p>
          <p>
          This retreat is perfect for therapists & wellness professionals who want to build community, 
          relax at a beachfront resort, & learn the skills to market themselves on Instagram!
          </p>
        </div>

        {/* Information Cards */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
  {/* Date & Location Card */}
  <div style={{
    border: '1px solid #5a93e4',
    borderRadius: '10px',
    padding: '1rem',
    maxWidth: '350px',
    textAlign: 'left',
    color: '#4a4a4a',
    fontSize: '1rem',
  }}>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaCalendarAlt color="#d4a05f" /> <strong>March 14 - 16, 2025</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Laguna Beach, CA
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Mackinzie Rummell
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $1729 King Double-Occupancy
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $1629 Queen Double-Occupancy
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $1529 Shared Queen Pull-Out
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
            maxWidth: '350px',
            textAlign: 'left',
            fontStyle: 'italic'
          }}>
            <p><strong style={{fontStyle: 'italic', color: '#e29b20' }}>Who is this retreat for?</strong></p>
            <p>
            Therapists, Grad students, Associate Therapists, and other Wellness Professionals are welcome to join as well!
            </p>
          </div>
  
</div>

      </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Connect with a Supportive Community of Therapists</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Rejuvenate Through Relaxation and Wellness Activities</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Relax and Unwind in the Serene Atmosphere </p>
  </div>
</div>


      {/* Retreat Inclusions and Exclusions */}
<div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
  <h3 style={{ color: '#5a93e4', fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 'bold', letterSpacing: '1px' }}>RETREAT INCLUSIONS</h3>
  
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '5rem',
    flexWrap: 'wrap',
  }}>
    {/* First Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '500px' }}>
    <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
    2-night stay at the beautiful beach resort 
    <a href="https://www.theranchlb.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
        The Ranch at Laguna
    </a>. 
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        The price includes the hotel stay with shared room accommodation and workshops.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        $80 meal credit per day.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        2 marketing workshops designed to help you start and succeed at marketing your practice on Instagram.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Ideal content-creating scenery!
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Exclusive Instagram Marketing Workbook & Guide.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Wine & light snacks will be provided throughout the weekend.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Access to a ring light and tripod all weekend.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        A personal audit (by Mackinzie) of your current Instagram & 3 fresh reel ideas for you to implement immediately.
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Resort Pool & Sycamore Spa access.
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
      <h2 style={{ fontSize: '2rem',fontStyle: 'italic', color: '#4a90e2', fontWeight: '600', marginBottom: '2rem' }}>Meet your incredible host!</h2>
      <p>
        <a href="https://www.jadechunghealing.com/links" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Mackinzie Rummell</a>, 
        also known as <a href="https://www.instagram.com/itsjadechung/" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontStyle: 'italic' }}>the Beachy Therapist, </a>, 
        specializes in helping couples and individuals connect deeply and manage conflict in their relationships. The best part? She does it all with kindness, grace, and a "let's work together" attitude!      </p>
      <p>
      Mackinzie's warm and inviting personality will create a welcoming atmosphere where you can truly relax, 
      recharge, and return to your practice feeling refreshed. In addition, you'll also have the chance to 
      learn valuable marketing strategies to help you optimize your online presence, attract new clients, and 
      grow your practice. This retreat is more than just a vacation; it's an investment in your well-being and 
      professional growth.      </p>
      <p>
      Join Mackinzie and reach your full potential in your therapy business and social media presence!      </p>
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/TherapistsConnect/Host.webp"
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
        afternoon: ['Check-In & Arrival: Arrive at the retreat and make yourself comfortable in your luxurious accommodations','Happy Hour and Welcome: Join your fellow therapists for a casual gathering to meet and connect'],
        evening: ['Instagram Marketing Workshop I: Learn essential strategies to elevate your online presence and attract new clients','Group Dinner: Enjoy a delicious dinner with your fellow retreat-goers at Harvest']
      },
      {
        day: 'Day Two',
        morning: ['1:1 Consultations: Meet with Mackinzie for personalized guidance on your Instagram strategy', 'Brunch: Fuel up with a delicious brunch and socialize with your fellow therapists'],
        afternoon: ['Relax and Create: Spend the afternoon relaxing by the pool, walking to the beach, and creating content for your socials', 'Instagram Marketing Workshop II: Continue to learn advanced strategies and tips for Instagram marketing'],
        evening: ['Dinner At Leisure: Enjoy a delicious dinner at a local hotspot (TBD)']
      },
      {
        day: 'Day Three',
        morning: [ 'Morning Hike: Embark on a breathtaking hike through the local canyon', 'Farewell Brunch: Share a final meal and farewell with your newfound community of therapists'],
        afternoon: ['Check-Out & Departure: Depart with a renewed sense of inspiration and connection'],
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
    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>1. How do I get to Sedona from the airport?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Absolutely! Your retreat participation includes our complimentary travel logistics services. 
    Please note that if you choose to have us arrange your flights, we kindly request that you 
    secure travel insurance. This is to safeguard your trip against unforeseen circumstances such 
    as cancellations, delays, or other unexpected events yet, it is not required should you decide 
    to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. Can you accommodate dietary restrictions and/or food allergies?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      If you’re traveling internationally, we recommend arriving in Phoenix a day before the retreat begins to accommodate
      any potential travel delays and adjust to the time zone. Please check visa requirements and travel advisories for the U.S.
      ahead of your trip.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. What happens if I need to cancel my participation?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    We understand that plans can change, which is why we offer a flexible cancellation policy. 
    Cancellations made 15 days or more before your scheduled check-in date are eligible for a refund, 
    subject to applicable fees. However, due to our advance commitments for accommodations, activities, 
    transportation and retreat-related services, we regrettably cannot process refunds for cancellations 
    made within 14 days of the retreat start date. In the event of a refund approval, a 6% processing fee 
    and a $100 cancellation fee will be deducted from your refunded amount.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. What happens if my retreat host decides to cancel?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Occasionally, unforeseen circumstances may force a retreat host to cancel the retreat. While such instances are uncommon, 
    we're committed to providing you with flexible options should they occur. You may request a full 
    refund of your payment, noting that while there will be no cancellation fee, a 6% processing fee (
      included in your original payment) is non-refundable and will be deducted from your refund amount. 
      Alternatively, you can choose to convert your paid amount into a vacation credit, and our dedicated 
      team would be delighted to work closely with you to redesign an enjoyable travel experience that meets 
      your preferences. Rest assured, in the event of a host-initiated cancellation, our priority is to minimize 
      any inconvenience and ensure your satisfaction.

​Should you have any other questions prior to booking your participation, please feel free to reach out to us at retreats@onehundredavenues.com.
    </p>
  </div>
</section>


{/* Booking Section */}
<section style={{ padding: '2rem', backgroundColor: '#f7f3f1', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', color: '#666' }}>Ready to pack your bags?</h2>
  {/* <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $200 each!</p> */}
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Reserve a Double King</button>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Reserve a Double Queen</button>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Reserv a Double Sofa</button>
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

export default TherapistsConnect;
