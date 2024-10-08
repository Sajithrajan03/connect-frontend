import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Projects from './pages/Projects'; // Import Projects page
import Sidebar from './components/Sidebar'; // Ensure Sidebar is imported

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* All pages that require a sidebar */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

// Layout component to include Sidebar
const Layout = ({ children }) => {
  return (
    <div className="font-poppins text-textBlue min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default App;
