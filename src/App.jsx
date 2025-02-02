import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Forgotcred from "./pages/Forgotcred";
import OTPInput from "./pages/OTPInput";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Clubs from "./pages/Clubs";
import ClubView from "./pages/ClubView";
import MyProjects from "./pages/MyProjects";
import Chatbot from "./pages/Chatbot";
import MyProfile from "./pages/MyProfile";
import { FaRobot } from "react-icons/fa";
import FacultyDashboard from "./pages/FacultyDashboard";
import Connect from "./pages/Connect";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); 
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};


const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="font-poppins text-textBlue min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <main className="p-4 mt-16">{children}</main>
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center z-50"
        onClick={() => navigate('/chatbot')}
      >
        <FaRobot className="mr-2" />
        Chatbot
      </button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/connect" replace />} />

        {/* Public Routes */}
        <Route path="/connect" element={<Connect />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-credentials" element={<Forgotcred />} />
        <Route path="/otp-verification" element={<OTPInput />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* 🆓 Home is now public */}
        <Route path="/home" element={<Layout><Home /></Layout>} />

        {/* Protected Routes */}
        <Route path="/projects" element={ <Layout><Projects /></Layout> } />
        <Route path="/projectDetails" element={ <Layout><ProjectDetails /></Layout> } />
        <Route path="/myprojects" element={ <Layout><MyProjects /></Layout> } />
        <Route path="/myprofile" element={ <Layout><MyProfile /></Layout> } />
        <Route path="/clubs" element={ <Layout><Clubs /></Layout> } />
        <Route path="/club/:id" element={ <Layout><ClubView /></Layout> } />
        <Route path="/faculty" element={ <Layout><FacultyDashboard /></Layout> } />
        <Route path="/chatbot" element={ <Layout><Chatbot /></Layout> } />

        {/* Catch-all unknown routes */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
