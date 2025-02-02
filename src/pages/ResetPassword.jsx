import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/reset-password", {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(true);
        setMessage("Password reset successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setMessage("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-12 border border-gray-200 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500" />
        <div className="text-center mb-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
          >
            Reset Password
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-sm text-gray-600"
          >
            Enter a new password for your account.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
          onSubmit={handleResetPassword}
        >
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
              placeholder="Confirm new password"
            />
          </div>

          <motion.button
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
                <Loader2 className="animate-spin w-5 h-5" />
                <span>Resetting...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span>Reset Password</span>
              </>
            )}
          </motion.button>

          {message && <p className={`text-center text-sm mt-2 ${success ? "text-green-600" : "text-red-600"}`}>{message}</p>}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
