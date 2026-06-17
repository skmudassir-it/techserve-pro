import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faHouseLaptop, faServer, faGlobe, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Our Services" };

const services = [
  { icon: faScrewdriverWrench, title: "Computer & Phone Repair", desc: "Fast repair for laptops, desktops, phones, tablets. In-shop or on-site.", href: "/services/computer-phone-repair", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300" },
  { icon: faHouseLaptop, title: "Smart Home Installation", desc: "Cameras, doorbells, thermostats, locks, speakers — full smart home setup.", href: "/services/smart-home-installation", color: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300" },
  { icon: faServer, title: "IT Support for Small Business", desc: "Managed IT, cybersecurity, cloud, helpdesk. Flat-rate monthly plans.", href: "/services/it-support-small-business", color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { icon: faGlobe, title: "Website & Social Media", desc: "Custom websites, SEO, and social media management that grows your business.", href: "/services/website-social-media-management", color: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300" },
];

export default function ServicesPage(){return (<><section className="bg-gradient-to-r from-indigo-800 to-cyan-600 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Our Services</h1><p className="text-indigo-200 text-lg">Professional tech services for homes and businesses.</p></div></section><section className="py-16 bg-slate-50 dark:bg-slate-950 tech-grid"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.map(s=>(<Link key={s.title} href={s.href}><Card className="glass border-0 dark:bg-slate-900/75 hover:shadow-lg transition-shadow h-full group"><CardContent className="p-6"><div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.color} mb-4 group-hover:scale-110 transition-transform`}><FontAwesomeIcon icon={s.icon} className="size-5"/></div><h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">{s.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{s.desc}</p><span className="text-indigo-600 dark:text-cyan-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3"/></span></CardContent></Card></Link>))}</div></div></section></>);}
