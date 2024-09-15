import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import translate from "../../assets/g_translate.png";
import gp from "../../assets/Group copy.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="fruit-heading">Fruit.AI</h1>
      <h2 className="fruit-heading2">"Be Healthy!"</h2>
      <div className="service-buttons">
        <button
          className="service-btn chat-btn"
          onClick={() => navigate("/chat")}
        >
          Chat
        </button>
        <button className="service-btn green"></button>
        <button className="service-btn yellow"></button>

        <button
          className="service-btn translator-btn"
          onClick={() =>
            window.open(
              "https://translate.google.co.in/?sl=auto&tl=en&op=translate",
              "_self"
            )
          }
        >
          <img src={translate} alt="Translate" />
        </button>
        <button
          className="service-btn faq-btn"
          onClick={() => navigate("/faq")}
        >
          FAQs
        </button>
        <button
          className="service-btn about-btn"
          onClick={() => navigate("/about")}
        >
          About
        </button>
      </div>
      <div className="image-section">
        <img src={gp} alt="Group Illustration" />
      </div>

      <button
        className="service-btn logout-btn"
        onClick={() => {
          localStorage.removeItem("loginData");
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
