import React from 'react'
import keypic from '../assets/key.png'
import "../pagesstyles/signup.css"
const Signin = () => {
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
        <input type="email" name="email" id="email-input" placeholder="Email"/>
      </div>
      <div>
        <label for="password-input">
            <img src={keypic} height="24" viewBox="0 -960 960 960" width="24"/>
        </label>
        <input type="password" name="password" id="password-input" placeholder="Password"/>
      </div>
      <button type="submit">sign in </button>
    </form>
  </div>

  </div>

    </div>
  )
}

export default Signin