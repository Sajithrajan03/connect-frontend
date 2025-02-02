import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { Eye, EyeOff, LogIn, ArrowRight, Sparkles } from "lucide-react";
import loginImage from "../assets/login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      console.log(response.data);
      
      // Animate before navigation
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate("/home");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-6 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl flex items-center relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60" />

        {/* Left Side - Image */}
        <motion.div
          variants={itemVariants}
          className="w-1/2 hidden md:flex justify-center items-center p-8 relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={loginImage} alt="Login" className="w-full h-auto object-cover rounded-2xl shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 mb-4"
            >
             
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent tracking-tight"
            >
              Welcome Back
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-sm text-gray-600"
            >
              Log in to access your account
            </motion.p>
          </div>

          <motion.form
            variants={containerVariants}
            className="space-y-6"
            onSubmit={handleLogin}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
                    placeholder="Enter your password"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-indigo-500 transition" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-indigo-500 transition" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl text-white font-medium tracking-wide 
                ${isLoading ? "bg-indigo-400" : "bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400"}
                focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 shadow-lg flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Log In</span>
                </>
              )}
            </motion.button>

            {/* Forgot Password */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-6"
            >
              <Link
                to="/forgot-credentials"
                className="group inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 transition"
              >
                Forgot your username or password?
                <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;