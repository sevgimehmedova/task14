import React, { useState, useEffect } from 'react';
import './cardetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const [carDetails, setCarDetails] = useState(null);
  const { carId } = useParams(); // Extract carId from the URL parameter

  useEffect(() => {
    // Fetch detailed information about the selected car on component mount
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`/api/getCarById/${carId}`);

        // Set detailed car information in state
        setCarDetails(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error.message);
      }
    };

    fetchCarDetails();
  }, [carId]); // Dependency on carId ensures re-fetching when the carId changes

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div>
      <h2>{carDetails.make} {carDetails.model} ({carDetails.year})</h2>
      <p>Additional Details:</p>
      <ul>
        {/* Display additional car details */}
        <li>Color: {carDetails.color}</li>
        <li>Price: {carDetails.price}</li>
        {/* Add more details as needed */}
      </ul>
    </div>
  );
};

export default CarDetails;
