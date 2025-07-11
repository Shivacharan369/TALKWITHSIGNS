import React from "react";
import "./KeyOfferings.css";

const KeyOfferings = () => {
  return (
    <section className="offerings">
      <div className="left">
        <h2>Key Offerings For You</h2>
        <p>
          Our website offers a comprehensive platform for learning and translating Indian Sign Language (ISL) in real time.
          With AI-powered gesture recognition, interactive learning modules, and expert-curated resources, we bridge the communication
          gap for the deaf and hard-of-hearing community. Users can access structured ISL courses, engage with a vibrant community, 
          and leverage cutting-edge technology for seamless text and speech translation. Whether you're a beginner or an advanced learner, 
          our platform provides the tools and support needed to master ISL effectively.
        </p>
      </div>

      <div className="right">
        <div className="card">
          <h3>🗣️ Multimodal Communication</h3>
          <p>Our platform seamlessly integrates text, speech, and Indian Sign Language (ISL) translation, making communication more inclusive and accessible. Whether you're interacting in real-time or learning ISL, our AI-powered system ensures smooth transitions between different communication modes, catering to diverse user needs.</p>
        </div>
        <div className="card">
          <h3>🔄 Real-life Translation</h3>
          <p>Experience instant ISL-to-text and speech translation with our cutting-edge AI. Our system accurately detects and interprets sign language gestures, converting them into readable text or spoken words. This feature enhances accessibility for the deaf and hard-of-hearing community, ensuring effective communication in daily interactions.</p>
        </div>
        <div className="card">
          <h3>💻 Web-based Application</h3>
          <p>Access ISL learning and translation tools anytime, anywhere through our user-friendly web platform. No need for additional software or downloads—simply connect online to practice ISL, translate gestures, and engage with a supportive community. Designed for convenience, our platform works seamlessly across devices.</p>
        </div>
        <div className="card">
          <h3>📢 Enhancing Through Feedback</h3>
          <p>Our AI model continuously learns and improves based on user input and feedback. By incorporating community-driven enhancements, we ensure higher accuracy in ISL recognition and translation. Your interactions help refine the system, making it more effective for future users while bridging the communication gap.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyOfferings;
