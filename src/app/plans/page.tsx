import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Plans & Retainers" };

const itPlans = [
  {feature:"Devices Supported",basic:"Up to 5",pro:"Up to 20",enterprise:"Unlimited"},
  {feature:"Helpdesk Support",basic:"Business Hours",pro:"Extended Hours",enterprise:"24/7 Priority"},
  {feature:"Remote Support",basic:true,pro:true,enterprise:true},
  {feature:"On-Site Visits",basic:false,pro:"2/month",enterprise:"Unlimited"},
  {feature:"Cybersecurity Suite",basic:false,pro:true,enterprise:"Advanced"},
  {feature:"Cloud Management",basic:false,pro:true,enterprise:true},
  {feature:"Backup & Recovery",basic:false,pro:true,enterprise:true},
  {feature:"vCIO Consulting",basic:false,pro:false,enterprise:"Quarterly"},
  {feature:"Response SLA",basic:"< 4 hrs",pro:"< 2 hrs",enterprise:"< 1 hr"},
];
const smPlans = [
  {feature:"Website Pages",starter:"5 pages",growth:"10 pages",premium:"Custom"},
  {feature:"Social Platforms",starter:"2",growth:"4",premium:"All"},
  {feature:"SEO Optimization",starter:"Basic",growth:"Advanced",premium:"Full Suite"},
  {feature:"Content Creation",starter:"4 posts/mo",growth:"12 posts/mo",premium:"Daily"},
  {feature:"Analytics Reports",starter:"Monthly",growth:"Bi-Weekly",premium:"Weekly"},
  {feature:"Ad Management",starter:false,growth:false,premium:true},
  {feature:"Blog Content",starter:false,growth:"2 posts/mo",premium:"4 posts/mo"},
  {feature:"E-Commerce",starter:false,growth:false,premium:true},
];

const CheckCell=({v}:{v:boolean|string})=>typeof v==="boolean"?v?<FontAwesomeIcon icon={faCheck} className="text-lime-500"/>:<FontAwesomeIcon icon={faXmark} className="text-slate-300 dark:text-slate-600"/>:<span>{v}</span>;

export default function PlansPage(){return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Plans & Retainers</h1><p className="text-indigo-200 text-lg">Monthly plans for ongoing IT support and digital marketing.</p></div></section>
    <section className="py-16 bg-white dark:bg-slate-900"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">IT Support Plans</h2><div className="overflow-x-auto glass rounded-xl dark:bg-slate-900/75 p-1"><Table><TableHeader><TableRow className="border-indigo-100 dark:border-slate-700"><TableHead className="font-bold">Feature</TableHead><TableHead className="font-bold">Basic <Badge className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">$299/mo</Badge></TableHead><TableHead className="font-bold">Pro <Badge className="ml-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">$599/mo</Badge></TableHead><TableHead className="font-bold">Enterprise <Badge className="ml-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">$1,199/mo</Badge></TableHead></TableRow></TableHeader><TableBody>{itPlans.map(r=>(<TableRow key={r.feature} className="border-indigo-50 dark:border-slate-800"><TableCell className="font-medium text-slate-700 dark:text-slate-300">{r.feature}</TableCell><TableCell><CheckCell v={r.basic}/></TableCell><TableCell><CheckCell v={r.pro}/></TableCell><TableCell><CheckCell v={r.enterprise}/></TableCell></TableRow>))}</TableBody></Table></div></div></section>
    <section className="py-16 bg-slate-50 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">Web & Social Media Plans</h2><div className="overflow-x-auto glass rounded-xl dark:bg-slate-900/75 p-1"><Table><TableHeader><TableRow className="border-indigo-100 dark:border-slate-700"><TableHead className="font-bold">Feature</TableHead><TableHead className="font-bold">Starter <Badge className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">$399/mo</Badge></TableHead><TableHead className="font-bold">Growth <Badge className="ml-2 bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300">$799/mo</Badge></TableHead><TableHead className="font-bold">Premium <Badge className="ml-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">$1,499/mo</Badge></TableHead></TableRow></TableHeader><TableBody>{smPlans.map(r=>(<TableRow key={r.feature} className="border-indigo-50 dark:border-slate-800"><TableCell className="font-medium text-slate-700 dark:text-slate-300">{r.feature}</TableCell><TableCell><CheckCell v={r.starter}/></TableCell><TableCell><CheckCell v={r.growth}/></TableCell><TableCell><CheckCell v={r.premium}/></TableCell></TableRow>))}</TableBody></Table></div></div></section>
    <section className="py-12 bg-indigo-700 dark:bg-indigo-900 text-white text-center"><div className="mx-auto max-w-3xl px-4"><h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2><p className="text-indigo-200 mb-6">We build tailored solutions for businesses with unique needs.</p><Link href="/contact"><Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold">Contact Us</Button></Link></div></section></>);}
