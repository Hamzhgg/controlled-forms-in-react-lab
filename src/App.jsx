import React from "react";
import "./App.css";
import "./index.css";
import Bookshelf from "./components/Bookshelf";

const App = () => {
  return (
    <div className="App">
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
  );
};

export default App;
