import React, { useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import logo from "../assets/black-logo.png";
import Nologo from "../assets/logo.png";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

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
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
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
    "#FF9F1C",
  ];

  return (
    <div className="relative min-h-screen w-screen max-w-full overflow-x-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={logo} alt="Brandgoto Background Logo" className="w-[60%] object-contain" />
      </motion.div>

      <div className="absolute inset-0 bg-[#023942] opacity-80 z-10"></div>

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center px-4 py-8 min-h-screen"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.img
          src={Nologo}
          alt="Brandgoto Logo"
          className="w-48 sm:w-72 h-auto mb-4 sm:mb-6 main-logo animate__animated animate__fadeInDown"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="flex justify-center mb-4 sm:mb-6 overflow-hidden w-full"
          variants={containerVariants}
          initial="initial"
          animate={["animate", "bounce"]}
        >
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

        <motion.h1
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center animate__animated animate__fadeIn"
        >
          Brandgoto: Something Amazing is Coming!
        </motion.h1>

        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white mb-6 sm:mb-8 text-center max-w-lg"
        >
          <p>Brandgoto is a premier digital and creative agency based in Ontario, Canada, delivering cutting-edge web design, branding, and marketing solutions.</p>
        </motion.div>

        <motion.p
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 text-center max-w-lg"
        >
          We're working hard to create an incredible experience. Stay tuned for our launch!
        </motion.p>

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
            aria-label="Follow Brandgoto on Instagram"
          >
            <FaInstagram size={24} className="sm:size-12" />
          </a>
          <a
            href="https://x.com/Brand_goto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#CFF8FF] transition-colors duration-300"
            aria-label="Follow Brandgoto on X"
          >
            <FaXTwitter size={24} className="sm:size-12" />
          </a>
          <a
            href="https://wa.me/+16479377031?text=Hi%20Brandgoto%20team,%20I’d%20love%20to%20learn%20more%20about%20your%20digital%20and%20creative%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#CFF8FF] transition-colors duration-300"
            aria-label="Chat with Brandgoto on WhatsApp"
          >
            <FaWhatsapp size={24} className="sm:size-12" />
          </a>
        </motion.div>

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