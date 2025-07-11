import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>GET IN TOUCH WITH US</h2>
      <form>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>© 2025 Built by Coders Crew</p>
    </footer>
  );
};

export default Footer;
