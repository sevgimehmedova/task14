import React, { useState } from 'react';
import './addcar.css';
import axios from 'axios';

const AddCar = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add a new car
      const response = await axios.post('/api/addNewCar', carData);

      // Handle the response (e.g., show success message, redirect)
      console.log('New car added successfully:', response.data);

      // Clear form data after successful submission
      setCarData({
        make: '',
        model: '',
        year: '',
      });
    } catch (error) {
      // Handle error during new car addition
      console.error('Error adding new car:', error.message);
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={carData.make}
          onChange={handleInputChange}
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={carData.model}
          onChange={handleInputChange}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={carData.year}
          onChange={handleInputChange}
        />

        {/* Add more input fields for other car details as needed */}

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
