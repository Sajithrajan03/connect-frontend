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

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  // Check for authentication (you can modify this based on your auth implementation)
  const isAuthenticated = localStorage.getItem("token"); // or any other auth check

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Layout component for authenticated pages
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
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-credentials" element={<Forgotcred />} />
        <Route path="/otp-verification" element={<OTPInput />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projectDetails"
          element={
            <ProtectedRoute>
              <Layout>
                <ProjectDetails />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprojects"
          element={
            <ProtectedRoute>
              <Layout>
                <MyProjects />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute>
              <Layout>
                <MyProfile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs"
          element={
            <ProtectedRoute>
              <Layout>
                <Clubs />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/club/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <ClubView />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/faculty"
          element={
            <ProtectedRoute>
              <Layout>
                <FacultyDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Layout>
                <Chatbot />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Catch all unknown routes and redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;