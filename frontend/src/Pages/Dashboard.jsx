import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import "../CSS/product.css"

const Dashboard=()=>{
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        dcNumber: '',
        poNumber: '',
        image:'',
        checkedOut:""
      });
    const navigate=useNavigate()
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleshow=()=>{
        navigate("/vehicles")
    }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('https://real-cyan-ostrich-yoke.cyclic.app/vehicle/add', formData);
          alert('Vehicle added successfully');
        } catch (error) {
          console.error('Error adding vehicle:', error);
        }
navigate("/vehicles")
      };
    
      return (
        <div className='owlbody'> 
          <h2 className='cardheader'>Add Vehicle</h2>
          <DIV >
          <form onSubmit={handleSubmit}>
            <div className='box'>
              <label>Make:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="make" value={formData.make} onChange={handleChange} />
            </div>
            <div>
            <label>Image:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="image" value={formData.image} onChange={handleChange} />
            </div>
            <div>
              <label>Model:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="model" value={formData.model} onChange={handleChange} />
            </div>
            <div>
              <label>Year:</label>
              <input  style={{ margin: "7px 0" }} type="number" name="year" value={formData.year} onChange={handleChange} />
            </div>
            <div>
              <label>D.C. Number:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="dcNumber" value={formData.dcNumber} onChange={handleChange} />
            </div>
            <div>
              <label>P.O. Number:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} />
            </div>
            <div>
              <label>CheckedOut:</label>
              <input  style={{ margin: "7px 0" }} type="text" name="checkedOut" value={formData.checkedOut} onChange={handleChange} />
            </div>
            <button style={{ padding: "10px 0" }}  type="submit">Add Vehicle</button>
          </form>
          <button   onClick={handleshow}>Vehicle Data</button>
          </DIV>
        </div>
      );
}

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


export default Dashboard