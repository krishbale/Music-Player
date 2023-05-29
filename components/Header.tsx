import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <nav className='bg-blue-500'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
        
          <Link className='text-xl font-bold justify-between' href='/'>Music World</Link>
        <div className='flex space-x-4'>
     
      <Link className='text-white hover:text-gray-200' href="/search">Search</Link>
      </div>
          </div>
        </div>
     
    </nav>
  )
}

export default Header

