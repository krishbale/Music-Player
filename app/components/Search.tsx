import Link from 'next/link'
import React, {  useState } from 'react'

const Search = () => {
    const [query,setQuery] = useState('')
 
  return (
                     <form >
                    <div className="flex items-center border-b-2 border-blue-500 py-2">
                        <input 
                        autoComplete='off'
                        id='search-field'
                        onChange={(e) => setQuery(e.target.value)}
                       
                         className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="search"
                          
                           placeholder="Search..."/>
                        <Link href={`/search/${query}`} >Search</Link>
                    </div>
                </form>
  )
}

export default Search