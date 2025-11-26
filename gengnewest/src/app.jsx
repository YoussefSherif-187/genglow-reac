import react from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Privateroutes from "./Privateroutes";
import PublicOnlyRoute from "./PublicOnlyRoute";

import Navbar from "./comp/navbar";
import Footer from "./comp/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contact";
import Requestsample from "./pages/Requestsample";
import Bookexam from "./pages/Bookexam";
import Genquiz from "./pages/Genquiz";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import Forgotpass from "./pages/Forgotpass";
import Resendverify from "./pages/Resendverify";
import Dashboard from "./pages/Dashboard";
import Privacypolicy from "./pages/Privacypolicy";
import Singleproduct from "./pages/Singleproduct";

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
        <Route
          path="/signin"
          element={
            <PublicOnlyRoute>
              <Signin />
            </PublicOnlyRoute>
          }
        />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/resendverify" element={<Resendverify />} />
        <Route
          path="/dashboard"
          element={
            <Privateroutes allowedRoles={["user"]}>
              <Dashboard />
            </Privateroutes>
          }
        />
        <Route path="/requestsample" element={<Requestsample />} />
        <Route path="/bookexam" element={<Bookexam />} />
        <Route path="/genquiz" element={<Genquiz />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/product/:id" element={<Singleproduct />} />
        <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />
      </Routes>
      <Footer />
    </>
  );
}
