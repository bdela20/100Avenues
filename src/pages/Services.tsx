import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/Services/Banner.jpg';
// import little2 from '../assets/Travel/little2.jpeg';
import treeRemovalImage from '../assets/Services/TreeRemoval.jpg'; // New image import for Tree Removal
import treeTrimmingImage from '../assets/Services/TreeTrimming.webp' // New image import for Tree Trimming
import stumpRemovalImage from '../assets/Services/StumpRemoval.jpg'; // New image import for Stump Removal
import fallSpringImage from '../assets/Services/FallClean.jpg'; // New image import for Fall and Spring Clean Up
import emergencyImage from '../assets/Services/EmergencyTree.jpg'// New image import for Emergency Services
import landClearingImage from '../assets/Services/landclearing.avif'; // New image import for Land Clearing

function Services() {
  return (
    <div style={{ fontFamily: "Avenir", }}>
      {/* Banner Section */}
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          zIndex: -50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Dark overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the opacity as needed
      zIndex: 1,
    }}
  ></div>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1
            style={{
              fontFamily: "Avenir",
              fontSize: '3.5rem',
              marginBottom: '.5rem',
              fontWeight: 'bold',
            }}
          >
            Services we provide
          </h1>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
          Open 7 Days A Week
          </p>
        </div>
      </div>







      {/* Travel Packages Section */}
      <div style={{ padding: '4rem 2rem' }}>



        {/* Package 1: Tree Removal */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={treeRemovalImage}
              alt="Tree Removal"
              style={{
                width: '80%',
                height: '100%',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Tree Removal</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem',fontFamily: "Avenir", }}>
            Tree removal is a crucial service that involves the careful and safe elimination 
            of trees that may pose a risk to property, people, or the surrounding environment. 
            Whether due to disease, structural instability, or the need to clear space for new 
            construction, professional tree removal ensures that the process is conducted with 
            precision and expertise. Arborists utilize specialized equipment and techniques to 
            minimize damage to the surrounding landscape, while also adhering to local regulations 
            and safety standards. By opting for tree removal, property owners can enhance the 
            safety and aesthetic appeal of their outdoor spaces, fostering healthier ecosystems 
            and promoting responsible land management.
            </p>

          </div>
        </div>







        {/* Package 2: Tree Trimming */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem', flexDirection: 'row-reverse' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={treeTrimmingImage}
              alt="Tree Trimming"
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Tree Trimming</span>
            </h2>
            <p style={{ fontSize: '1rem', fontFamily: "Avenir", lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Tree trimming is an essential horticultural practice that involves the 
            selective removal of certain branches and foliage to promote the health, 
            safety, and aesthetic appeal of trees. This process helps to enhance the 
            tree's structure by eliminating dead or diseased branches, which can 
            prevent the spread of pests and diseases. Additionally, regular trimming
             encourages new growth and improves air circulation and sunlight penetration, 
             contributing to a more robust and vibrant canopy. Homeowners and landscapers 
              seek professional tree trimming services to ensure that the job is done safely 
              and effectively, allowing trees to flourish while maintaining their natural 
              beauty and enhancing the overall landscape.
            </p>

          </div>
        </div>




        {/* Package 3: Stump Removal */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={stumpRemovalImage}
              alt="Stump Removal"
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Stump Removal</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Stump removal is a vital service that involves the complete extraction of tree stumps 
            from the ground after a tree has been cut down. This process not only eliminates unsightly 
            remnants of trees but also prevents potential hazards, such as tripping or damage to 
            lawn equipment. Stump removal can be achieved through various methods, including grinding, 
            which reduces the stump to mulch, or complete excavation, which removes the stump and 
            roots entirely. By opting for professional stump removal, property owners can reclaim 
            valuable space in their yards, enhance the aesthetic appeal of their landscapes, and 
            promote healthy growth for new plants or trees. Additionally, removing stumps helps 
            prevent pest infestations and the regrowth of unwanted trees, ensuring a cleaner and 
            safer outdoor environment.
            </p>

          </div>
        </div>




        {/* Package 4: Fall and Spring Clean Up */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem', flexDirection: 'row-reverse' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={fallSpringImage}
              alt="Fall and Spring Clean Up"
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Fall and Spring Clean Up</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Fall and spring cleanup are essential seasonal services that focus on preparing 
            and maintaining outdoor spaces for optimal health and aesthetics. In the fall, 
            cleanup involves removing fallen leaves, debris, and dead plant material, which 
            can help prevent pests and diseases from overwintering and promote a healthier
             landscape for the following season. It may also include tasks like pruning 
             trees and shrubs, mulching, and preparing gardens for winter dormancy. Conversely, 
             spring cleanup revitalizes outdoor areas by clearing away winter debris, trimming 
             back perennials, and reestablishing flower beds and lawns. These services not only 
             enhance the visual appeal of gardens and yards but also support healthy growth and 
             development for plants, ensuring that your outdoor spaces flourish throughout the year. 
             Engaging professional cleanup services can save time and effort while providing expert care to your landscape.
            </p>

          </div>
        </div>




        {/* Package 5: Emergency Services */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={emergencyImage}
              alt="Emergency Services"
              style={{
                width: '90%',
                height: 'auto',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Emergency Services</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Tree emergency services are critical for addressing urgent situations 
            involving hazardous trees or fallen branches that pose immediate risks 
            to safety and property. These services are often required after severe 
            weather events, such as storms or high winds, which can lead to tree damage 
            or collapse. Trained arborists respond quickly to assess the situation, 
            ensuring that any dangerous limbs or uprooted trees are safely removed to 
            prevent injury or further damage. In addition to removal, emergency services 
            may include securing unstable trees, providing preventative care, and advising 
            homeowners on how to mitigate future risks. By relying on professional tree 
            emergency services, property owners can ensure swift and effective responses to
             tree-related emergencies, safeguarding their homes and maintaining the integrity of their landscapes.
            </p>

          </div>
        </div>



        {/* Package 6: Land Clearing */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '4rem 0', gap: '2rem', flexDirection: 'row-reverse' }}>
          {/* Image Section */}
          <div style={{ position: 'relative', flex: '1' }}>
            <img
              src={landClearingImage}
              alt="Land Clearing"
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                position: 'relative',
              }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "Avenir", fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>Land Clearing</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '1rem' }}>
            Land clearing is a comprehensive process that involves the removal of trees, shrubs, 
            brush, and other vegetation from a designated area to prepare the land for construction, 
            agriculture, or landscaping projects. This essential service is often necessary for 
            creating space for new buildings, roads, or recreational areas, as well as for improving 
            access to property. Professional land clearing utilizes specialized equipment and techniques 
            to efficiently remove unwanted flora while minimizing disruption to the surrounding ecosystem. 
            The process may also involve debris removal and site grading to ensure a clean and level 
            foundation for future development. By engaging experienced land clearing services, property
             owners can effectively transform their land, ensuring it is ready for its intended use while 
             promoting responsible land management practices.
            </p>

          </div>
        </div>


         {/* New Section at the End */}
      <div
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          marginTop: '4rem',
          borderTop: '2px solid #dee2e6',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontFamily: 'Avenir',
          }}
        >
          Why Choose Our Services?
        </h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
          Our team of experts is dedicated to delivering top-notch services tailored to your needs. 
          With years of experience and a passion for excellence, we ensure every project is completed 
          with precision and care. From tree removal to emergency services, we prioritize safety, 
          efficiency, and customer satisfaction.
        </p>
        <Link
          to="/Contact"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Contact Us Today
        </Link>
      </div>

      </div>
    </div>
  );
}

export default Services;
