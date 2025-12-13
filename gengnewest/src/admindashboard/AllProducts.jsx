import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const AllProducts = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          All Products
        </main>
      </div>
    </div>
  )
}

export default AllProducts
