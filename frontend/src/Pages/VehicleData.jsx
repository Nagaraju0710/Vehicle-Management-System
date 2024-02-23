import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "../CSS/vehicle.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

const GetVehicleData = () => {
    const [vehicles, setVehicles] = useState([]);
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        dcNumber: '',
        poNumber: '',
        image: '',
    });

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('https://real-cyan-ostrich-yoke.cyclic.app/vehicle');
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://real-cyan-ostrich-yoke.cyclic.app/vehicle/delete/${id}`);
            setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle._id !== id));
            alert('Vehicle deleted successfully');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`https://real-cyan-ostrich-yoke.cyclic.app/vehicle/update/${id}`);
            const { make, model, year, dcNumber, poNumber, image } = response.data;
            setFormData({ make, model, year, dcNumber, poNumber, image });
        } catch (error) {
            console.error('Error fetching vehicle data for editing:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://real-cyan-ostrich-yoke.cyclic.app/vehicle/update/${formData._id}`, formData);
            alert('Vehicle updated successfully');
            // You may choose to refresh the vehicle list after editing
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    return (
        <div className='owlbody'>
            <h2  className='cardheader'>Vehicle Information</h2>
            <div className='card'>
                {vehicles.map((vehicle) => (
                    <div className='innercard' key={vehicle._id}>
                        {vehicle.image && <img src={vehicle.image} alt={`Image of ${vehicle.make} ${vehicle.model}`} />}
                        <p>Make: {vehicle.make}</p>
                        <p>Model: {vehicle.model}</p>
                        <p>Year: {vehicle.year}</p>
                        <p>D.C. Number: {vehicle.dcNumber}</p>
                        <p>P.O. Number: {vehicle.poNumber}</p>
                        <Button className="delete" colorScheme='red'  onClick={() => handleDelete(vehicle._id)}>DELETE</Button>
                        <Button className="edit" colorScheme='blue' onClick={() => handleEdit(vehicle._id)}>EDIT</Button>
                       
                    </div>
                ))}
            </div>
            <div className='formfield'>
            <h2 className='edith'> Edit Vehicle</h2>
            <DIV >
                <form onSubmit={handleSubmit}>
                    <div className='box'>
                        <label>Make:</label>
                        <input style={{ margin: "7px 0" }} type="text" name="make" value={formData.make} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input style={{ margin: "7px 0" }} type="text" name="image" value={formData.image} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Model:</label>
                        <input style={{ margin: "7px 0" }} type="text" name="model" value={formData.model} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Year:</label>
                        <input style={{ margin: "7px 0" }} type="number" name="year" value={formData.year} onChange={handleChange} />
                    </div>
                    <div>
                        <label>D.C. Number:</label>
                        <input style={{ margin: "7px 0" }} type="text" name="dcNumber" value={formData.dcNumber} onChange={handleChange} />
                    </div>
                    <div>
                        <label>P.O. Number:</label>
                        <input style={{ margin: "7px 0" }} type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} />
                    </div>
                    <button style={{ padding: "10px 0" }} type="submit">Add Vehicle</button>
                </form>
            </DIV>
            </div>
        </div>
    );
};

const DIV = styled.div`
  /* width: 400px; */
  color: #333;
  padding: 20px;
  /* margin: 40px auto; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  align-items: center;

  /* .boxx{
    display: flex;
  } */

  input {
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    font-size: 1rem;
    border: solid 1px #ccc;
    padding: 20px 15px;
    border-radius: 6px;
    color: #333;
    /* border: ${({ err }) =>
        err === "true" ? "2px solid red" : "1px solid grey"}; */
  }
  button {
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    background-color: #a0ce5f;
    font-size: 18px;
    font-weight: 400;
    border: none;
  }
  h3 {
    color: #00bc00;
    font-weight: 500;
    font-size: 24px;
  }
`;




export default GetVehicleData;
