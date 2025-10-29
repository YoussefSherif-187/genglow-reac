import React, { useEffect, useState } from "react";
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"
import axios from 'axios'

const verify = () => {
 /* const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const VerifyHanlder = async () => {
    await axios
      .post("https://genglow-backend.vercel.app/api/auth/verify-email", {
        email: email,
        code: code,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
*/

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
  <input type="email" name="email" /*onChange={e => {setEmail(e.target.value);}} */ id="email-input" placeholder="Email"/>
</div>
<div>
  <label for="code-input">
      <img src={keypic} height="24" viewBox="0 -960 960 960" width="24"/>
  </label>
  <input type="code" name="code" /*onChange={e => {setCode(e.target.value);}} */ id="code-input" placeholder="Code"/>
</div>
</form>

 <button /*onClick={VerifyHanlder} */ >Verify</button>

</div>

</div>

</div> )
}

export default verify