"use client"

import Card from '@/app/components/Card'
import { useGetSearchAlbumQuery } from '@/app/redux/services/rapidapiCore'
import React, { use, useState } from 'react'

const Page = ({params}:any) => {
  const searchterm = params.query
  console.log(searchterm);
  const {data,isFetching,error} = useGetSearchAlbumQuery(searchterm);

    

if(isFetching) return <div>Loading...</div>
if(error) return <div>Error Occured</div>

   
    const Top20Search = data?.albums.items;
    console.log(Top20Search);
   
 
  return (
    <>
    <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <h1 className="text-xl font-bold mb-4">Search Result for: {searchterm}</h1>
        <div className="flex justify-center">
            <div className="w-full max-w-lg">
        
            </div>
        </div>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">



        {Top20Search?.map((item:any,index:any)=>(
            <Card item={item} key={index} />
                ))}
        </div>
    </div>
</div>
    
    </>
    
  )
}

export default Page


