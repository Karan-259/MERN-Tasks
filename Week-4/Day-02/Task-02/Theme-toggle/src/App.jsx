import React from 'react'
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App