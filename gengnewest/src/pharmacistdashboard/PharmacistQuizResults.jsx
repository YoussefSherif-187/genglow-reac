import React from 'react'
import PharmacistSidebar from '../comp/PharmacistSidebar'
import "../pagesstyles/dashboard.css"

const PharmacistQuizResults = () => {
  return (
    <div>
      <div className="layout">
        <PharmacistSidebar />
        <main className="main-content">
          Quiz Results
        </main>
      </div>
    </div>
  )
}

export default PharmacistQuizResults
