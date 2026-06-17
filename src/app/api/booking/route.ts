import { NextResponse } from "next/server";
export async function POST(req:Request){const d=await req.json();console.log("Booking:",d);return NextResponse.json({success:true,message:"Booking confirmed."});}
