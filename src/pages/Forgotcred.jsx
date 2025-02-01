import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forgotcred = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/forgot-credentials", { email });

      if (response.data.success) {
        setMessage("A verification code has been sent to your email.");
        setTimeout(() => {
          navigate("/otp-verification", { state: { email } });
        }, 1500);
      } else {
        setError(response.data.message || "Failed to send recovery email.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 transition-all duration-300">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Forgot Credentials?</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your university email to reset your credentials.</p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-6" onSubmit={handleResetRequest}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              University Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Enter your university email"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-xl text-white font-medium tracking-wide 
              ${isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105"}
              focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 shadow-lg`}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Send OTP Code"
            )}
          </button>

          {/* Success/Error Messages */}
          {message && <p className="text-center text-sm text-green-600 mt-2">{message}</p>}
          {error && <p className="text-center text-sm text-red-600 mt-2">{error}</p>}

          {/* Back to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                Back to Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotcred;
