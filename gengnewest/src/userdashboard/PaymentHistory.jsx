import React from 'react'
import UserSidebar from '../comp/Usersidebar'
import "../pagesstyles/dashboard.css"

const PaymentHistory = () => {
  return (
    <div>       
      <div className="layout">
        <UserSidebar />
        <main className="main-content">
          Payment History
        </main>
      </div>
    </div>
  )
}

export default PaymentHistory
