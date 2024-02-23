import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import signup_banner from "../images/signup-banner.png";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [SignUpStatus, setSignUpStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    pass: "",
  });
  const [error, setError] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://real-cyan-ostrich-yoke.cyclic.app/users/register', formData);
      console.log(response.data); // Assuming the backend sends back a success message
      // Redirect to login page or show success message to the user
    } catch (error) {
      console.error('Error during signup:', error.response?.data || 'An error occurred during sign up.');
      setError(error.response?.data?.error || 'An error occurred during sign up.');
    }
    navigate("/login")
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "3rem",
        flexWrap: "wrap",
        backgroundColor:"ButtonHighlight"
      }}
    >
      <div>
        <img
          className='signup-img'
          style={{ width: "350px", margin: "3rem", opacity: "0.9" }}
          src={signup_banner}
          alt=''
        />
      </div>
      <DIV>
        {SignUpStatus ? <h3> SignUp Successful</h3> : <h2>SignUp Page</h2>}
        <form onSubmit={handleSubmit}>
          <div className='box'>
            {/* <label>Name:</label> */}
            <input
              style={{ margin: "7px 0" }}
              type='text'
              name='name'
              placeholder='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <label>Email:</label> */}
            <input
              style={{ margin: "7px 0" }}
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input style={{ margin: "7px 0" }} placeholder="Gender" onChange={handleChange} name="gender" id="" value={formData.gender} />
          </div>
          <div>
            <input
              style={{ margin: "7px 0" }}
              type='password'
              name='pass'
              placeholder='Password'
              value={formData.pass}
              onChange={handleChange}
              required
            />
          </div>
          <button style={{ padding: "10px 0" }} type='submit'>
            Submit
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <Link to='/login'>
          <p>
            Already have an account{" "}
            <span style={{ color: "#A0CE5F" }}>login here</span>
          </p>
        </Link>
      </DIV>
    </div>
  );
};

export default SignUp;

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
