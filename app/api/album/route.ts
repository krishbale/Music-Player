
import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
import getAlbums from '../../listofalbum/page';

export async function GET(req:Request, res:Response) {
    const posts = await getAlbums();
    return NextResponse.json(posts);;
   
    
    
    ;
    

    
}