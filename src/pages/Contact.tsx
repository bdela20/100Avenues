// Import necessary dependencies
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // State for form data and success message
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    message: string;
    services: string[]; // Explicitly define the type for `services`
  }>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    message: '',
    services: [],
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const services = checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return { ...prevData, services };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'freelancer', // Replace with your EmailJS service ID
        'TreeRemovalSpecialist', // Replace with your EmailJS template ID
        {
          ...formData,
          services: formData.services.join(', '),
        },
        '6KIUg3hWzQVtkkgwI' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            message: '',
            services: [],
          });
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 3000);
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
  };

  return (
    <div>
      {/* Contact Us Section */}
      <section
        style={{
          marginTop: '8rem',
          padding: '2rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#28a745', textAlign: 'center' }}>Contact Us!</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: 'auto',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              style={{ flex: '1', padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              style={{ flex: '1', padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address (Optional)"
            value={formData.address}
            onChange={handleInputChange}
            style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ccc', height: '150px' }}
          />
          <div
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#f9f9f9',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Services</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {['Tree Removal', 'Tree Trimming', 'Stump Removal', 'Fall and Spring Clean Up', 'Emergency Services', 'Land Clearing'].map(
                (service) => (
                  <label key={service}>
                    <input
                      type="checkbox"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleCheckboxChange}
                    />{' '}
                    {service}
                  </label>
                )
              )}
            </div>
          </div>
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              borderRadius: '4px',
              backgroundColor: '#28a745',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
        {successMessage && (
          <p style={{ textAlign: 'center', marginTop: '1rem', color: 'green' }}>
            {successMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
