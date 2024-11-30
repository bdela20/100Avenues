import React from 'react';
import { Link } from 'react-router-dom';

function ArtBreathwork() {
  const backgroundImageUrl = 'src/assets/Retreats/ArtBreathwork/Banner.webp';
  const image1Url = 'src/assets/Retreats/ArtBreathwork/Face.webp';
  const image2Url = 'src/assets/Retreats/ArtBreathwork/body.webp';
 
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
        The Life Artists Retreat
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#e29b20', fontStyle: 'italic', marginBottom: '2rem' }}>
        Embark on a Journey of Self-Discovery and Healing
      </h2>

      {/* Content and Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '0 1rem' }}>
        {/* Main Content */}
        <div style={{ maxWidth: '500px', textAlign: 'left', lineHeight: '1.6' }}>
          <p>
            Here’s the truth: We’re ALL artists who get to live a colourful, creative life.
            Your life isn’t meant to feel stale or boring. You’re not meant to feel burnt out
            or drained. You’re meant for so much more, and your soul has SO much aliveness it
            wants to crack open to - <i>this retreat is where you’ll learn how to access this
            incredible part of you!</i>
          </p>
          <p>
            Join <strong>Jade Chung</strong>, for an enchanting journey on ‘The Life Artists Retreat’,
            nestled amid the majestic Red Rocks of Sedona for 5 days of powerful energy healing with
            somatic liberation, expressive arts therapy, therapeutic practices, holistic wellness,
            adventurous excursions... all in the most sacred energy vortex in the world!
          </p>
          <p>
            If you’ve been craving a potent healing space to really go deep into your heart, if you’re
            ready to liberate all the old patterns and stuff that’s holding you back, and completely
            expand your life energetically and emotionally - this is for you.
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
          }}>
            <p><strong>November 1 - 5, 2024</strong></p>
            <p>Sedona, Arizona</p>
            <p>Jade Chung</p>
            <p>$2450 Double-Occupancy</p>
            <p>$2800 Single-Occupancy</p>
            <p><i>*Installment payments available</i></p>
          </div>

          {/* Who Is This Retreat For Card */}
          <div style={{
             border: '2px solid #5a93e4',
            borderRadius: '10px',
            padding: '1rem',
            maxWidth: '250px',
            textAlign: 'left',
          }}>
            <p><strong>Who is this retreat for?</strong></p>
            <p>
              This is for the woman who's ready for a retreat that's beyond the basic wellness stuff.
              Expect to leave feeling awakened in every cell of your body and grounded in the powerful
              woman you are.
            </p>
          </div>
        </div>
      </div>

      {/* Photo and Text Section */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
  {/* Left Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Rediscover Yourself Through Art</p>
  </div>

  {/* First Image */}
  <div style={{ flex: 1 }}>
    <img src={image1Url} alt="Art Expression" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Center Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Ignite Your Spirit with Art and Meditation</p>
  </div>

  {/* Second Image */}
  <div style={{ flex: 1 }}>
    <img src={image2Url} alt="Art and Meditation" style={{ width: '100%', borderRadius: '10px' }} />
  </div>

  {/* Right Text */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '2rem' }}>
    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', color: '#333' }}>Somatic Journey Through Self-expression</p>
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
        4-night stay at Poco Diablo Resort in Sedona, a serene sanctuary just a short walk away 
        from sacred sites and only a 10-minute drive from the vibrant heart of the town
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Daily Breakfast, Lunch, and Dinner (as a resort credit)
      </p>
    </div>
    
    {/* Second Column */}
    <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8', maxWidth: '400px' }}>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Hiking Excursions
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Art Supplies
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        On-Property Resort Fees
      </p>
      <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: '#5a93e4', fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
        Wellness & Art Workshops
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
        Airport Transfers
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
        <a href="https://www.jadechunghealing.com/links" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 'bold' }}>Jade Chung</a>, 
        also known as <a href="https://www.instagram.com/itsjadechung/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontStyle: 'italic' }}>ItsJadeChung</a>, 
        is a mentor, an art connoisseur, and specializes in practicing trauma somatics. With a deep-rooted passion for human connection and artistic expression, she has dedicated her life to guiding individuals on their journeys of self-discovery and healing.
      </p>
      <p>
        This retreat is not merely an "escape" from daily life but a profound immersion into your true Self. By the end of our time together, you’ll emerge transformed—a radiant woman ready to infuse your heart, fire, and artistic spirit into every facet of your life. Jade will help you integrate your newfound insights into your daily life, so you can return home as a beam of light, bubbling with renewed passion and creativity.
      </p>
      <p style={{ fontStyle: 'italic' }}>
        Are you ready to embark on a voyage of self-discovery, transformation, and creative and spiritual awakening? This retreat offers you the opportunity to rejuvenate your spirit and ignite your inner creativity.
      </p>
    </div>
    
    {/* Image Section */}
    <img
      src="src/assets/Retreats/ArtBreathwork/Host.webp"
      alt="Host Image"
      style={{ width: '40%', maxWidth: '400px', borderRadius: '8px', objectFit: 'cover' }}
    />
  </div>
