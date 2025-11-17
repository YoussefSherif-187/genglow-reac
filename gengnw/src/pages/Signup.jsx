import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import keypic from "../assets/key.png";
import user2 from "../assets/user2.png";
import "../pagesstyles/signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const SignupHanlder = async () => {
    await axios
      .post("https://genglow-backend.vercel.app/api/auth/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(response => {
        navigate('/verify');
      })
      .catch(error => {
        console.log(error);
        alert("error. You may have entered a field incorrectly, or have already sent a verification mail, in that case click on Resend verification code");
      });
  };

  return (
    <div>
      <div className="signbody">
        <div className="wrapper">
          <h1>Sign up</h1>
          <p id="error-message"></p>
          <form id="form">
            <div>
              <label for="name-input">
                <img
                  src={user2}
                  alt=""
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                />
              </label>
              <input
                type="text"
                name="name"
                onChange={e => {
                  setName(e.target.value);
                }}
                id="name-input"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email-input">
                <span>@</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                id="email-input"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="password-input">
                <img src={keypic} alt="" height="24" viewBox="0 -960 960 960" width="24"/>
              </label>
              <input
                type="password"
                name="password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
                id="password-input"
                placeholder="Password"
              />
            </div>
          </form>
          <a href="signin">Already have an account?</a>
          <a href="verify">Want to Verify your account?</a>
          <a href="verify">Resend verification code</a>
          <button onClick={SignupHanlder}>Sign up</button>
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
