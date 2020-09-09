import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
