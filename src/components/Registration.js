import React, { useState } from 'react';
import './registration.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registrationStatus, setRegistrationStatus] = useState(null); // State to track registration status
  const history = useHistory(); // Hook for redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);
      
      // Handle the response
      console.log('Registration successful:', response.data);
      setRegistrationStatus('success');

      // Redirect to login page after a delay (for demonstration purposes)
      setTimeout(() => {
        history.push('/login');
      }, 2000); // Redirect after 2 seconds (adjust as needed)
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error.message);
      setRegistrationStatus('error');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleFormSubmit}>
        {/* ... (Input fields as before) */}

        {/* Display registration status */}
        {registrationStatus === 'success' && (
          <p style={{ color: 'green' }}>Registration successful! Redirecting to login...</p>
        )}
        {registrationStatus === 'error' && (
          <p style={{ color: 'red' }}>Registration failed. Please try again.</p>
        )}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
