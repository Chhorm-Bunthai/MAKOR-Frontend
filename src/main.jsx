import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/authContext";
import App from "./App.jsx";
import Navbar from "./component/Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Provider value={7}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
