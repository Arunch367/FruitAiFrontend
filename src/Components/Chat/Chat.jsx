import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  // Fetch the fruits data when the component loads
  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get(
          "https://fruitaibackend-1.onrender.com/api/faqs"
        ); // Replace with your API endpoint
        setFruits(response.data);
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };

    fetchFruits();
  }, []);

  // When a fruit is selected, display its details
  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="chat-container">
      <div className="chat-left">
        {/* List of Fruits as cards */}
        <h2>Fruits List</h2>
        <div className="fruits-list">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="fruit-card"
              onClick={() => handleFruitClick(fruit)}
            >
              <img src={fruit.image} alt={fruit.name} />
              <h3>{fruit.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-right">
        {/* Display the selected fruit details */}
        {selectedFruit ? (
          <div className="fruit-details">
            <img
              src={selectedFruit.image}
              alt={selectedFruit.name}
              className="fruit-detail-image"
            />
            <h2>{selectedFruit.name}</h2>
            <p>{selectedFruit.description}</p>
            <p>
              <strong className="question">Question:</strong>{" "}
              <p className="question">{selectedFruit.question}</p>
              <br />
              <strong>Answer:</strong>
              <p> {selectedFruit.answer}</p>
            </p>
          </div>
        ) : (
          <div className="chatbot">
            <h2>Chat with Fruits AI</h2>
            <div className="chatbot-body">
              {/* Chatbot logic will go here */}
              <p>Ask me about any fruit!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
