import React from 'react'
import userpic from '../assets/1077114.png'
import logo from '../assets/genlogo.png'
import "../app.css"

const navbar = () => {
  return (
    <div>
    <div class="nav">
    
<a href="home"><div class="logo">
    
    <img src={logo} width="130" height="51"/>
    
</div></a>  
    
<div class="bar">
    
   <ul>
     <li><a href="shop">SHOP</a></li>   
     <li><a href="aboutus">ABOUT GENGLOW</a></li>   
     <li><a href="requestsample">TRY A SAMPLE</a></li>
     <li><a href="bookexam">BOOK AN EXAMINATION</a></li>     
    </ul> 
    
</div> 

<div class="user-dropdown">
    <img src={userpic} alt="User Icon" class="user-icon"/>
    <div class="dropdown-content">
      <a href="signin">Sign In</a>
      <a href="signup">Sign Up</a>
    </div>
  </div>


<div class="quizbtn">
    
   <a href="genquiz">  
    <button class="butn">Gentic Quiz</button>
   </a>  
    
</div>
    
</div>    
    </div>
  )
}

export default navbar