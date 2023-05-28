
const axios = require('axios');

import { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler({}) {


try {
	const response = await axios.request(options);
	console.log(response.data);
  return 
   
} catch (error) {
	console.error(error);
 
   
}
}
