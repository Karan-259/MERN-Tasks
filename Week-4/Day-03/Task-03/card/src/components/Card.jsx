import React from 'react'

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="p-4 shadow-lg rounded-xl bg-white hover:scale-105 transition">
        <h2 className="text-lg font-semibold">Card Title</h2>
        <p className="text-gray-600 mt-2">Card content goes here...</p>
      </div>
    </div>
  )
}

export default Card