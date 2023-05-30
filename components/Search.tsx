import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

const Search = () => {
    const [query,setQuery] = useState('')
    const router = useRouter();
   const handlesubmit = (e:any) => {
    if(e.key === 'Enter'){
      router.push(`/search/${query}`)
    }
   }
  
  return (
                  
                    <div className="flex items-center border-b-2 border-blue-500 py-2">
                        <input 
                        
                        autoComplete='on'
                        id='search-field'
                        onChange={(e) => setQuery(e.target.value)}
                        tabIndex={1}
                        onKeyDown={handlesubmit}
                         className="appearance-none bg-transparent border-none w-full text-gray-1000 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="search"
                          
                           placeholder="Search..."/>
                          {/* <input type='submit' onClick={()=> router.push(`/search/${query}`)} value='Search' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />  */}
                        <Link href={`/search/${query}`} type='submit'>Search</Link>
                    </div>
                
  )
}

export default Search