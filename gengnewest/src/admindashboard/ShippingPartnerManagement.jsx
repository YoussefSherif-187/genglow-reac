import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const ShippingPartnerManagement = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          Shipping Partner Management
        </main>
      </div>
    </div>
  )
}

export default ShippingPartnerManagement
