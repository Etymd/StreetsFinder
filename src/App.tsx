import React from "react";
import { Header, Sidebar, News, Address } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: "flex" }}>
                <Sidebar />
                <News />
                <div className="border"></div>
              </div>
            }
          />
          <Route
            path="/address"
            element={
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Address />
                <div className="border-address"></div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
