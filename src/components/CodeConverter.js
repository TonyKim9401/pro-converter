// src/components/CodeConverter.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CodeConverter = ({ inputCode, selectedLanguage, onConvert }) => {
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const loadApiKey = async () => {
      try {
        const response = await fetch("/config/ApiKey.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApiKey(data.openai_api_key);
      } catch (error) {
        console.error("Error loading API key:", error);
      }
    };

    loadApiKey();
  }, []);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const convertedCode = await convertCode(inputCode, selectedLanguage);
      onConvert(convertedCode);
    } catch (error) {
      onConvert("Error converting code.");
    } finally {
      setLoading(false);
    }
  };

  const convertCode = async (code, language) => {
    const endpoint = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await axios.post(
        endpoint,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." }, // System message
            {
              role: "user",
              content: `Convert the following code to ${language}:\n\n${code}`,
            }, // user message
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error converting code:", error);
      throw error;
    }
  };

  return (
    <div>
      <button onClick={handleConvert} disabled={loading}>
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
};

export default CodeConverter;
