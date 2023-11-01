import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <MainMenu />
    </Router>
  );
}

export default App;
