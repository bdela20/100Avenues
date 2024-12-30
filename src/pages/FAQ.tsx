import React from 'react'; 

const FAQ = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        style={{
          backgroundImage: 'url(src/assets/FAQ/Banner.jpg)', // Update the path to your banner image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '250px 0',
          color: '#fff',
          textAlign: 'center',
          
        }}
      >
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'Avenir', fontWeight: 'bold' }}>
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#fff',
          padding: '60px 0',
        }}
      >
        <div style={{ display: 'flex', maxWidth: '1200px', width: '100%' }}>
          {/* Left Title Section */}
          <div style={{ flex: '0 0 30%', paddingRight: '20px' }}>
            <h2
              style={{
                fontSize: '3.5rem',
                fontFamily: 'Avenir',
                color: '#28a745',
                lineHeight: '1.2',
                margin: 0,
              }}
            >
              Frequently <br /> Asked <br /> Questions
            </h2>
          </div>

          {/* Right Questions Section */}
          <div style={{ flex: '1' }}>
            {/* Single FAQ */}
            {[
              {
                question: 'Do you charge for providing tree service estimates?',
                answer:
                  'No, we provide FREE estimates for all tree services.',
              },
              {
                question: 'How is The Tree Removal Specialist different from other tree service companies?',
                answer:
                  'The Tree Removal Specialist stands out from other tree service companies due to our commitment to environmentally-friendly practices, our extensive experience in the industry, and our dedication to exceeding customer expectations on every job.',
              },
              {
                question: 'What services do you provide?',
                answer:
                  'The Tree Removal Specialist offers a wide range of tree services including tree trimming, tree removal, stump grinding, tree fertilization, and emergency tree services.',
              },
              
            ].map((item, index) => (
              <details key={index} style={{ borderTop: '1px solid #ccc', padding: '20px 0' }}>
                <summary
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '300',
                    color: '#333',
                  }}
                >
                  {item.question}
                  <span style={{ fontSize: '2rem', fontWeight: '300', color: '#333' }}>+</span>
                </summary>
                <p style={{ marginTop: '10px', fontSize: '1rem', color: '#555', lineHeight: '1.5' }}>
                  {item.answer}
                </p>
              </details>
            ))}
            {/* Final bottom border */}
            <div style={{ borderTop: '1px solid #ccc' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
