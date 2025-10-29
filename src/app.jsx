import react from "react";
import Navbar from "./comp/navbar";
import Footer from "./comp/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
export function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />
    </>
  );
}

// 1
    // https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c

    // 2
    // verify page

    // 3
    // empty dashboard protected page