import Card from "@/components/Card";
const arr = [1,2,3,4,5,6,7,8,9,0]

export default async function Home() {
  


  return <div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4">Trending Albums</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

    {arr.map((item,index)=>(
  <Card key={index} />
    ))}
    
      
   
      </div>
      </div>
}
