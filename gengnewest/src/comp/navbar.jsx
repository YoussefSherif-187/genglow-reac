import React, { useEffect, useState } from 'react';
import userpic from '../assets/1077114.png';
import logo from '../assets/genlogo.png';
import "../app.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  // Sync auth + role
  useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", syncAuth);

    const interval = setInterval(syncAuth, 500);

    return () => {
      window.removeEventListener("storage", syncAuth);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    window.location.href = "/home";
  };

  // 🔹 Decide dashboard path based on role
  const getDashboardPath = () => {
    if (role === "admin") return "/admin";
    if (role === "pharmacist") return "/pharmacist";
    return "/user";
  };

 return (
  <header className="nav">
    <div className="nav-inner">
      {/* Logo */}
      <a href="/home" className="logo">
        <img src={logo} alt="GenGlow Logo" />
      </a>

      {/* Navigation Links */}
      <nav className="bar">
  <NavLink to="/shop">Shop</NavLink>
  <NavLink to="/aboutus">About GenGlow</NavLink>
  <NavLink to="/requestsample">Try a Sample</NavLink>
  <NavLink to="/bookexam">Book an Examination</NavLink>
</nav>

      {/* Right Section */}
      <div className="nav-right">
      <div className="quizbtn">
  <NavLink to="/genquiz" className="quiz-outline-btn">
    Genetic Quiz
  </NavLink>
</div>


        <div className="user-dropdown">
          <img src={userpic} alt="User Icon" className="user-icon" />
          <div className="dropdown-content">
            {!isLoggedIn ? (
              <>
                <a href="/signin">Sign In</a>
                <a href="/signup">Sign Up</a>
              </>
            ) : (
              <>
                <a href={getDashboardPath()}>Dashboard</a>
                <button className="logout-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </header>
);

};

export default Navbar;
