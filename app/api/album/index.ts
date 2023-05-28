import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/albums/',
        params: {
          ids: '3IBcauSj5M2A6lTeffJzdv'
        },
        headers: {
          'X-RapidAPI-Key': '2166e5ee50mshb44814e1e30f602p1c1f78jsn6f22a53afbad',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

    try{
        if(req.method !== "GET") throw new Error("Method not allowed");
        const response = await axios.request(options);
        console.log(response.data);
        return res.status(200).json(response.data);
        

    }catch(err){
        console.log(err);
        return res.status(500).end();
    }
}