import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSpeechSynthesis } from "react-speech-kit"; // Import TTS
import "./Resources.css";

const Resources = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [videoSrc, setVideoSrc] = useState(""); // Manage video source dynamically
  const [recognizedText, setRecognizedText] = useState(""); // Store recognized ISL text
  const { speak } = useSpeechSynthesis(); // Text-to-Speech Hook
  const fetchInterval = useRef(null); // Use useRef to persist interval reference

  // Fetch recognized text from Flask backend
  const fetchRecognizedText = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get_recognized_text");
      const data = await response.json();
      setRecognizedText(data.recognized_text);
    } catch (error) {
      console.error("Error fetching recognized text:", error);
    }
  };
  const [sentence, setSentence] = useState(""); // Store full recognized sentence

const fetchSentence = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/get_sentence");
    const data = await response.json();
    setSentence(data.sentence);
  } catch (error) {
    console.error("Error fetching sentence:", error);
  }
};



<p>Recognized Sentence: {sentence || "Waiting for gestures..."}</p>


  const handleConnect = async () => {
    if (videoActive) return;
    setVideoActive(true);

    try {
      // Stop any previous video feed
      await fetch("http://127.0.0.1:5000/stop_feed", { method: "POST" });

      setTimeout(() => {
        setShowVideo(true);
        setVideoSrc(`http://127.0.0.1:5000/video_feed?t=${Date.now()}`); // Prevent caching
      }, 1000);

      // Start fetching recognized text only when video is active
      if (!fetchInterval.current) {
        fetchInterval.current = setInterval(fetchRecognizedText, 2000);
      }
    } catch (error) {
      console.error("Error starting video feed:", error);
    }
  };

  const handleClose = async () => {
    if (!videoActive) return;
    setVideoActive(false);
    setShowVideo(false);
    setVideoSrc(""); // Clear video source to stop loading

    try {
      await fetch("http://127.0.0.1:5000/stop_feed", { method: "POST" });

      // Stop fetching recognized text when closing the video
      if (fetchInterval.current) {
        clearInterval(fetchInterval.current);
        fetchInterval.current = null; // Reset reference
      }
    } catch (error) {
      console.error("Error stopping video feed:", error);
    }
  };

  const handleSpeech = () => {
    if (sentence) {
      speak({ text: sentence });
    }
  };
  

  // Cleanup function to clear interval when component unmounts
  // Fetch sentence at intervals
   useEffect(() => {
    const interval = setInterval(fetchSentence, 2000);
    return () => clearInterval(interval);
   }, []);

  return (
    <>
      <div className="resources-container">
        <section className="hero">
          <div className="hero-left">
            <h1>ISL LEARNING RESOURCES</h1>
            <p>
              Learn Indian Sign Language with our curated learning materials, interactive modules, and community support.
            </p>
          </div>
          <div className="hero-right">
            <div className="grid">
              <Link to="#interactive-module" className="grid-item">Interactive Module</Link>
              <Link to="#isl-resources" className="grid-item">ISL Resources</Link>
              <Link to="#join-community" className="grid-item">Join the Community</Link>
            </div>
          </div>
        </section>

        {/* Interactive Module Section */}
        <section id="interactive-module" className="section interactive-module">
          <div className="section-left">
            <h2>Interactive Module</h2>
            <p>
              Experience real-time ISL translation powered by AI. Our deep learning model 
              recognizes gestures and converts them into text and speech instantly.
            </p>
          </div>
          <div className="section-right interactive-bg">
            <button className="connect-btn video-btn" onClick={handleConnect}>
              Connect to AI Model
            </button>
          </div>
        </section>

        {/* Video Popup Modal */}
        {showVideo && (
          <div className="video-modal">
            <div className="video-content">
              <button className="close-btn" onClick={handleClose}>&times;</button>
              <h2>Real-Time ISL Gesture Detection</h2>
              <div className="video-box">
                <img 
                  src={videoSrc} // Dynamically manage the source
                  alt="Real-Time Sign Detection" 
                  className="video-stream"
                />
              </div>
              {/* Display recognized gesture */}
              <p>Recognized Gesture: {recognizedText || "Waiting for gesture..."}</p>
              <button className="speech-btn" onClick={handleSpeech}>
                🔊 Speak
              </button>
            </div>
          </div>
        )}

        {/* ISL Resources Section */}
        <section id="isl-resources" className="section isl-resources">
          <div className="section-left">
            <h2>ISL Learning Resources</h2>
            <p>
              Access high-quality ISL tutorials, expert-led videos, and structured courses.
            </p>
          </div>
          <div className="section-right">
            <a 
              href="https://islrtc.nic.in/online-basic-isl-course-in-self-learning-mode/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="connect-btn"
            >
              Visit ISL Resource
            </a>
          </div>
        </section>

        {/* Join the Community Section */}
        <section id="join-community" className="section join-community">
          <div className="section-left">
            <h2>Join the Community</h2>
            <p>
              Engage with ISL learners worldwide! Participate in discussions, share experiences, 
              and grow your knowledge in an interactive environment.
            </p>
            <button className="connect-btn">Join Now</button>
          </div>
          <div className="section-right community-bg">
            <button className="connect-btn">Join Now</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
