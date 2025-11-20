import React, { useState } from "react";
import axios from "axios";
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"
import Alerts from "../comp/Alerts";

const Signin = () => {
  const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const SiginHanlder = async () => {
    await axios
      .post("https://genglow-backend.vercel.app/api/auth/login", {
        email: email,
        password: password,
      })
      .then(response => {
        
        setSuccessMessage("Login successful");
    setErrorMessage("");
      })
      .catch(error => {
        console.log("Full error response:", error.response);

  const data = error?.response?.data;

  const backendMessage =
    data?.message ||
    data?.error ||
    data?.msg ||
    (typeof data === "string" ? data : null) ||
    "An unexpected error occurred.";

  setErrorMessage(backendMessage);
  setSuccessMessage("");
      });
  };

  return (
    <div>
        <div class="signbody">

<div class="wrapper">
    <h1>Sign in</h1>
    <p id="error-message"></p>
    <form id="form">
      <div>
        <label for="email-input">
          <span>@</span>
        </label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-input" placeholder="Email"/>
      </div>
      <div>
        <label for="password-input">
            <img src={keypic} alt="" height="24" viewBox="0 -960 960 960" width="24"/>
        </label>
        <input type="password" name="password" value={password} onChange={e => {setPassword(e.target.value);}} id="password-input" placeholder="Password"/>
      </div>
      
    </form>
    <a href="signup">Dont't have an account?</a>
    <a href="forgotpass">Forgotten your password?</a>
    <button onClick={SiginHanlder}>Sign In</button>
    {successMessage && <Alerts type="success" message={successMessage} />}
    {errorMessage && <Alerts type="error" message={errorMessage} />}
  </div>

  </div>

    </div>
  )
}

export default Signin