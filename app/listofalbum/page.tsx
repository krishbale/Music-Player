export default async function getAlbums  ()  {
    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
    const options = {
        Cache: 'no-store',
        next:{revalidate:10},
       

        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2166e5ee50mshb44814e1e30f602p1c1f78jsn6f22a53afbad',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
    
}





// export default async function listofalbum(){
//     const posts = await getAlbums();
//     console.log(posts);
//     return (
//         <div>
//             <h1>Album list is{JSON.stringify(posts)} </h1>
//         </div>
//     )


// } 


