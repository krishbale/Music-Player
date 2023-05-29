import React from 'react'

const TrackList = () => {
  return (
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
  )
}

export default TrackList