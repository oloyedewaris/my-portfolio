import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Navbar/Slider";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setColor("bg-blue-900")
      } else {
        setColor("")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Header color={color} />
      <Slider />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
