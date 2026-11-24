import React from 'react'

const Card = () => {
    return (
        <div class="max-w-sm m-5 p-4 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <h3 class="text-xl font-semibold">React Training</h3>

            <p class="text-gray-600 mt-2">
                Learn React with hands-on examples and real projects.
            </p>

            <input
                placeholder="Enter your email"
                class="mt-3 border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 transition w-full"
            />
            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Read More
            </button>
        </div>
    )
}

export default Card