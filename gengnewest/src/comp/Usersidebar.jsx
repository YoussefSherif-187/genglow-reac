import React from 'react';
import { useLocation } from 'react-router-dom';
import "../pagesstyles/dashboard.css"

const UserSidebar = () => {
  const location = useLocation();

  const pageTitles = {
    '/user': 'User Profile',
    '/user/profile': 'User Profile',
    '/user/orders': 'My Orders',
    '/user/order-details': 'Order Details',
    '/user/payments': 'Payment History',
    '/user/reviews': 'My Reviews',
  };

  const currentTitle = pageTitles[location.pathname] || 'User Profile';

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">{currentTitle}</h1>

      <nav className="sidebar-nav">
        <a href="/user/profile" className="sidebar-link">
          User Profile
        </a>
        <a href="/user/orders" className="sidebar-link">
          My Orders
        </a>
        <a href="/user/order-details" className="sidebar-link">
          Order Details
        </a>
        <a href="/user/payments" className="sidebar-link">
          Payment History
        </a>
        <a href="/user/reviews" className="sidebar-link">
          My Reviews
        </a>
      </nav>
    </aside>
  );
};

export default UserSidebar;
