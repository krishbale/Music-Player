"use client"
import Card from './components/Card';
import { useGetLatestAlbumQuery } from '@/app/redux/services/rapidapiCore'


const arr = [1,2,3,4,5,6,7,8,9,10]




export default async function Home() {
  const {data,isFetching,error} = useGetLatestAlbumQuery("latest");
  const Top10Latest = data?.albums.items;
// console.log(Top10Latest);


 

  


  return <div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4">Trending Albums</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

     {Top10Latest?.map((item:any,index:any)=>(
  <Card item={item} key={index} />
    ))} 
    
      
   
      </div>
      </div>
}
