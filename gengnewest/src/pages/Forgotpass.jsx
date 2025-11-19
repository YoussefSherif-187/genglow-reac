import React from 'react'
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"
const Forgotpass = () => {
  return (
    <div>
        <div class="signbody">

<div class="wrapper">
    <p>Forgotten Password?</p>
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
    <button type="submit">Send Email </button>
  </div>

  </div>

    </div>
  )
}

export default Forgotpass