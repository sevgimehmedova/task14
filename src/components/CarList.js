import React, { useState, useEffect } from 'react';
import './carlist.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    // Fetch the list of cars on component mount
    const fetchCars = async () => {
      try {
        const response = await axios.get('/api/getAllCars');

        // Set the list of cars in state
        setCarList(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error.message);
      }
    };

    fetchCars();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <p>{car.make} {car.model} ({car.year})</p>
            <Link to={`/car/${car.id}`}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
