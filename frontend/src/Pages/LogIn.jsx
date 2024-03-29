import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/AuthReducer/action";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import login_banner from "../images/login-banner.gif";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };

  const [user, setUser] = useState(localUser);
  const { isAuth, name } = user;

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);
    const url = "https://real-cyan-ostrich-yoke.cyclic.app/users/login";
    const res = await axios.post(url, { email, pass: password });
    if (res.status != 200) {
      toast({
        title: "login failed",
        // description: "We've created your account for you.",
        position: "top",
        status: "failed",
        duration: 500,
        isClosable: true,
      });
      return;
    }
    
    const data = res.data;
    const { name, token } = data;
    localStorage.setItem("user", JSON.stringify({ token, isAuth: true, name }));

    setUser({ token, isAuth: true, name });
  
    navigate("/");
    if (res.status == 200) {
      toast({
        title: "login successful",
        // description: "We've created your account for you.",
        position: "top",
        status: "success",
        duration: 500,
        isClosable: true,
      });
    }

    window.location.reload();
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
          className='login-img'
          style={{ width: "450px", margin: "2rem", opacity: "0.9" ,height:"320px"}}
          src={login_banner}
          alt=''
        />
      </div>
      <DIV>
        {isAuth ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2>}

        {isAuth && <h3> User: {user.name}</h3>}
        <input
          style={{ margin: "4px 0" }}
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ margin: "4px 0" }}
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <Link to='/sign-up'>
          <p>
            Don't have any account{" "}
            <span style={{ color: "#A0CE5F" }}>create new</span>
          </p>
        </Link>
      </DIV>
    </div>
  );
};
export default Login;

const DIV = styled.div`
  /* width: 400px; */
  padding: 20px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
  border: 1px solid #ccc;
  margin-bottom: 3rem;
  align-items: center;
  height: fit-content;
  padding: 2rem;

  input {
    width: 80%;
    padding: 8px;
    color: #333;
    font-size: 1rem;
    border-radius: 6px;
    border: ${({ err }) =>
      err === "true" ? "2px solid red" : "1px solid #ccc"};
  }
  button {
    width: 120px;
    padding: 7px;
    font-size: medium;
    background-color: #a0ce5f;
    color: #fff;
    border-radius: 6px;
    font-weight: 400;
    font-size: 17px;
    border: none;
  }
  h3 {
    color: #00ad00;
    font-weight: 500;
    line-height: 30px;
    font-size: 24px;
  }
`;
