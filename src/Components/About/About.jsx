import React from "react";
import "./About.css";
import vectorImage from "../../assets/Vector.png";

const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <div className="vector-icons">
          <span>
            <img src={vectorImage} alt="vector icon" />
          </span>
          <span>
            <img src={vectorImage} alt="vector icon" />
          </span>
          <span>
            <img src={vectorImage} alt="vector icon" />
          </span>
        </div>
        <div className="about-card">
          <h1>Fruit.AI</h1>
          <p>
            Whether you're looking to discover new fruits, understand their
            nutritional values, or find the perfect fruit for your diet, our
            AI-driven chatbot is here to assist. We provide personalized fruit
            recommendations tailored to your health needs, making it easier for
            you to integrate the best fruits into your daily routine.
          </p>
          <button className="about-button">ABOUT</button>
        </div>
      </div>
    </div>
  );
};

export default About;
