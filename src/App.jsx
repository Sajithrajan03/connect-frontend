import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* All pages that use the Layout component */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/projectDetails"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
        <Route
          path="/myprojects"
          element={
            <Layout>
              <MyProjects />
            </Layout>
          }
        />
        <Route
          path="/myprofile"
          element={
            <Layout>
              <MyProfile />
            </Layout>
          }
        />
        <Route
          path="/clubs"
          element={
            <Layout>
              <Clubs />
            </Layout>
          }
        />
        <Route
          path="/club/:id"
          element={
            <Layout>
              <ClubView />
            </Layout>
          }
        />
        <Route
          path="/faculty"
          element={
            <Layout>
              <FacultyDashboard />
            </Layout>
          }
        />
        <Route
          path="/chatbot"
          element={
            <Layout>
              <Chatbot />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

// Layout component definition
const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="font-poppins text-textBlue min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Main content with top padding to account for fixed navbar */}
      <main className="p-4 mt-16">
        {children}
      </main>

      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center z-50"
        onClick={() => navigate('/chatbot')}
      >
        <FaRobot className="mr-2" />
        Chatbot
      </button>
    </div>
  );
};

export default App;