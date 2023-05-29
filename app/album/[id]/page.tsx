'use client'


import React from 'react'

const Page= ({params}:any) => {
  

  

  return (
  
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 py-16">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <img src="https://example.com/album-cover.jpg" alt="Album Cover" className="w-64 h-64 rounded-full mx-auto"/>
                <h1 className="text-4xl font-bold text-white mt-8">Album Title</h1>
                <p className="text-lg text-gray-200 mt-4">Artist Name</p>
                <div className="flex justify-center mt-8">
                    <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white">Play</button>
                </div>
            </div>
        </div>
        <div className="container mx-auto mt-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl text-white font-bold mb-4">Tracklist</h2>
                <ul>
                    <li className="flex items-center justify-between py-4 border-b border-gray-400">
                        <div className="flex items-center">
                            <span className="text-white mr-4">01.</span>
                            <div>
                                <h3 className="text-white font-bold">Track 1</h3>
                                <p className="text-gray-300">Artist Name</p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-500 hover:text-blue-300">Play</a>
                    </li>
                    <li className="flex items-center justify-between py-4 border-b border-gray-400">
                        <div className="flex items-center">
                            <span className="text-white mr-4">01.</span>
                            <div>
                                <h3 className="text-white font-bold">Track 1</h3>
                                <p className="text-gray-300">Artist Name</p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-500 hover:text-blue-300">Play</a>
                    </li>
           
                    <li className="flex items-center justify-between py-4 border-b border-gray-400">
                        <div className="flex items-center">
                            <span className="text-white mr-4">01.</span>
                            <div>
                                <h3 className="text-white font-bold">Track 1</h3>
                                <p className="text-gray-300">Artist Name</p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-500 hover:text-blue-300">Play</a>
                    </li>
           
                    <li className="flex items-center justify-between py-4 border-b border-gray-400">
                        <div className="flex items-center">
                            <span className="text-white mr-4">01.</span>
                            <div>
                                <h3 className="text-white font-bold">Track 1</h3>
                                <p className="text-gray-300">Artist Name</p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-500 hover:text-blue-300">Play</a>
                    </li>
           
           
                </ul>
            </div>
        </div>
        </div>
   
   
   
  )
}

export default Page;