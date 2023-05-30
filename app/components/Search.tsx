import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

const Search = () => {
    const [query,setQuery] = useState('')
    const router = useRouter();
    
 
  return (
                     <form action={() => router.push(`/search/${query}`)} >
                    <div className="flex items-center border-b-2 border-blue-500 py-2">
                        <input 
                        autoComplete='off'
                        id='search-field'
                        onChange={(e) => setQuery(e.target.value)}
                       
                         className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="search"
                          
                           placeholder="Search..."/>
                        <button type='submit'>Search</button>
                    </div>
                </form>
  )
}

export default Search