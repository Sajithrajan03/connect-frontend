import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  // Handle OTP Input Change & Auto Focus
  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Prevent non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle OTP Submission
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const otpCode = otp.join(""); // Convert OTP array to string
    if (otpCode.length !== 6) {
      setMessage("Please enter all 6 digits.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", {
        email,
        otp: otpCode,
      });

      if (response.data.success) {
        navigate("/reset-password", { state: { email } });
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 transition-all duration-300">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Enter OTP Code</h2>
          <p className="mt-2 text-sm text-gray-600">A 6-digit code has been sent to your email.</p>
        </div>

        {/* OTP Input Fields */}
        <form className="mt-6 space-y-6" onSubmit={handleVerifyOTP}>
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-xl text-white font-medium tracking-wide 
              ${isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105"}
              focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 shadow-lg`}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* Error Message */}
          {message && <p className="text-center text-sm text-red-600 mt-2">{message}</p>}

          {/* Back to Forgot Credentials */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <a href="/forgot-credentials" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-200">
                Resend OTP Code
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
