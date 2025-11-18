import React from 'react'
import "../pagesstyles/about.css"
import aboutimg from "../assets/aboutimg.png"
const Aboutus = () => {
  return (
    <div>
      <div class="aboutbody">
  
  <section class="about">
    <h2>About Genglow</h2>
    <p>Welcome to <strong>Genglow</strong> — where natural beauty meets science. We’re passionate about creating high-quality, eco-friendly skincare products that bring out your natural glow while caring for the planet.</p>

    <div class="about-content">
      <img src={aboutimg} alt="Natural skincare" class="about-img"/>
      <div class="text">
        <h3>Our Mission</h3>
        <p>At Genglow, our mission is to provide clean, sustainable, and effective skincare that suits all skin types. We believe in transparency, cruelty-free testing, and environmentally conscious packaging.</p>

        <h3>Our Vision</h3>
        <p>We envision a world where beauty is not only about appearance but also about self-care and responsibility. Genglow is dedicated to promoting confidence through simplicity and natural ingredients.</p>

        <h3>Why Choose Us</h3>
        <ul>
          <li>🌿 100% natural and cruelty-free ingredients</li>
          <li>♻️ Eco-friendly packaging</li>
          <li>💧 Dermatologist-tested and safe for all skin types</li>
          <li>💚 Trusted by thousands of happy customers</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="team">
    <h2>Meet Our Team</h2>
    <p>Our dedicated professionals work every day to ensure you receive the best skincare experience possible.</p>

    <div class="team-members">
      <div class="member">
        <h4>Rewan Hesham</h4>
     
      </div>
      <div class="member">
        <h4>Rewan Mohamed</h4>
    
      </div>
      <div class="member">
        <h4>Youssef Sherif</h4>
     
      </div>
      <div class="member">
        <h4>Ahmed Amr</h4>
      
      </div>
      
    </div>
  </section>
</div>
    </div>
  )
}

export default Aboutus