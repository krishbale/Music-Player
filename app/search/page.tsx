import Card from '@/components/Card'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Search Result</h1>
        <div className="flex justify-center">
            <div className="w-full max-w-lg">
                <form>
                    <div className="flex items-center border-b-2 border-blue-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..."/>
                        <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            
            <Card />
        </div>
    </div>
</div>
    
    </>
    
  )
}

export default page