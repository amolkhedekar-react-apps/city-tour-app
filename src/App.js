import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tourList/TourList";

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    </div>
  );
}

export default App;
