import { NextResponse } from "next/server";
export async function POST(req:Request){const d=await req.json();console.log("Support ticket:",d);return NextResponse.json({success:true,message:"Ticket received. We'll respond within 4 hours."});}
