import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link> 
      <Link href="/album/1">Album 1</Link>
      <Link href="/search">Search</Link>
    </div>
  )
}

export default Header