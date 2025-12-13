import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const ReportsAnalytics = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          Reports & Analytics
        </main>
      </div>
    </div>
  )
}

export default ReportsAnalytics
