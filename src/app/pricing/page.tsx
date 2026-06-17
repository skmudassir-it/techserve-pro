import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Pricing" };

const pricing = [
  {cat:"Repair & Installation",items:[{name:"Diagnostic",price:"Free"},{name:"Screen Repair",price:"$89–$249"},{name:"Virus/Malware Removal",price:"$79"},{name:"Data Recovery",price:"$149+"},{name:"Smart Home — Single Device",price:"$79"},{name:"Smart Home — 3-Pack",price:"$199"},{name:"Full Home Smart Setup",price:"$499+"}]},
  {cat:"Monthly Plans",items:[{name:"IT Support — Basic",price:"$299/mo"},{name:"IT Support — Pro",price:"$599/mo"},{name:"IT Support — Enterprise",price:"$1,199/mo"},{name:"Web/Social — Starter",price:"$399/mo"},{name:"Web/Social — Growth",price:"$799/mo"},{name:"Web/Social — Premium",price:"$1,499/mo"}]},
];

export default function PricingPage(){return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Transparent Pricing</h1><p className="text-indigo-200 text-lg">No hidden fees. All diagnostics are free.</p></div></section><section className="py-16 bg-slate-50 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-2">{pricing.map(p=>(<Card key={p.cat} className="glass border-0 dark:bg-slate-900/75"><CardContent className="p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{p.cat}</h2><div className="space-y-2">{p.items.map(i=>(<div key={i.name} className="flex justify-between items-center py-2.5 border-b border-indigo-50 dark:border-slate-800 last:border-0"><span className="text-slate-700 dark:text-slate-300">{i.name}</span><span className="font-bold text-indigo-600 dark:text-cyan-400 text-lg">{i.price}</span></div>))}</div></CardContent></Card>))}</div><div className="text-center mt-10"><p className="text-slate-500 dark:text-slate-400 mb-4">See our <Link href="/plans" className="text-indigo-600 dark:text-cyan-400 font-semibold underline">Plans & Retainers</Link> page for detailed feature comparisons.</p><Link href="/booking"><Button size="lg" className="bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600">Book a Tech</Button></Link></div></div></section></>);}
