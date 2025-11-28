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
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/product/:id" element={<Singleproduct />} />



        <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
        <Route path="/signin" element={<PublicOnlyRoute><Signin /></PublicOnlyRoute>}/>
        <Route path="/verify" element={<PublicOnlyRoute><Verify /></PublicOnlyRoute>} />
        <Route path="/forgotpass" element={<PublicOnlyRoute><Forgotpass /></PublicOnlyRoute>} />
        <Route path="/resendverify" element={<PublicOnlyRoute><Resendverify /></PublicOnlyRoute>} />



        <Route path="/dashboard" element={<Privateroutes allowedRoles={["user"]}><Dashboard /></Privateroutes>}/>
        <Route path="/requestsample" element={<Privateroutes allowedRoles={["user"]}><Requestsample /></Privateroutes>}/>
        <Route path="/bookexam" element={<Privateroutes allowedRoles={["user"]}><Bookexam /></Privateroutes>}/>
        <Route path="/genquiz" element={<Privateroutes allowedRoles={["user"]}><Genquiz /></Privateroutes>}/>


        
        <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />

        
      </Routes>
      <Footer />
    </>
  );
}
