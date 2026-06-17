'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({name:z.string().min(2),email:z.string().email(),company:z.string().optional(),priority:z.string().min(1),subject:z.string().min(3),description:z.string().min(10)});
type FormData = z.infer<typeof schema>;

export default function SupportPage() {
  const [submitted,setSubmitted]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm<FormData>({resolver:zodResolver(schema),defaultValues:{priority:"Medium"}});
  const onSubmit=async(d:FormData)=>{await fetch("/api/support",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});setSubmitted(true);};
  if(submitted)return(<section className="py-20"><div className="mx-auto max-w-lg px-4 text-center"><div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-6"><FontAwesomeIcon icon={faCheck} className="size-10"/></div><h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Ticket Submitted!</h1><p className="text-slate-500 dark:text-slate-400 mb-6">We&apos;ll respond within 4 hours during business hours.</p><a href="/"><Button className="bg-indigo-700 dark:bg-indigo-600">Back Home</Button></a></div></section>);
  return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-3xl font-extrabold mb-2"><FontAwesomeIcon icon={faTicket} className="mr-2"/>Submit a Support Ticket</h1><p className="text-indigo-200">Existing client? Get fast, prioritized support.</p></div></section><section className="py-10 bg-slate-50 dark:bg-slate-950"><div className="mx-auto max-w-2xl px-4"><Card className="glass border-0 dark:bg-slate-900/75"><CardContent className="p-6 sm:p-8"><form onSubmit={handleSubmit(onSubmit)} className="space-y-4"><div className="grid sm:grid-cols-2 gap-4"><div><Label>Name</Label><Input {...register("name")}/><p className="text-red-400 text-xs">{errors.name?.message}</p></div><div><Label>Email</Label><Input {...register("email")}/><p className="text-red-400 text-xs">{errors.email?.message}</p></div></div><div><Label>Company (optional)</Label><Input {...register("company")}/></div><div><Label>Priority</Label><select {...register("priority")} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-sm bg-white dark:bg-slate-800 dark:text-slate-200">{[{v:"Low",l:"🟢 Low"},{v:"Medium",l:"🟡 Medium"},{v:"High",l:"🟠 High"},{v:"Urgent",l:"🔴 Urgent"}].map(p=><option key={p.v} value={p.v}>{p.l}</option>)}</select></div><div><Label>Subject</Label><Input {...register("subject")} placeholder="Brief summary of the issue"/><p className="text-red-400 text-xs">{errors.subject?.message}</p></div><div><Label>Description</Label><Textarea {...register("description")} placeholder="Detailed description, steps to reproduce, error messages..." rows={5}/><p className="text-red-400 text-xs">{errors.description?.message}</p></div><Button type="submit" className="bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 w-full">Submit Ticket</Button></form></CardContent></Card></div></section></>);
}
