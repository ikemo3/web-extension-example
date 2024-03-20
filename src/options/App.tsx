import type { Component } from "solid-js";

import styles from "./App.module.css";
import logo from "./logo.svg";

const url = import.meta.env.DEV ? chrome.runtime.getURL(logo) : logo;

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={url} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/options/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
