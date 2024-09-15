import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Faq.css";
import vectorImage from "../../assets/z9vkyDW9brw.png"; // Correct path

const Faq = () => {
  const [faqData, setFaqData] = useState([]); // State to hold FAQ data from API
  const [error, setError] = useState(null); // State to handle errors

  // Static fallback data
  const fallbackFaqData = [
    {
      fruit: "Tangerine",
      image: vectorImage, // Correct the way image is assigned
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine is a great health booster due to its high vitamin C content, which supports the immune system and skin health.",
    },
    {
      fruit: "Apple",
      image: vectorImage,
      question: "How is Apple healthy?",
      answer:
        "Apples are high in fiber and vitamin C. They're also low in calories and can promote heart health.",
    },
    {
      fruit: "Banana",
      image: vectorImage,
      question: "How is Banana healthy?",
      answer:
        "Bananas are rich in potassium and provide quick energy, making them great for heart and digestive health.",
    },
    // Add more fruits as needed
  ];

  // Fetch FAQ data from API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(
          "https://fruitaibackend-1.onrender.com/api/faqs"
        );
        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data from API. Using fallback data.");
        setFaqData(fallbackFaqData); // Use fallback data if API fails
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-section">
      <h1>FAQ Section</h1>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Show error if any */}
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="left-hero">
            {/* Use either the image from the API or a fallback */}
            <img
              src={item.image || vectorImage}
              alt={item.fruit}
              className="fruit-image"
            />
            <h3>{item.fruit}</h3>
          </div>
          <div className="right-hero">
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
