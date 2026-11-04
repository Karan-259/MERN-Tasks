import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserProfile from './UserProfile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<h2 style={{color:"red"}}>404 Page Not Found</h2>} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes >
    </div>
  )
}

export default App