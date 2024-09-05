import React, { useState } from "react";
import InputCode from "../components/inputcode/InputArea";
import OutputCode from "../components/outputcode/OutputArea";
import LanguageSelector from "../components/languageselector/LanguageSelectorArea";
import CodeConverter from "../components/codeconverter/CodeConverterArea";
import styles from "./MainPage.module.scss";

function MainPage() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  return (
    <div className={styles.container}>
      {/* InputCode component */}
      <div className={styles.inputArea}>
        <InputCode inputCode={inputCode} setInputCode={setInputCode} />
      </div>

      <div className={styles.language}>
        {/* LanguageSelector component */}
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      <div className={styles.converter}>
        {/* CodeConverter component */}
        <CodeConverter
          inputCode={inputCode}
          selectedLanguage={selectedLanguage}
          onConvert={(convertedCode) => setOutputCode(convertedCode)}
        />
      </div>

      {/* OutputCode component */}
      <div className={styles.outputArea}>
        <OutputCode outputCode={outputCode} />
      </div>
    </div>
  );
}

export default MainPage;
