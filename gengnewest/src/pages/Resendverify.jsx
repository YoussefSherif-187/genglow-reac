import React from 'react'
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"
const Resendverify = () => {
  return (
    <div>
        <div class="signbody">

<div class="wrapper">
    <h1>Resend Code</h1>
    <p id="error-message"></p>
    <form id="form">
      <div>
        <label for="email-input">
          <span>@</span>
        </label>
        <input type="email" name="email" id="email-input" placeholder="Email"/>
      </div>
      <div>
        
      </div>
      
    </form>
    <button type="submit">Send Code </button>
  </div>

  </div>

    </div>
  )
}

export default Resendverify