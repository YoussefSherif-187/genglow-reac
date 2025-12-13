import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const AllSampleRequests = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          All Sample Requests
        </main>
      </div>
    </div>
  )
}

export default AllSampleRequests
