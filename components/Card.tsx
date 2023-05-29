import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src="https://example.com/album-image.jpg" alt="Album Cover" width={500} height={200} objectFit="cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Album Title</h2>
                <p className="text-gray-600">Artist Name</p>
                <Link href="album/1" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
            </div>
        </div>
  )
}

export default Card