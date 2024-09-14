import React from "react";
import styles from "./OutputArea.module.scss";

function OutputCode({ outputCode }) {
  return (
    <div className={styles.container}>
      <div className={styles.charCount}></div>
      <textarea
        className={styles.textarea}
        value={outputCode}
        readOnly
        placeholder="Converted code will appear here..."
      />
    </div>
  );
}

export default OutputCode;
