import React, { useState } from 'react'
import "../pagesstyles/requestsample.css"

const Requestsample = () => {
  const [selectedSamples, setSelectedSamples] = useState([])
  const [showError, setShowError] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    skinType: '',
    hairType: '',
    concerns: '',
    newsletter: true,
    terms: false
  })

  const samples = [
    { id: 'face-wash', icon: 'fa-pump-soap', title: 'Natural Face Wash', desc: 'Suitable for sensitive skin with aloe vera extract' },
    { id: 'moisturizer', icon: 'fa-prescription-bottle', title: 'Natural Skin Moisturizer', desc: 'Rich in vitamins and natural oils' },
    { id: 'hair-serum', icon: 'fa-tint', title: 'Nourishing Hair Serum', desc: 'For strengthening hair and preventing hair loss' },
    { id: 'anti-aging', icon: 'fa-magic', title: 'Anti-aging Cream', desc: 'Contains natural collagen extract' },
    { id: 'sun-protection', icon: 'fa-sun', title: 'Natural Sunscreen', desc: 'SPF 50+ protection free of chemicals' },
    { id: 'scalp-treatment', icon: 'fa-seedling', title: 'Scalp Treatment', desc: 'For reducing inflammation, itching, and dandruff' }
  ]

  const handleSampleChange = (sampleId) => {
    if (selectedSamples.includes(sampleId)) {
      setSelectedSamples(selectedSamples.filter(id => id !== sampleId))
      setShowError(false)
    } else {
      if (selectedSamples.length >= 2) {
        setShowError(true)
      } else {
        setSelectedSamples([...selectedSamples, sampleId])
        setShowError(false)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedSamples.length !== 2) {
      setShowError(true)
      return
    }
    alert('Your sample request has been received successfully! The selected samples will be shipped to your address within 3-5 business days.')
    setFormData({
      fullName: '', email: '', phone: '', address: '', city: '',
      skinType: '', hairType: '', concerns: '', newsletter: true, terms: false
    })
    setSelectedSamples([])
  }

  return (
    <main>
      <section className="sample-request-section">
        <div className="container">
          <div className="form-container">
            <h2>Request Free Samples</h2>
            <p>Choose two samples from our products and we will send them to you for free. Just fill out the form below.</p>
            
            <form id="sample-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input type="text" id="fullName" className="form-control" required 
                    value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" className="form-control" required 
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input type="tel" id="phone" className="form-control" required 
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address*</label>
                  <textarea id="address" className="form-control" required 
                    value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City*</label>
                  <input type="text" id="city" className="form-control" required 
                    value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
              
              <div className="form-section">
                <h3>Requested Samples</h3>
                <p>You can choose only two samples from the following products:</p>
                
                <div className="samples-grid">
                  {samples.map(sample => (
                    <div key={sample.id} className="sample-item">
                      <input type="checkbox" id={sample.id} checked={selectedSamples.includes(sample.id)}
                        onChange={() => handleSampleChange(sample.id)} />
                      <label htmlFor={sample.id}>
                        <div className="sample-icon"><i className={`fas ${sample.icon}`}></i></div>
                        <h4>{sample.title}</h4>
                        <p>{sample.desc}</p>
                      </label>
                    </div>
                  ))}
                </div>
                
                {showError && (
                  <div id="sample-error" className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                    Please select only two samples
                  </div>
                )}
              </div>
              
              <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-group">
                  <label htmlFor="skin-type">Skin Type</label>
                  <select id="skin-type" className="form-control" value={formData.skinType}
                    onChange={(e) => setFormData({...formData, skinType: e.target.value})}>
                    <option value="">-- Select --</option>
                    <option value="oily">Oily</option>
                    <option value="dry">Dry</option>
                    <option value="combination">Combination</option>
                    <option value="sensitive">Sensitive</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="hair-type">Hair Type</label>
                  <select id="hair-type" className="form-control" value={formData.hairType}
                    onChange={(e) => setFormData({...formData, hairType: e.target.value})}>
                    <option value="">-- Select --</option>
                    <option value="straight">Straight</option>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="coily">Coily</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="concerns">Issues You're Experiencing</label>
                  <textarea id="concerns" className="form-control" value={formData.concerns}
                    onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                    placeholder="Please mention any skin or hair problems you would like to treat"></textarea>
                </div>
              </div>
              
              <div className="form-section">
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="newsletter" checked={formData.newsletter}
                      onChange={(e) => setFormData({...formData, newsletter: e.target.checked})} />
                    I want to subscribe to the newsletter
                  </label>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="terms" required checked={formData.terms}
                      onChange={(e) => setFormData({...formData, terms: e.target.checked})} />
                    I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a>*
                  </label>
                </div>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="btn btn-primary btn-large">Request Free Samples</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <section className="why-samples bg-light">
        <div className="container">
          <h2 className="section-title">Why Request Free Samples?</h2>
          
          <div className="feature-cards">
            <div className="feature-card">
              <i className="fas fa-check-circle"></i>
              <h3>Ensure Suitability</h3>
              <p>Test the product on your skin or hair to ensure it's suitable for you before purchasing the full size</p>
            </div>
            
            <div className="feature-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Explore Products</h3>
              <p>Discover the quality of our natural products and their effectiveness in treating various problems</p>
            </div>
            
            <div className="feature-card">
              <i className="fas fa-shipping-fast"></i>
              <h3>Free Shipping</h3>
              <p>We will send the samples to your home for free without any additional cost</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Requestsample