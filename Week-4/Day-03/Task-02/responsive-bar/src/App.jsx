import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">MySite</h1>

        <ul className="text-sm md:text-lg lg:text-xl md:flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="md:hidden">☰</button>
      </nav>
    </div>
  )
}

export default App