</section>



{/* Cards */}
<section style={{ padding: '3rem', backgroundColor: '#f7f3f1', }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', gap: '1rem' }}>
    {/* Card 1 */}
    <div style={{
      flex: '2',
      textAlign: 'center',
      padding: '1.5rem',
      height: '250px',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3 style={{ color: '#4a90e2', fontSize: '1.1rem', fontWeight: '600' }}>Gain Clarity</h3>
      <p style={{ fontStyle: 'italic', color: '#4a4a4a', margin: '0.5rem 0 0' }}>Illuminate your purpose and life direction with newfound insight.</p>
    </div>

    {/* Card 2 */}
    <div style={{
      flex: '2',
      textAlign: 'center',
      padding: '1.5rem',
      height: '250px',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3 style={{ color: '#4a90e2', fontSize: '1.1rem', fontWeight: '600' }}>Cultivate Self-Belief and Confidence</h3>
      <p style={{ fontStyle: 'italic', color: '#4a4a4a', margin: '0.5rem 0 0' }}>Empower yourself with deepened self-esteem and assurance.</p>
    </div>

    {/* Card 3 */}
    <div style={{
      flex: '2',
      textAlign: 'center',
      padding: '1.5rem',
      height: '250px',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3 style={{ color: '#4a90e2', fontSize: '1.1rem', fontWeight: '600' }}>Nurture Self-Love</h3>
      <p style={{ fontStyle: 'italic', color: '#4a4a4a', margin: '0.5rem 0 0' }}>Reconnect with your essence and shower yourself with compassion.</p>
    </div>

    {/* Card 4 */}
    <div style={{
      flex: '2',
      textAlign: 'center',
      padding: '1.5rem',
      height: '250px',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3 style={{ color: '#4a90e2', fontSize: '1.1rem', fontWeight: '600' }}>Open Your Heart</h3>
      <p style={{ fontStyle: 'italic', color: '#4a4a4a', margin: '0.5rem 0 0' }}>Embrace vulnerability and emotional depth with openness.</p>
    </div>

    {/* Card 5 */}
    <div style={{
      flex: '2',
      textAlign: 'center',
      padding: '1.5rem',
      height: '250px',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3 style={{ color: '#4a90e2', fontSize: '1.1rem', fontWeight: '600' }}>Ignite Your Inner Fire</h3>
      <p style={{ fontStyle: 'italic', color: '#4a4a4a', margin: '0.5rem 0 0' }}>Unleash the vibrant passion and energy that makes you shine brightly.</p>
    </div>
  </div>
</section>

{/* Preview of Itinerary */}
<section style={{ padding: '3rem', backgroundColor: '#f7f3f1' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#e29b20', fontWeight: '600', marginBottom: '2rem' }}>Preview of Itinerary</h2>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
    {/* Each Day Card */}
    {['Day One', 'Day Two', 'Day Three', 'Day Four', 'Day Five'].map((day, index) => (
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
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Morning</h4>
          <ul style={{ paddingLeft: '1rem', color: '#666' }}>
            <li>Morning Activity 1</li>
            <li>Breakfast</li>
            <li>Session/Workshop</li>
          </ul>
        </div>

        {/* Afternoon Section */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Afternoon</h4>
          <ul style={{ paddingLeft: '1rem', color: '#666' }}>
            <li>Afternoon Activity 1</li>
            <li>Lunch</li>
            <li>Session/Workshop</li>
          </ul>
        </div>

        {/* Evening Section */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem', color: '#e29b20' }}>Evening</h4>
          <ul style={{ paddingLeft: '1rem', color: '#666' }}>
            <li>Dinner</li>
            <li>Evening Activity 1</li>
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>



{/* VIP SECTION */}
<section style={{ padding: '3rem', backgroundColor: '#f7f3f1' }}>
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Image Section */}
      <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="src/assets/Retreats/ArtBreathwork/VIP.webp" 
          alt="VIP session with Jade" 
          style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
        />
      </div>
      
      {/* Text Section */}
      <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#e29b20', fontWeight: '600', marginBottom: '1.5rem' }}>
          Opportunities to add on exclusive VIP sessions with Jade!
        </h2>
        <p style={{ maxWidth: '600px', color: '#333', lineHeight: '1.6', fontSize: '1rem' }}>
          Elevate your retreat experience with bespoke 60-minute healing and coaching sessions. These VIP sessions provide
          intimate, personalized bodywork and emotional processing to support your unique journey and cater even more deeply
          to your individual needs and goals.
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
    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>1. How do I get to Sedona from the airport?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      For those flying in, the nearest major airport is Phoenix Sky Harbor International Airport (PHX). Sedona is approximately
      a 2-hour drive from Phoenix. You can arrange a rental car, or we can assist you with transportation options, including
      shuttles and private transfers.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>2. What if I'm traveling internationally?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      If you’re traveling internationally, we recommend arriving in Phoenix a day before the retreat begins to accommodate
      any potential travel delays and adjust to the time zone. Please check visa requirements and travel advisories for the U.S.
      ahead of your trip.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>3. Can you accommodate dietary preferences or restrictions?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      Absolutely! We aim to cater to a range of dietary preferences and restrictions. Please inform us of your specific dietary
      needs upon registration, and we will ensure that there will be delicious options for you for every meal. Whether you have
      allergies, are vegetarian, vegan, or have other dietary requirements, we are here to support you!
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>4. What is the weather like in Sedona in November?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      In November, Sedona enjoys mild and pleasant weather. Expect daytime temperatures to range from the mid-50s to mid-60s °F
      (10-20 °C), with cooler evenings. It’s a good idea to bring layers to adjust to varying temperatures and a light jacket
      for the cooler evenings. The crisp air and clear skies make it a wonderful time for outdoor activities and exploration.
    </p>

    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#5a8dbf', fontStyle: 'italic' }}>5. What should I bring and what should I wear?</h3>
    <p style={{ marginBottom: '1.5rem' }}>
      A detailed guide on what to bring and wear will be provided ahead of time to help you prepare. Generally, you'll want to
      bring comfortable clothing suitable for both indoor and outdoor activities, layers for varying temperatures, and any
      personal items you may need for relaxation and self-care. For our artsy sessions, we recommend bringing items you feel
      comfortable wearing or painting on.
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



{/* Room Options Section */}
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
</section>

{/* Booking Section */}
<section style={{ padding: '2rem', backgroundColor: '#f7f3f1', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', color: '#666' }}>Ready to pack your bags?</h2>
  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>For a limited time, book this amazing experience with a friend and save $200 each!</p>
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto', marginBottom: '2rem' }}>
    <button style={{ backgroundColor: '#e29b20', color: '#ffffff', padding: '0.8rem', border: 'none', borderRadius: '5px', fontWeight: '600', fontStyle: 'italic' }}>Book With A Friend!</button>
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

export default ArtBreathwork;
