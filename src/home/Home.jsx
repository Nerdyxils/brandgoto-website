import React, { useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import logo from "../assets/black-logo.png";
import Nologo from "../assets/logo.png";
// import { FaInstagram, FaXTwitter } from "react-icons/fa"; 
import { FaInstagram, FaXTwitter } from "react-icons/fa6";// Updated to FaXTwitter

function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/brandgoto2024@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("Thank you! You'll be notified soon. 🎉");
        setEmail("");
      } else {
        setMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      setMessage("Error sending request. Please try again.");
    }
    setIsSubmitting(false);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const brandName = "BRANDGOTO";
  const letterColors = [
    "#F75F0B",
    "#FF8C42",
    "#FFD166",
    "#06D6A0",
    "#1B9AAA",
    "#EF476F",
    "#118AB2",
    "#073B4C",
    "#F4A261",
  ];

  return (
    <div className="relative min-h-screen w-screen max-w-full overflow-x-hidden">
      {/* Background Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={logo} alt="Brand Logo Background" className="w-[60%] object-contain" />
      </motion.div>

      {/* Solid Background Color */}
      <div className="absolute inset-0 bg-[#023942] opacity-80 z-10"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center px-4 py-8 min-h-screen"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.img
          src={Nologo}
          alt="Brand Logo"
          className="w-48 sm:w-72 h-auto mb-4 sm:mb-6 main-logo animate__animated animate__fadeInDown"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Animated Brand Name */}
        <motion.div className="flex justify-center mb-4 sm:mb-6 overflow-hidden" variants={containerVariants}>
            {brandName.split("").map((letter, index) => (
                <motion.span
                key={index}
                variants={letterVariants}
                style={{ color: letterColors[index] }}
                className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
                >
                {letter}
                </motion.span>
            ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center animate__animated animate__fadeIn"
        >
          Something Amazing is Coming!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 text-center max-w-lg"
        >
          We're working hard to create an incredible experience. Stay tuned for our launch!
        </motion.p>

        {/* Email Subscription Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 w-full max-w-md"
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-black w-full sm:w-72 focus:outline-none bg-white shadow-lg focus:ring-2 focus:ring-[#F75F0B] animate__animated animate__fadeIn mb-4 sm:mb-0"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-[#F75F0B] text-white font-semibold shadow-lg hover:bg-[#CFF8FF] transition-colors duration-300 animate__animated animate__fadeIn sm:ml-4"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(247, 95, 11, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </motion.button>
        </motion.form>

        {/* Success/Error Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white mt-4 mb-6 sm:mb-8"
          >
            {message}
          </motion.p>
        )}

        {/* Social Media Icons */}
        <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 sm:mt-8 flex flex-row space-x-6"
            >
            <a
                href="https://www.instagram.com/brand_goto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CFF8FF] transition-colors duration-300"
                aria-label="Follow us on Instagram"
            >
                <FaInstagram size={24} className="sm:size-12" />
            </a>
            <a
                href="https://x.com/Brand_goto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CFF8FF] transition-colors duration-300"
                aria-label="Follow us on X"
            >
                <FaXTwitter size={24} className="sm:size-12" />
            </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 sm:mt-8 mb-6 sm:mb-8 flex space-x-6"
        >
          <p className="text-white text-sm sm:text-base">For more information, email: info@brandgoto.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;