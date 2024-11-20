import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode state
  function handleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Set the class name based on the dark mode state
  const modeClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={modeClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
