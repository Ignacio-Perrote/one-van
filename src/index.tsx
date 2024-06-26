import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const rootElement = document.getElementById("root")

if (rootElement){
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
} else {
  console.error("No se ha encontrado el elemento con ID 'root'")
}
