import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard=()=>{
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        dcNumber: '',
        poNumber: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8080/vehicle/add', formData);
          alert('Vehicle added successfully');
        } catch (error) {
          console.error('Error adding vehicle:', error);
        }
      };
    
      return (
        <div>
          <h2>Add Vehicle</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Make:</label>
              <input type="text" name="make" value={formData.make} onChange={handleChange} />
            </div>
            <div>
              <label>Model:</label>
              <input type="text" name="model" value={formData.model} onChange={handleChange} />
            </div>
            <div>
              <label>Year:</label>
              <input type="number" name="year" value={formData.year} onChange={handleChange} />
            </div>
            <div>
              <label>D.C. Number:</label>
              <input type="text" name="dcNumber" value={formData.dcNumber} onChange={handleChange} />
            </div>
            <div>
              <label>P.O. Number:</label>
              <input type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} />
            </div>
            <button type="submit">Add Vehicle</button>
          </form>
        </div>
      );
}

export default Dashboard