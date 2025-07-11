import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
  return (
    <>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-text">
          <h1>Vision</h1>
          <p>
            Our mission is to bridge the communication gap between the deaf and
            the hearing community using advanced AI-powered technology. We
            believe in inclusivity, accessibility, and empowerment for all
            individuals. Through real-time sign language translation, we
            provide an intuitive and user-friendly platform that helps break
            down barriers and fosters seamless communication.
          </p>
        </div>
        <div className="vision-image">
          <img src="https://media.istockphoto.com/id/1399208557/photo/little-girl-counting-and-learning-basic-math-while-being-homeschooled-by-her-mother-on-the.jpg?s=612x612&w=0&k=20&c=VhrEYjP7xB3raSkqwpjEBesFApu8VGkXSNi1RFyNRo8=" alt="Deaf People Laughing" />
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/images/shiva.jpg" alt="Founder" />
            <h3>D.SHIVA CHARAN</h3>
            <p>LEAD DEVELOPER</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="technology-section">
        <h2>Our Technology</h2>
        <p>
        We use cutting-edge technology to build an innovative platform that facilitates real-time Indian Sign Language (ISL) translation. Our system integrates computer vision, natural language processing (NLP), web applications, and a dynamic UI to ensure seamless and efficient communication.
        </p>
        <div className="tech-container">
          <div className="tech-box">
            <i className="fas fa-camera"></i>
            <h3>📷Computer Vision</h3>
            <p>Our platform leverages state-of-the-art deep learning models to analyze and interpret hand gestures accurately. Using advanced techniques like Convolutional Neural Networks (CNNs) and Pose Estimation models, we track hand movements and facial expressions in real time. This ensures:
High-precision gesture recognition, even in varying lighting conditions.
Real-time tracking for faster and more accurate translations.
Adaptability to different signing styles and regional variations of ISL</p>
          </div>
          <div className="tech-box">
            <i className="fas fa-language"></i>
            <h3>🗣️Natural Language Processing</h3>
            <p>Once gestures are recognized, they are converted into meaningful text and speech using powerful NLP algorithms. Our system:Understands context and intent to improve translation accuracy.
Generates grammatically correct sentences rather than direct word-for-word translations.
Supports multiple languages, enabling communication across different linguistic backgrounds..</p>
          </div>
          <div className="tech-box">
            <i className="fas fa-globe"></i>
            <h3>🌐Web Application</h3>
            <p>Web Application
To make our platform accessible to everyone, we have built a cross-platform web application that works seamlessly on:
Desktops, tablets, and mobile devices, ensuring ease of use anywhere.
Browsers without requiring additional software or downloads.
Cloud-based infrastructure, allowing users to access translations on the go..</p>
          </div>
          <div className="tech-box">
            <i className="fas fa-paint-brush"></i>
            <h3>🎨Dynamic UI</h3>
            <p>Our modern, aesthetically pleasing, and user-friendly UI enhances accessibility and user experience. Key features include:
Minimalistic and intuitive design, making navigation easy.
Dark and light modes for comfortable use in different environments.
Live feedback system to improve translation quality over time.
Interactive elements for a smooth and engaging user experience.
This version is more detailed, highlights specific technologies used, and ma</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
        <h2>🌍Our Impact</h2>
        <div className="impact-container">
          <div className="impact-box">
            <i className="fas fa-universal-access"></i>
            <h3> 🛠️ Accessibility</h3>
            <p>We believe communication should be barrier-free and available to everyone. Our platform ensures:
Real-time ISL to text and speech translation, making conversations more natural.
Multi-device accessibility, allowing users to connect anytime, anywhere.
Adaptive learning technology that improves accuracy over time based on user feedback.</p>
          </div>
          <div className="impact-box">
            <i className="fas fa-handshake"></i>
            <h3>🤝 Inclusivity</h3>
            <p>Our mission is to bridge the gap between the hearing and non-hearing communities, fostering an inclusive environment where:
Individuals can communicate freely without relying on intermediaries.
Educational institutions and workplaces can integrate ISL accessibility.
More people learn about sign language, fostering greater empathy and understanding.</p>
          </div>
          <div className="impact-box">
            <i className="fas fa-balance-scale"></i>
            <h3>🏛️ Community</h3>
            <p>We aim to strengthen connections between individuals, businesses, and organizations to promote an inclusive society. Our impact extends to:
Helping businesses become more accessible by providing sign language support.
Encouraging workplaces to hire and support deaf employees.
Empowering individuals to engage in everyday conversations without limitations..</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
