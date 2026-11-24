import React from 'react'
import Greetings from './components/Greetings'

const App = () => {
  return (
    <div>
      <Greetings name="Priya" topic="React Components" />
      <Greetings name="Rohan" topic="JSX & Props" />
    </div>
  )
}

export default App