import React from 'react'
import PharmacistSidebar from '../comp/PharmacistSidebar'
import "../pagesstyles/dashboard.css"

const AddProducts = () => {
  return (
    <div>
      <div className="layout">
        <PharmacistSidebar />
        <main className="main-content">
          Add Products
        </main>
      </div>
    </div>
  )
}

export default AddProducts
