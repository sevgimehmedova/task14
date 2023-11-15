import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information on component mount
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('/api/getUserInfo');

        // Set user information in state
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error.message);
      }
    };

    fetchUserInfo();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleEditUserInfo = async () => {
    // TODO: Implement the logic to edit user information
    console.log('Implement logic to edit user information');
  };

  if (!userInfo) {
    return <p>Loading user information...</p>;
  }

  return (
    <div>
      <h2>Welcome, {userInfo.username}!</h2>
      <p>Email: {userInfo.email}</p>

      {/* Add more user information as needed */}
      
      <button onClick={handleEditUserInfo}>Edit User Info</button>
    </div>
  );
};

export default Dashboard;
