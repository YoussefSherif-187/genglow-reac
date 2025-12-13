import React from 'react'
import PharmacistSidebar from '../comp/PharmacistSidebar'
import "../pagesstyles/dashboard.css"

const ExaminationBooking = () => {
  return (
    <div>
      <div className="layout">
        <PharmacistSidebar />
        <main className="main-content">
          Examination Booking
        </main>
      </div>
    </div>
  )
}

export default ExaminationBooking
