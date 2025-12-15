import React from 'react'
import UserSidebar from '../comp/Usersidebar'
import "../pagesstyles/dashboard.css"

const Exams = () => {
  return (
    <div>       
      <div className="layout">
        <UserSidebar />
        <main className="main-content">
          Exams
        </main>
      </div>
    </div>
  )
}

export default Exams
