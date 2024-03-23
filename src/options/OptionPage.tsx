import { Component, createSignal } from "solid-js";

const OptionPage: Component = () => {
  const [currentTab, setCurrentTab] = createSignal("tab1");

  return (
    <div>
      <div>
        <button onClick={() => setCurrentTab("tab1")}>Tab 1</button>
        <button onClick={() => setCurrentTab("tab2")}>Tab 2</button>
      </div>

      {currentTab() === "tab1" && <div>Content of Tab 1</div>}
      {currentTab() === "tab2" && <div>Content of Tab 2</div>}
    </div>
  );
};

export default OptionPage;
