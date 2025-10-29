import React from 'react'
import keypic from '../assets/key.png'
import user2 from '../assets/user2.png'
import "../pagesstyles/signup.css"
import axios from 'axios';


const Signup = () => {

axios.get('https://genglow-backend.vercel.app/api/auth/register')
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


axios.post('https://api.example.com/posts', {
    title: 'New Post',
    body: 'This is the content of the new post.'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });


  return (
    <div>
      <div class="signbody">

<div class="wrapper">
    <h1>Sign up</h1>
    <p id="error-message"></p>
    <form id="form">
      <div>
        <label for="name-input">
            <img src={user2} height="24" viewBox="0 -960 960 960" width="24"/>
        </label>
        <input type="text" name="name" id="name-input" placeholder="Name"/>
      </div>
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
      <button type="submit">Sign up</button>
    </form>
  </div>

  </div>
    </div>
  )
}

export default Signup