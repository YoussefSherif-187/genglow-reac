import React from 'react'
import AdminSidebar from '../comp/AdminSidebar'
import "../pagesstyles/dashboard.css"

const AllQuizResults = () => {
  return (
    <div>       
      <div className="layout">
        <AdminSidebar />
        <main className="main-content">
          All Quiz Results
        </main>
      </div>
    </div>
  )
}

export default AllQuizResults
