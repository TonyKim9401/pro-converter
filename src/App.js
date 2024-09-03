import React, { useState } from "react";
import CodeConverter from "./components/CodeConverter";

function App() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  function handleConvert() {
    alert("converted!");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <textarea
        style={{ width: "45%", height: "400px" }}
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder="Enter your code here..."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* add programming language options */}
        </select>

        {/* CodeConverter component */}
        <CodeConverter
          inputCode={inputCode}
          selectedLanguage={selectedLanguage}
          onConvert={(convertedCode) => setOutputCode(convertedCode)}
        />
      </div>
      <textarea
        style={{ width: "45%", height: "400px" }}
        value={outputCode}
        readOnly
        placeholder="Converted code will appear here..."
      />
    </div>
  );
}

export default App;
