import React from "react";
import { motion } from "framer-motion";
import KeyOfferings from "../components/KeyOfferings";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            EMPOWERING COMMUNICATION
          </motion.h1>
          <p>
            Bridging the gap between sign language and spoken language through real-time AI-powered translation.  
            <b> TalkWithSigns </b> enables seamless communication for the deaf and hard-of-hearing, making everyday interactions inclusive.
          </p>
          <motion.button 
            className="explore-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.location.href = "/resources"}
          >
            Explore More
          </motion.button>
        </motion.div>
      </section>

      <KeyOfferings />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
