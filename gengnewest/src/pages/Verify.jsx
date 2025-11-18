import React, { useState } from "react";
import axios from "axios";
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"

const Verify = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  
  const VerifyHanlder = async () => {
    await axios
      .post("https://genglow-backend.vercel.app/api/auth/verify-email", {
        email: email,
        code: code,
      })
      .then(response => {
        alert("Email Verified");
      })
      .catch(error => {
        console.log(error);
        alert("error. You may have entered a field incorrectly.");
      });
  };
  return (
  
  <div>
  <div class="signbody">

<div class="wrapper">
<h1>Verification</h1>
<p id="error-message"></p>
<form id="form">
<div>
  <label for="email-input">
    <span>@</span>
  </label>
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email-input" placeholder="Email"/>
</div>
<div>
  <label for="code-input">
      <img src={keypic} alt="" height="24" viewBox="0 -960 960 960" width="24"/>
  </label>
  <input type="code" value={code} onChange={(e) => setCode(e.target.value)} name="code"  id="code-input" placeholder="Code"/>
</div>
</form>
<a href="verify">Resend verification code</a>
  <button onClick={VerifyHanlder}>Verify</button>

</div>

</div>

</div> )
}

export default Verify