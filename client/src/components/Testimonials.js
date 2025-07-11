import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      img: "/images/shiva.jpg",
      text: "This app changed my life!",
      name: "SHIVA CHARAN",
    },
    {
      img: "/images/aroosh.jpg",
      text: "Amazing real-time translation!",
      name: "AROOSH REDDY",
    },
    {
      img: "/images/vikas.jpeg",
      text: "A must-have for ISL learners!",
      name: "VIKAS REDDY",
    },
    {
      img: "/images/beef.jpeg",
      text: "Highly accurate sign recognition!",
      name: "ANUDEEP",
    },
  ];

  return (
    <section className="testimonials">
      <h2>USER TESTIMONIALS</h2>
      <p>See what people are saying about TalkWithSigns</p>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.img} alt={`User ${index + 1}`} className="testimonial-img" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">‘<strong>{testimonial.name}</strong>’</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
