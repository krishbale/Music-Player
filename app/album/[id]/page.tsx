'use client'


import TrackList from '@/components/TrackList'
import React from 'react'
import Image from 'next/image'
const Page= ({params}:any) => {
  let arr = [1,2,3,4,5,6,7,8,9,10]
  

  

  return (
  
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 py-16">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
            <Image src="https://example.com/album-cover.jpg" alt="Album Cover" width={64} height={64} className="rounded-full mx-auto" />
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
                  {arr.map((item,index)=>(
                    <TrackList key={index} />
                  ))}
                    
                   
           
                    
           
                   
           
           
                </ul>
            </div>
        </div>
        </div>
   
   
   
  )
}

export default Page;