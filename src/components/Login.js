import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginStatus, setLoginStatus] = useState(null);
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', formData);
      
      // Handle the response
      console.log('Login successful:', response.data);

      // Store authentication token in local storage
      localStorage.setItem('authToken', response.data.token);

      // Update login status and redirect to the dashboard
      setLoginStatus('success');
      history.push('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
      setLoginStatus('error');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {/* Display login status */}
        {loginStatus === 'success' && (
          <p style={{ color: 'green' }}>Login successful! Redirecting to the dashboard...</p>
        )}
        {loginStatus === 'error' && (
          <p style={{ color: 'red' }}>Login failed. Please check your credentials and try again.</p>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
