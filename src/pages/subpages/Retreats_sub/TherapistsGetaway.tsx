import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TherapistsGetaway() {
  const backgroundImageUrl = 'src/assets/Retreats/TherapistsGetaway/Banner.webp';
  const image1Url = 'src/assets/Retreats/TherapistsGetaway/pool.webp';
  const image2Url = 'src/assets/Retreats/TherapistsGetaway/face.webp';
 
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></div>

      {/* Title and Subtitle */}
      <h1 style={{ fontSize: '2.5rem', color: '#5a93e4', fontStyle: 'italic', margin: '1rem 0' }}>
      Therapist Rest & Relaxation Getaway
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      Escape to Paradise and Recharge
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          Ignite your passion for helping others by rejuvenating yourself on a 
          'Therapist Rest & Relaxation Getaway' in Costa Rica. Join Lauren Larkin 
          to immerse yourself in a world of tranquility and rejuvenation as you 
          connect with fellow professionals, nurture your mind and body, and discover 
          the power of relaxation. Indulge in a variety of wellness activities including 
          invigorating yoga sessions, soothing massages, and rejuvenating facials. 
          Unwind by the pool, meditate in serene surroundings, or strengthen bonds 
          with your peers through engaging in group activities.
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
      <FaCalendarAlt color="#d4a05f" /> <strong>December 5 - 8, 2024</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Costa Rica
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Lauren Larkin
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $2999 Double-Occupancy
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
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Unwind and Recharge</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Connect With Like-Minded Therapists</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Treat Yourself to Relaxation</p>
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
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
    <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
    3-night stay at the
    <a href="https://www.riocelestehideaway.com/?gad_source=1&gclid=CjwKCAjwoJa2BhBPEiwA0l0ImIxl2WqN_zv-5tk93NioRnNlT-d5ypELcg_OEKB8_4pQnnjbnRJJtxoCdmoQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
    Hideaway Rio Celeste Hotel. 
    </a>
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Fun Group Activities
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Roundtrip Airport Transfers
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      {/* <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Roundtrip Airport Transfers
      </p> */}
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Plenty of time at leisure to rest, relax, and connect with other therapists
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Resort Fees
      </p>
      {/* <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Wellness & Art Workshops
      </p> */}
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
      {/* <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#e29b20', fontSize: '1.25rem', marginRight: '0.5rem' }}>✗</span>
        Airport Transfers
      </p> */}
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
        <a href="https://www.instagram.com/leltherapy/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold' }}>Lauren Larkin</a>, 
        is a licensed therapist based in New York City with a Masters Degree in Mental Health & Wellness. She is the founder of her private practice <a href="https://leltherapy.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontStyle: 'italic' }}>LEL Therapy</a>, 
        where she specializes in anxiety, eating disorders, relationship issues, and trauma.      </p>
      <p>
      On this retreat, Lauren invites therapists to take a well-deserved space for rejuvenation and connection in stunning Costa Rica. As a participant, you will return home refreshed, renewed, and with invaluable connections that will last a lifetime!      </p>
      {/* <p style={{ fontStyle: 'italic' }}>
        Are you ready to embark on a voyage of self-discovery, transformation, and creative and spiritual awakening? This retreat offers you the opportunity to rejuvenate your spirit and ignite your inner creativity.
      </p> */}
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/TherapistsGetaway/Host.webp"
      alt="Host Image"
      style={{ width: '40%', maxWidth: '400px', borderRadius: '8px', objectFit: 'cover' }}
    />
  </div>
</section>



{/* Preview of Itinerary */}
<section style={{ padding: '3rem', paddingBottom: '10rem', backgroundColor: '#f7f3f1' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#e29b20', fontWeight: '600', marginBottom: '2rem' }}>Preview of Itinerary</h2>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Each Day Card */}
    {[
      {
        day: 'Day One',
        morning: ['No morning activities'],
        afternoon: ['Check-In & Arrival'],
        evening: ['Dinner', 'Meet & Greet with Therapists']
      },
      {
        day: 'Day Two',
        morning: ['Breakfast', 'Mid-Morning Activity Options: Yoga, Massages, Facials, Relax by the Pool'],
        afternoon: ['Lunch', 'Eating Disorder Therapy 101 Workshop'],
        evening: ['Dinner']
      },
      {
        day: 'Day Three',
        morning: [ 'Breakfast', 'Mid-Morning Activities: Meditation, Group Bonding/Team Building '],
        afternoon: ['Lunch', 'Afternoon Workshop Activity Options: Yoga, Massage'],
        evening: ['Dinner']
      },
      {
        day: 'Day Four',
        morning: ['Return home renewed, refreshed, and with new invaluable friendships and connections!'],
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
<section style={{ padding: '3rem', paddingTop: '25px', backgroundColor: '#ffffff', maxWidth: '800px', margin: '0 auto' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#5a8dbf', fontWeight: '600', marginBottom: '2rem' }}>
    Frequently Asked Questions
  </h2>
  
  <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}>
    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>1. Will you assist me with my travel plans?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Absolutely! Your retreat participation includes our complimentary travel logistics services. 
    Please note that if you choose to have us arrange your flights, we kindly request that you secure 
    travel insurance. This is to safeguard your trip against unforeseen circumstances such as cancellations, 
    delays, or other unexpected events yet, it is not required should you decide to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. How will I get to the hotel from the airport?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    The retreat package includes roundtrip airport transfers and whether you choose to book your 
    flights through our services or make your own arrangements, we'll gladly coordinate your 
    transportation to perfectly align with your travel schedule.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. Will I share my room with someone else? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Immerse yourself in a unifying and enriching experience with our thoughtfully designed double 
    occupancy accommodations. Share your retreat journey with a fellow therapist, fostering 
    connections and creating lasting memories. For those seeking a more private haven, we're 
    pleased to offer single occupancy options as well. Simply reach out to our dedicated team 
    at retreats@onehundredavenues.com, and we'll gladly customize your retreat package, adjusting 
    the price to reflect your preferred accommodation choice.
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
    Cancellations made 15 days or more before your scheduled check-in date are eligible for a 
    refund, subject to applicable fees. However, due to our advance commitments for accommodations, 
    activities, transportation and retreat-related services, we regrettably cannot process refunds 
    for cancellations made within 14 days of the retreat start date. In the event of a refund approval, a 
    6% processing fee and a $100 cancellation fee will be deducted from your refunded amount.
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
  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $100 each!</p>
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Book With A Friend!</button>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Purchase Retreat</button>
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

export default TherapistsGetaway;
