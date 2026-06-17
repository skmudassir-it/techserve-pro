import type { Metadata } from "next";

export const metadata: Metadata = { title: "Portfolio & Case Studies" };

const projects = [
  {title:"River Coffee — Website Redesign",cat:"web",desc:"Custom Next.js site with online ordering. SEO traffic up 65%.",img:"/images/portfolio/work-1.jpg"},
  {title:"Downtown Dental — Social Media",cat:"social",desc:"Instagram growth from 200 to 5,200 followers in 6 months.",img:"/images/portfolio/work-2.jpg"},
  {title:"GreenLeaf Landscaping — SEO",cat:"web",desc:"Ranked #1 for 'landscaping [city]'. Organic leads up 3x.",img:"/images/portfolio/work-3.jpg"},
  {title:"The Residences — Smart Home",cat:"smarthome",desc:"Full-home automation: 75 devices across 12 units.",img:"/images/portfolio/work-4.jpg"},
  {title:"Oak & Iron — E-Commerce",cat:"web",desc:"Custom Shopify store. $50K in first-month sales.",img:"/images/portfolio/work-5.jpg"},
  {title:"Metro Medical — IT Infrastructure",cat:"it",desc:"Migrated 5 locations to cloud. 99.9% uptime achieved.",img:"/images/portfolio/work-6.jpg"},
];

const cats = ["all","web","social","smarthome","it"];

export default function PortfolioPage(){return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Portfolio & Case Studies</h1><p className="text-indigo-200 text-lg">Real results for real clients. Here&apos;s what we&apos;ve built.</p></div></section><section className="py-16 bg-slate-50 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex justify-center gap-2 mb-10 flex-wrap">{[{id:"all",label:"All"},{id:"web",label:"Websites"},{id:"social",label:"Social Media"},{id:"smarthome",label:"Smart Home"},{id:"it",label:"IT Support"}].map(c=>(<button key={c.id} className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-cyan-700 text-slate-600 dark:text-slate-400`}>{c.label}</button>))}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map(p=>(<div key={p.title} className="glass rounded-xl overflow-hidden border-0 dark:bg-slate-900/75"><img src={p.img} alt={p.title} className="w-full aspect-video object-cover"/><div className="p-5"><h3 className="font-bold text-slate-900 dark:text-white mb-1">{p.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p></div></div>))}</div></div></section></>);}
