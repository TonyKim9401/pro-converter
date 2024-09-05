import React from "react";
import styles from "./OutputArea.module.scss";

function OutputCode({ outputCode }) {
  return (
    <textarea
      className={styles.OutputCode}
      value={outputCode}
      readOnly
      placeholder="Converted code will appear here..."
    />
  );
}

export default OutputCode;
