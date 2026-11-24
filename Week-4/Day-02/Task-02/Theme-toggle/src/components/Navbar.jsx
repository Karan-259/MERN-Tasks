import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            <nav className={`navbar ${theme}`}>
                <h2 style={{color:"red"}}>My Website</h2>

                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? "🌙":"☀️"}
                </button>
            </nav>
        </div>
    )
}

export default Navbar