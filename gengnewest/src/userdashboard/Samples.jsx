import React from 'react'
import UserSidebar from '../comp/Usersidebar'
import "../pagesstyles/dashboard.css"

const samples = () => {
  return (
    <div>       
      <div className="layout">
        <UserSidebar />
        <main className="main-content">
          Samples
        </main>
      </div>
    </div>
  )
}

export default samples
