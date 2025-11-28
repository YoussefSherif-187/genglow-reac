import React, { useEffect, useState } from 'react';
import userpic from '../assets/1077114.png';
import logo from '../assets/genlogo.png';
import "../app.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Listen for storage changes (works if login happens in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Optional: poll for token in the same tab
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/home";
  };

  return (
    <div className="nav">
      {/* Logo */}
      <a href="/home">
        <div className="logo">
          <img src={logo} width="130" height="51" alt="GenGlow Logo" />
        </div>
      </a>

      {/* Navigation Links */}
      <div className="bar">
        <ul>
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/aboutus">ABOUT GENGLOW</a></li>
          <li><a href="/requestsample">TRY A SAMPLE</a></li>
          <li><a href="/bookexam">BOOK AN EXAMINATION</a></li>
        </ul>
      </div>

      {/* User Dropdown */}
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
              <a href="/dashboard">Dashboard</a>
              <button className="logout-btn"
                onClick={handleLogout}
                
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Genetic Quiz Button */}
      <div className="quizbtn">
        <a href="/genquiz">
          <button className="butn">Genetic Quiz</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
