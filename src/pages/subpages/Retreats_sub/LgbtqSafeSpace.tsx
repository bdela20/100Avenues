import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LgbtqSafeSpace() {
  const backgroundImageUrl = 'src/assets/Retreats/LGBTQ/Banner~mv2.webp';
  const image1Url = 'src/assets/Retreats/LGBTQ/faces.webp';
  const image2Url = 'src/assets/Retreats/LGBTQ/yoga.webp';
 
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
      Mountain Moments: A Couples Getaway
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
      Explore love, adventure, and laughter together in the mountains of North Carolina
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
          <p>
          Take a break from the everyday and rediscover each other 
          on our <span style={{ color: '#e29b20' }}>'Mountain Moments: A Couples Getaway'</span> in the scenic mountains of <span style={{ color: '#e29b20' }}>North Carolina</span>. 
          Join <span style={{ color: '#e29b20' }}>Kelly Minter</span> and other LGBTQIA+ or mixed orientation couples for a weekend of 
          adventure, laughter, and connection with your partner, all while surrounded by breathtaking nature.
          </p>
          </p>
          <p>
          From group sessions designed to strengthen your bond mixed in with plenty of time just you and your loved one, 
          to playful activities and peaceful moments of reflection, this retreat offers the perfect blend of fun and healing.
          Unplug, unwind, and create lasting memories as you explore love and togetherness in a way that feels authentic and refreshing.
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
      <FaCalendarAlt color="#d4a05f" /> <strong>March 6 - 9,  2025</strong>
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaMapMarkerAlt color="#d4a05f" /> Pigsah Forest, NC
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaUser color="#d4a05f" /> Kelly Minter
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <FaTag color="#d4a05f" /> $1555 per couple
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
            Designed for LGBTQIA+ or mixed orientation couples seeking to strengthen their bond in a supportive setting.
            </p>
          </div>
</div>

      </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Escape and relax in the mountains</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}> Reconnect together</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Spend time with other LGBTQIA+ couples</p>
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
    3-night stay at
    <a href="https://elcaminantehotel.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold', marginLeft: '0.5rem' }}>
    Pilot Cove
    </a> in Asheville. 
    </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Couple's Workshops and fun activities 
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        On-property resort fees
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Breakfast credit 
      </p>
      {/* <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        On-Property Resort Fees
      </p> */}
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
        Transportation
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#e29b20', fontSize: '1.25rem', marginRight: '0.5rem' }}>✗</span>
        Lunch and Dinner
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
      <h2 style={{ fontSize: '2rem', color: '#4a90e2',fontStyle:'italic', fontWeight: '600', marginBottom: '2rem' }}>Meet your incredible host!</h2>
      <p>
        <a href="https://www.instagram.com/askaqueertherapist/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Kelly R Minter</a>, 
        is a Licensed Mental Health Counselor based out of St Augustine Florida. 
        She is the owner of <a href="https://www.anchoredcounselingfl.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Anchored Counseling</a> and also 
        publishes the YouTube Channel <a href="https://www.youtube.com/@KellyRMinter" target="_blank" rel="noopener noreferrer" style={{ color: '#e29b20', textDecoration: 'none', fontWeight: 'bold' }}>Ask A Therapist</a>. 
        Her specialties are LGBTQIA+ Relationships and Recovery from Religion.
      </p>
      <p>
      On this retreat, Kelly invites couples to break away from their everyday 
      lives and spend some slower paced time in the mountains together. You will 
      go home refreshed, reconnected, and re engaged in one another.       </p>
      
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/LGBTQ/host.webp"
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
        afternoon: ['3PM: Check in and arrival'],
        evening: ['6PM: Meet & Greet in Kelly’s Cabin']
      },
      {
        day: 'Day Two',
        morning: ['Breakfast in town on your own', 'Session 1: Rekindling Connection', 'Spend time with your partner and explore','' ],
        afternoon: ['Lunch together at your leisure', 'Session 2: Healing the Past'],
        evening: ['Dinner with your partner ']
      },
      {
        day: 'Day Three',
        morning: [ 'Group Breakfast in Town', 'Session 3: Adventure and Play','Time to explore together'],
        afternoon: ['Group Activity ','Session 4: Looking Forward and closing out our weekend with art therapy options from Brittany Deutch'],
        evening: ['Dinner with your partner','The evening is yours to spend together']
      },
      {
        day: 'Day Four',
        morning: ['Breakfast and check out'],
        afternoon: ['No  afternoon activities'],
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



{/* VIP SECTION */}
<section style={{ padding: '3rem', backgroundColor: '#f7f3f1' }}>
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Image Section */}
      <div style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="src/assets/Retreats/LGBTQ/VIP.webp" 
          alt="VIP session with Jade" 
          style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
        />
      </div>
      
      {/* Text Section */}
      <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#e29b20', fontWeight: '600',fontStyle: 'italic', marginBottom: '1.5rem' }}>
        Opportunities to add on exclusive VIP sessions with Kelly!
        </h2>
        <p style={{ maxWidth: '600px', color: '#333', lineHeight: '1.6', fontSize: '1rem' }}>
        Elevate your retreat experience with private intensive sessions with Kelly. 
        These sessions will be specific to things you and your partner want to work 
        on in your relationship and can be purchased in 50 or 90 min lengths. These 
        sessions can provide deeper understanding of what to work on in your relationship 
        nd can accelerate healing for people in relationships. 
        </p>
      </div>
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
    Absolutely! Your retreat participation includes our complimentary travel logistics services. 
    Please note that if you choose to have us arrange your flights, we kindly request that you secure travel 
    insurance. This is to safeguard your trip against unforeseen circumstances such as cancellations, delays, 
    or other unexpected events yet, it is not required should you decide to book your own flights.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. Can you accommodate dietary restrictions and/or food allergies?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Of course! Once your participation is confirmed, our dedicated team will personally reach 
    out to you to gather important details about your dietary needs.This information will 
    be carefully communicated to our partnering hotel, ensuring that your culinary experience 
    throughout the retreat is not only safe but also delightful.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. What happens if I need to cancel my participation?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    We understand that plans can change, which is why we offer a flexible cancellation policy. Cancellations made 
    15 days or more before your scheduled check-in date are eligible for a refund, subject to applicable fees. 
    However, due to our advance commitments for accommodations, activities, transportation and retreat-related 
    services, we regrettably cannot process refunds for cancellations made within 14 days of the retreat start date. 
    In the event of a refund approval, a 6% processing fee and a $100 cancellation fee will be deducted from your refunded amount.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. What happens if my retreat host decides to cancel?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Occasionally, unforeseen circumstances may force a retreat host to cancel the retreat. While such instances are uncommon, 
    we're committed to providing you with flexible options should they occur. You may request a full refund of your payment, noting that while 
    there will be no cancellation fee, a 6% processing fee (included in your original payment) is non-refundable and will be deducted from your refund 
    amount. Alternatively, you can choose to convert your paid amount into a vacation credit, and our dedicated team would be delighted to work closely 
    with you to redesign an enjoyable travel experience that meets your preferences. Rest assured, in the event of a host-initiated cancellation, our 
    priority is to minimize any inconvenience and ensure your satisfaction.​
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>5. What is the weather like in the Mountains of North Carolina in March? </h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Weather in the mountains in March is likely to be cool
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>6. How should I prepare for the Retreat?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    You can best prepare for the retreat by focusing on your relationship 
    now. What are you seeing that you like? What are you seeing that you want to work on?
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>7. Will I get some free time to pencil in my own activities such as going to the spa etc.?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    You will have quite a bit of free time. Each of the group activities are designed to 
    be 70 minutes long plus question time at the end, and the rest of the time is yours. 
    You are encouraged to take advantage of the area with your loved one!
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>8. Is there a discount for bringing in a referral?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
    Not on this retreat, as it is our first. Come to our second retreat, though, and there will be!
    </p>
    <p style={{ color: '#333', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>
      Should you have any other questions prior to booking your participation, please feel free to reach out to us at
      <a href="mailto:retreats@onehundredandseven.com" style={{ color: '#5a8dbf', textDecoration: 'none', fontWeight: '600' }}>
        retreats@onehundredandseven.com
      </a>.
    </p>
  </div>
</section>



{/* Room Options Section
<section style={{ padding: '3rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', color: '#e29b20', fontWeight: '600', marginBottom: '2rem' }}>OFFERING TWO ROOM OPTIONS</h2>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', minWidth: '280px' }}>
      <h3 style={{ color: '#5a8dbf', fontWeight: '600' }}>SINGLE ROOMS</h3>
      <p style={{ color: '#666', lineHeight: '1.8' }}>Delight in your own private haven. Perfect for those seeking solitude and introspection, these rooms offer a tranquil retreat to enhance your experience.</p>
    </div>
    
    <div style={{ borderLeft: '1px solid #5a8dbf', height: '100px', margin: '0 2rem' }} />

    <div style={{ flex: '1', minWidth: '280px' }}>
      <h3 style={{ color: '#5a8dbf', fontWeight: '600' }}>DOUBLE OCCUPANCY ROOMS</h3>
      <p style={{ color: '#666', lineHeight: '1.8' }}>Share this extraordinary journey with a friend in a room designed for comfort and connection. These spacious accommodations invite shared reflections and meaningful conversations.</p>
    </div>
  </div>
</section> */}

{/* Booking Section */}
<section style={{ padding: '2rem', backgroundColor: '#f7f3f1', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', color: '#666' }}>Ready to pack your bags?</h2>
  {/* <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $200 each!</p> */}
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Purchase Retreat</button>
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

export default LgbtqSafeSpace;
