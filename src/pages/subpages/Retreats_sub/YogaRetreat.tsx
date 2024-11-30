import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function YogaRetreat() {
  const backgroundImageUrl = 'src/assets/Retreats/YogaRetreat/Banner.webp';
  const image1Url = 'src/assets/Retreats/YogaRetreat/Face.webp';
  const image2Url = 'src/assets/Retreats/YogaRetreat/sit.webp';
 
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
      <h1 style={{ fontSize: '2.5rem', fontStyle: 'italic', color: '#5a93e4', margin: '1rem 0' }}>
      New Year’s Manifest & Reset Yoga Retreat
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      Reset, Renew, Recenter, and Recharge
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          Activate your most magnetic year at the <span style={{ color: '#e29b20' }}> “Manifest and Reset” New Year’s Yoga Retreat </span> 
      in breathtaking 
      <span style={{ color: '#e29b20' }}> Riviera Maya </span>. Start 2025 with a transformative 
          journey of renewal, aligning your body and mind with your deepest dreams and goals. 
          Immerse yourself in the art of flow with yoga and meditation sessions set in lush tropical surroundings.
          </p>
          <p>
          Learn the art of manifesting your desires through insights from neuroscience and biomechanics. 
          Plan your year between pampering yourself with invigorating walks, soothing massages, and rejuvenating 
          facials. Renew your focus, reset your intentions, and recharge your energy for a year of remarkable achievements!
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
      <FaCalendarAlt color="#d4a05f" /> <strong>January 10 - 13, 2025</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Riviera Maya, Mexico
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Shakara Zulu
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $2799 Single-Occupancy
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
            
 
          }}>
            <p>
  <strong style={{fontStyle: 'italic', color: '#e29b20' }}>Who is this retreat for?</strong>
</p>
<p>
            Goal-oriented individuals wanting to align their 
            mind and body with their aspirations and seeking a 
            transformative start to 2025!
            </p>
          </div>
</div>
 </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Give love to your body and center your mind

</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Reset and recharge in nature</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Deepen your understanding of manifestation</p>
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
    3-night stay at
    <a href="https://www.akumalbayresort.com/website/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
    Akumal Bay Beach & Wellness Resort
    </a>- All Inclusive. 
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Daily breakfast, lunch and dinners
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Wellness Workshops
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Resort Fees
      </p>
      {/* <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Art Supplies
      </p> */}
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        All beverages
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Roundtrip airport transportation
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
        <a href="https://www.instagram.com/zuluisms/" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Shakara Z</a>, 
        is a content creator and mental wellness coach specializing in self-development for creatives. 
        With insights from neuroscience and biomechanics, she teaches how mindfulness practices like yoga and 
        meditation can harness inner power and manifest your dream life. She approaches her work with a 
        “You can do it!” attitude. She specializes in trauma-informed in yoga and yoga nidra, supporting individuals 
        navigating anxiety, depression, ADHD, and difficult transitions.      </p>
      <p>
      On this retreat, ShaKara will take you through several dynamic mindfulness practices 
      to set focused intentions and prepare your mind and body for a bountiful New Year. 
      As a participant, you will return home rejuvenated, and confident in your action 
      plan for 2025, with restorative practices to continue in your personal time.      </p>
    
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/YogaRetreat/Host.webp"
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
        morning: ['Check-in & Arrival (3pm): Arrive at the retreat and make yourself comfortable in your luxurious accommodation'],
        afternoon: ['Welcome and Introduction: Meet other participants and get acquainted with our retreat plan' ,'Group Dinner & Mingle: Enjoy a delicious meal with fellow retreat participants'],
        evening: ['No evening activities']
      },
      {
        day: 'Day Two',
        morning: ['Reset & Recharge: Sunrise yoga and visualization on the beach', 'Breakfast: Enjoy a delicious meal at your leisure'],
        afternoon: ['Leisure time: Spend time relaxing at the beach, getting pampered at the spa, hanging out by the pool, or exploring with a tour or excursion'],
        evening: ['The Art & Science of Manifestation Workshop: Learn the science behind manifestation with insights from neuroscience, physics, and behavioral science. Gain a greater understanding of your mind and bodys influence on your life.', 'Dinner: Enjoy a delicious meal at your leisure']
      },
      {
        day: 'Day Three',
        morning: [ 'Breakfast: Choose a delicious dining experience at your leisure', '2025 Intentional Planning Workshop: Learn to plan your year like the experts and get more done in 12-weeks than some get done in a whole year! We will also be exploring my unique approach to “vision boards”'],
        afternoon: ['Leisure time: Spend time relaxing at the beach, getting pampered at the spa, hanging out by the pool, or exploring with a tour or excursion'],
        evening: ['Sunset Yoga & Meditation: Learn how to infuse the frequency of your desired reality into your yoga and meditation practice', 'Dinner: Enjoy a delicious meal at your leisure']
      },
      {
        day: 'Day Four',
        morning: ['Yoga Flowography Session: Learn a fun, and dynamic flow to take home with you!'],
        afternoon: ['Check out & Departures: Depart with a renewed sense of your own power and the confidence to make 2025 your most productive and abundant year yet!'],
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
    Absolutely! Your retreat participation includes our complimentary travel logistics services. Please note that if you choose to have us arrange your 
    flights, we kindly request that you secure travel insurance. This is to safeguard your trip against unforeseen circumstances such as cancellations, delays, 
    or other unexpected events yet, it is not required should you decide to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. How will I get to the hotel from the airport?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    The retreat package includes roundtrip airport transfers and whether you choose to book 
    your flights through our services or make your own arrangements, we'll gladly coordinate your 
    transportation to perfectly align with your travel schedule.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. Will I share my room with someone else? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    This retreat provides the comfort of private, single-occupancy rooms, ensuring a personal 
    sanctuary for each guest. However, should you wish to travel with a friend and share a room, 
    please contact us at retreats@onehundredavenues.com, and we'll be pleased to offer you a 
    special discounted rate for your shared reservation.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. Can you accommodate dietary restrictions and/or food allergies? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Of course! Once your participation is confirmed, our dedicated team will personally 
    reach out to you to gather important details about your dietary needs.This information 
    will be carefully communicated to our partnering hotel, ensuring that your culinary 
    experience throughout the retreat is not only safe but also delightful.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>5. What happens if I need to cancel my participation?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    We understand that plans can change, which is why we offer a flexible cancellation policy. 
    Cancellations made 15 days or more before your scheduled check-in date are eligible for a refund, 
    subject to applicable fees. However, due to our advance commitments for accommodations, activities, 
    transportation and retreat-related services, we regrettably cannot process refunds for cancellations 
    made within 14 days of the retreat start date. In the event of a refund approval, a 6% processing fee and a $100 cancellation fee will be deducted from your refunded amount.
    </p>
    <p style={{ marginBottom: '1.5rem' }}>
      Additionally, a private chat group will be set up closer to the retreat date where you can connect with fellow participants.
      This will be a great space to share tips, coordinate plans, and get to know each other before we meet in Sedona. Don’t miss
      this extraordinary opportunity to connect with your inner self in one of the most magical places on Earth.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>6. What happens if my retreat host decides to cancel?</h3>
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

export default YogaRetreat;
