import React, { useState } from 'react'
import "../pagesstyles/bookexam.css"

const Bookexam = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    medicalHistory: '',
    allergies: '',
    notes: '',
    terms: false
  })

  const [activeFaq, setActiveFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your booking request has been received successfully! Our team will contact you soon to confirm the appointment.')
    setFormData({
      fullName: '', email: '', phone: '', age: '', gender: '',
      preferredDate: '', preferredTime: '', location: '',
      medicalHistory: '', allergies: '', notes: '', terms: false
    })
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How is the genetic test performed?',
      answer: 'The test is performed by taking a small sample of inner cheek cells using a special swab, which is then analyzed in our specialized laboratories to determine your genetic characteristics related to skin and hair.'
    },
    {
      question: 'How long does it take to get test results?',
      answer: 'Test results appear within 7-10 business days from the date of sample collection. Results will be sent to your registered email address, and one of our consultants will contact you to explain the results and provide appropriate recommendations.'
    },
    {
      question: 'What is the cost of the genetic test?',
      answer: 'The basic genetic test costs 1200 EGP. We also offer comprehensive packages that include the test with recommended products at special discounts. You can view package details when confirming your booking.'
    }
  ]

  return (
    <main>
      <section className="booking-section">
        <div className="container">
          <div className="form-container">
            <h2>Genetic Test Booking Form</h2>
            <p>Please fill out the form below to book an appointment for genetic testing. A customer service representative will contact you to confirm the appointment.</p>
            
            <form id="booking-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input type="text" id="fullName" className="form-control" required
                    value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input type="email" id="email" className="form-control" required
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input type="tel" id="phone" className="form-control" required
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age*</label>
                  <input type="number" id="age" className="form-control" min="18" max="100" required
                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender*</label>
                  <select id="gender" className="form-control" required
                    value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="">-- Select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Appointment Details</h3>
                <div className="form-group">
                  <label htmlFor="preferred-date">Preferred Date*</label>
                  <input type="date" id="preferred-date" className="form-control" required
                    value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="preferred-time">Preferred Time*</label>
                  <select id="preferred-time" className="form-control" required
                    value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}>
                    <option value="">-- Select --</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location*</label>
                  <select id="location" className="form-control" required
                    value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}>
                    <option value="">-- Select --</option>
                    <option value="cairo">Cairo - Maadi Branch</option>
                    <option value="alexandria">Alexandria - Smouha Branch</option>
                    <option value="sharm">Sharm El Sheikh - Naama Bay Branch</option>
                  </select>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-group">
                  <label htmlFor="medical-history">Do you have any medical history we should know about?</label>
                  <textarea id="medical-history" className="form-control"
                    value={formData.medicalHistory} onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="allergies">Do you have any allergies?</label>
                  <textarea id="allergies" className="form-control"
                    value={formData.allergies} onChange={(e) => setFormData({...formData, allergies: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea id="notes" className="form-control"
                    value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})}></textarea>
                </div>
              </div>
              
              <div className="form-section">
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="terms" required
                      checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} />
                    <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                  </label>
                </div>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <section className="faq-section bg-light">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions About Genetic Testing</h2>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    <i className={`fas ${activeFaq === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </div>
                <div className="faq-answer" style={{ maxHeight: activeFaq === index ? '1000px' : '0' }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Bookexam