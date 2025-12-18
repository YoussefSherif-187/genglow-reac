import React from 'react'
import "../pagesstyles/contact.css"

const contact = () => {
  return (
    <div>
      <div class="contactbody">
  <section class="contact">
    <h2>Contact Us</h2>
    <p>We’d love to hear from you! Whether it’s feedback, questions, or suggestions — just drop us a message.</p>

    <form>
    <label for="Yourname"> Full Name</label>
      <input type="text" id="name" name="name" placeholder="Your name"/>

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Your email"/>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="Write your message here..."></textarea>

      <button type="submit" class="conbutn">Send Message</button>
    </form>
  </section>

  <section class="contact-info">
    <h3>Other Ways to Reach Us</h3>
    <p>Email: support@genglow.com</p>
    <p>Phone: +20 123 456 7890</p>
    <p>Address: Alexandria, Egypt</p>
    <p>Follow us: <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
  </section>

</div>
    </div>
  )
}

export default contact