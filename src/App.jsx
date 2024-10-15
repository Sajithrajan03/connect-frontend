import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Clubs from "./pages/Clubs";
import ClubView from "./pages/ClubView";
import MyProjects from "./pages/MyProjects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* All pages that require a sidebar */}
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
      </Routes>
    </BrowserRouter>
  );
};

// Layout component to include Sidebar
const Layout = ({ children }) => {
  return (
    <div className="font-poppins text-textBlue min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default App;
