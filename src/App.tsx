import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./components/home/Home";
//import Results from "./components/results/Results";
//import Footer from "./components/Footer/Footer";

const used = ()=>{
  return (`
    Used Inventory
`)
}
const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

const handleShowNavbar = ()=>{
  setShowNavbar(!showNavbar)
  
}

const Logo = () => (
  <img src="https://www.autoreconcollision.com/logo.webp" height="33%" width="33%" className="logo"
    />
);




const Home = () => <h2>You are in the Home</h2>;
const Blogs = () => <h2>You are in the {used()}</h2>;
const Projects = () => <h2>You are in the Projects</h2>;
const About = () => <h2>You are in the About</h2>;
const Contact = () => <h2>You are in the Contact</h2>;

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="orange"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="orange"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="orange"
      />
    </g>
  </svg>
);



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <MainMenu />
    </Router>
  );
}

export default App;
