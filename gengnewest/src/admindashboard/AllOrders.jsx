import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const AllOrders = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          All Orders
        </main>
      </div>
    </div>
  )
}

export default AllOrders
