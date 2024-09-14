import React, { useState } from "react";
import styles from "./InputArea.module.scss";

function InputCode({ inputCode, setInputCode }) {
  const [charCount, setCharCount] = useState(inputCode.length);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputCode(newValue);
    setCharCount(newValue.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.charCount}>{charCount} / 4096 characters</div>
      <textarea
        className={styles.textarea}
        value={inputCode}
        onChange={handleChange}
        placeholder="Enter your code here... The character limit is 4096."
        maxLength="4096"
      />
    </div>
  );
}

export default InputCode;
