import React from 'react'
import Header from './components/header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>
      </main>
      <Footer/>
    </div>
  )
}

export default App