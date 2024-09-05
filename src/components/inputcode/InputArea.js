import React from "react";
import styles from "./InputArea.module.scss";

function InputCode({ inputCode, setInputCode }) {
  return (
    <textarea
      className={styles.textarea}
      value={inputCode}
      onChange={(e) => setInputCode(e.target.value)}
      placeholder="Enter your code here..."
    />
  );
}

export default InputCode;
