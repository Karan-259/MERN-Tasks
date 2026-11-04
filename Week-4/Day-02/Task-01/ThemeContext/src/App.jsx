import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  const [theme, setTheme] = useState("light")

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Home />
    </ThemeContext.Provider >
  )
}

export default App