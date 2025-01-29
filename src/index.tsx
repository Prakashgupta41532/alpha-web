import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure the element exists before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure you have an element with id='root' in your index.html.");
}
