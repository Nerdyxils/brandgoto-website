import React, { useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import logo from "../assets/black-logo.png";
import Nologo from "../assets/logo.png";

function Home() {
  const [email, setEmail] = useState(""); // State to store email input
  const [message, setMessage] = useState(""); // Message for user feedback
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission status

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/brandgoto2024@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you! You'll be notified soon. 🎉");
        setEmail(""); // Reset email input
      } else {
        setMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      setMessage("Error sending request. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={logo} alt="Brand Logo Background" className="w-[60%] object-contain" />
      </motion.div>

      {/* Solid Background Color */}
      <div className="absolute inset-0 bg-[#023942] opacity-80 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <motion.img src={Nologo} alt="Brand Logo" className="w-75 h-auto mb-6 main-logo" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} />

        {/* Headline */}
        <motion.h1 className="text-5xl font-bold text-white mb-4 text-center" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          Something Amazing is Coming!
        </motion.h1>

        {/* Subheading */}
        <motion.p className="text-xl text-white mb-8 text-center max-w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          We're working hard to create an incredible experience. Stay tuned for our launch!
        </motion.p>

        {/* Email Subscription Form */}
        <motion.form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-3 rounded-full text-black w-72 focus:outline-none bg-white shadow-lg focus:ring-2 focus:ring-[#F75F0B]"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button type="submit" disabled={isSubmitting} className="mt-4 sm:mt-0 sm:ml-4 px-8 py-3 rounded-full bg-[#F75F0B] text-white font-semibold shadow-lg hover:bg-[#CFF8FF] transition-colors duration-300" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </motion.button>
        </motion.form>

        {/* Success/Error Message */}
        {message && <p className="text-white mt-4">{message}</p>}

        {/* Social Media Links */}
        <motion.div className="mt-8 flex space-x-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <a href="https://www.instagram.com/brand_goto/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#CFF8FF]">
            Instagram
          </a>
          <a href="https://x.com/Brand_goto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#CFF8FF]">
            Twitter (X)
          </a>
        </motion.div>
        <motion.div className="mt-8 flex space-x-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <p className="text-white">For more information, email: info@brandgoto.com</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
