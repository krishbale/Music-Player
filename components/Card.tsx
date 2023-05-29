import React from 'react'

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://example.com/album-image.jpg" alt="Album Cover" className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Album Title</h2>
                <p className="text-gray-600">Artist Name</p>
                <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</a>
            </div>
        </div>
  )
}

export default Card