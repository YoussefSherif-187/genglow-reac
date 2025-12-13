import React from 'react'
import PharmacistSidebar from '../comp/PharmacistSidebar'
import "../pagesstyles/dashboard.css"

const ApprovedSamples = () => {
  return (
    <div>
      <div className="layout">
        <PharmacistSidebar />
        <main className="main-content">
          Approved Samples
        </main>
      </div>
    </div>
  )
}

export default ApprovedSamples
