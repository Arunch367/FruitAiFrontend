import React, { useState } from "react";
import "./Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // You can implement actual translation logic here.
    setTranslatedText(`Translated: ${inputText}`);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default Translator;
