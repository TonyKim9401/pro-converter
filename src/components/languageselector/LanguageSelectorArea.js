import React from "react";
import styles from "./LanguageSelectorArea.module.scss";

function LanguageSelector({ selectedLanguage, setSelectedLanguage }) {
  return (
    <select
      className={styles.selectBox}
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
    >
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="csharp">C#</option>
      <option value="cpp">C++</option>
      <option value="ruby">Ruby</option>
      <option value="swift">Swift</option>
      <option value="php">PHP</option>
      <option value="typescript">TypeScript</option>
      <option value="go">Go</option>
      <option value="rust">Rust</option>
      <option value="kotlin">Kotlin</option>
      <option value="r">R</option>
      <option value="dart">Dart</option>
      <option value="scala">Scala</option>
      <option value="elixir">Elixir</option>
      <option value="haskell">Haskell</option>
      <option value="perl">Perl</option>
      <option value="lua">Lua</option>
      <option value="shell">Shell</option>
    </select>
  );
}

export default LanguageSelector;
