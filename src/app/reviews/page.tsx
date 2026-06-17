import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Reviews" };

const reviews = [
  {name:"Sarah J.",role:"Small Business Owner",text:"TechServe Pro handles all our IT — network, email, security. Zero downtime in 18 months. Game changer.",rating:5},{name:"Marcus T.",role:"Homeowner",text:"Smart home setup was flawless. They explained everything in plain English and came back to tweak settings at no charge.",rating:5},{name:"River Coffee Co.",role:"3-Location Cafe",text:"Our website redesign and social media management have been incredible. Online orders up 40%.",rating:5},{name:"Dr. Patel",role:"Dental Practice",text:"HIPAA-compliant IT setup, cloud migration, and ongoing support. Professional and knowledgeable.",rating:5},{name:"The Carters",role:"Family of 4",text:"Fixed 3 laptops, set up parental controls, and installed our mesh WiFi. One-stop shop for everything tech.",rating:5},{name:"Oak & Iron",role:"Retail Store",text:"E-commerce site, POS integration, and Instagram management. Sales up 35% since we partnered.",rating:5},
];

export default function ReviewsPage(){return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Client Reviews</h1><p className="text-indigo-200 text-lg">150+ happy business clients and thousands of residential customers.</p></div></section><section className="py-16 bg-slate-50 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{reviews.map(r=>(<Card key={r.name} className="glass border-0 dark:bg-slate-900/75"><CardContent className="p-6"><div className="flex gap-1 mb-3">{Array.from({length:r.rating}).map((_,i)=><FontAwesomeIcon key={i} icon={faStar} className="size-4 text-lime-400"/>)}</div><p className="text-slate-600 dark:text-slate-300 mb-4 italic">&ldquo;{r.text}&rdquo;</p><p className="font-semibold text-slate-900 dark:text-white">{r.name}</p><p className="text-sm text-slate-400 dark:text-slate-500">{r.role}</p></CardContent></Card>))}</div></div></section></>);}
