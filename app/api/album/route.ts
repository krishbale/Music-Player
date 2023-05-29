import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
export async function GET(req:NextRequest, res:NextResponse) {
        
    return new Response(JSON.stringify({ name:'john' }),{
        status:401

    } )
    

    
}