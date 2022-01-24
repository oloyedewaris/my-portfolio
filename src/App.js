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
      if (window.pageYOffset > window.innerHeight) {
        setColor("bg-white text-blue-800 media-nav")
      } else {
        setColor("text-white")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className='text-gray-700'>
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
