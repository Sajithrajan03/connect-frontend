import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
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

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const otpCode = otp.join("");
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
            Enter OTP Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-sm text-gray-600"
          >
            A 6-digit code has been sent to your email.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
          onSubmit={handleVerifyOTP}
        >
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
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" />
                <span>Verify OTP</span>
              </>
            )}
          </motion.button>

          {message && <p className="text-center text-sm text-red-600 mt-2">{message}</p>}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-center mt-6">
            <a href="/forgot-credentials" className="group inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 transition">
              Resend OTP Code
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default OTPInput;