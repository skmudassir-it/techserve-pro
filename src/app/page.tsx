import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faHouseLaptop, faServer, faGlobe, faShield, faStar, faCheckCircle, faArrowRight, faUsers, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "TechServe Pro — IT Support, Repair & Digital Services" };

const services = [
  { icon: faScrewdriverWrench, title: "Computer & Phone Repair", desc: "Fast, reliable repair for laptops, desktops, phones, and tablets. In-shop or we come to you.", href: "/services/computer-phone-repair", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300" },
  { icon: faHouseLaptop, title: "Smart Home Installation", desc: "Professional setup of cameras, doorbells, thermostats, locks, speakers, and full-home automation.", href: "/services/smart-home-installation", color: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300" },
  { icon: faServer, title: "IT Support for Small Business", desc: "Managed IT, network setup, cybersecurity, cloud migration, and helpdesk for 1–50 employee businesses.", href: "/services/it-support-small-business", color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { icon: faGlobe, title: "Website & Social Media", desc: "Custom websites, SEO, and social media management that drives real customers to local businesses.", href: "/services/website-social-media-management", color: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300" },
];

const testimonials = [
  { name: "Sarah J.", role: "Small Business Owner", text: "TechServe Pro handles all our IT. Zero downtime in 18 months. The team is responsive and genuinely cares.", rating: 5 },
  { name: "Marcus T.", role: "Homeowner", text: "They installed our entire smart home system — cameras, locks, thermostat, everything. Flawless setup and patient explanations.", rating: 5 },
  { name: "River Coffee Co.", role: "Cafe Chain", text: "Our website and social media have been completely transformed. Online orders up 40% since they took over.", rating: 5 },
];

export default function HomePage() {
  return (<>
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-cyan-700 text-white tech-grid">
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.svg')] bg-cover bg-center opacity-15"/>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-200 border-cyan-500/30 text-sm px-4 py-1">Trusted Tech Partner Since 2016</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">Tech Support That <span className="text-lime-400">Actually Works</span></h1>
          <p className="text-lg sm:text-xl text-indigo-200 mb-8 max-w-xl">Computer repair, smart home installation, IT support, and digital growth — all from one trusted team. Fast, certified, and local.</p>
          <div className="flex flex-wrap gap-3"><Link href="/booking"><Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold text-base">Book a Tech</Button></Link><Link href="/services"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Our Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4"/></Button></Link></div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-white dark:bg-slate-900 border-b border-indigo-100 dark:border-slate-800"><div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">{[{n:"2,500+",l:"Devices Repaired"},{n:"150+",l:"Business Clients"},{n:"500+",l:"Smart Home Installs"},{n:"50K+",l:"Social Followers Grown"}].map(s=>(<div key={s.l}><div className="text-2xl sm:text-3xl font-extrabold text-indigo-700 dark:text-indigo-400">{s.n}</div><div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{s.l}</div></div>))}</div></section>

    {/* Services */}
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 tech-grid"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><Badge variant="outline" className="mb-3 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">What We Do</Badge><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Complete Tech Services</h2><p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">From fixing your laptop to running your entire IT infrastructure — we handle it all.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.map(s=>(<Link key={s.title} href={s.href}><Card className="glass border-0 dark:bg-slate-900/75 hover:shadow-lg transition-shadow h-full group"><CardContent className="p-6"><div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.color} mb-4 group-hover:scale-110 transition-transform`}><FontAwesomeIcon icon={s.icon} className="size-5"/></div><h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">{s.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p></CardContent></Card></Link>))}</div></div></section>

    {/* Why us */}
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Businesses & Homeowners Trust Us</h2></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[{icon:faShield,title:"Certified Techs",desc:"CompTIA, Google, and smart home platform certified technicians."},{icon:faHeadset,title:"4-Hour Response",desc:"Average response time under 4 hours for critical IT issues."},{icon:faUsers,title:"150+ Businesses",desc:"Trusted by local businesses for managed IT and digital marketing."},{icon:faCheckCircle,title:"Satisfaction Guaranteed",desc:"Not happy? We'll make it right or your money back."}].map(w=>(<div key={w.title} className="text-center p-6 rounded-xl glass dark:bg-slate-900/75"><div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mb-4"><FontAwesomeIcon icon={w.icon} className="size-6"/></div><h3 className="font-bold text-slate-900 dark:text-white mb-2">{w.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{w.desc}</p></div>))}</div></div></section>

    {/* Testimonials */}
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 tech-grid"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Clients Say</h2></div><div className="grid gap-6 sm:grid-cols-3">{testimonials.map(t=>(<Card key={t.name} className="glass border-0 dark:bg-slate-900/75"><CardContent className="p-6"><div className="flex gap-1 mb-3">{Array.from({length:t.rating}).map((_,i)=><FontAwesomeIcon key={i} icon={faStar} className="size-4 text-lime-400"/>)}</div><p className="text-slate-600 dark:text-slate-300 mb-4 italic">&ldquo;{t.text}&rdquo;</p><p className="font-semibold text-slate-900 dark:text-white">{t.name}</p><p className="text-sm text-slate-400 dark:text-slate-500">{t.role}</p></CardContent></Card>))}</div><div className="text-center mt-8"><Link href="/reviews"><Button variant="outline" className="border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950">Read All Reviews <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4"/></Button></Link></div></div></section>

    {/* CTA */}
    <section className="py-16 bg-gradient-to-r from-indigo-700 to-cyan-600 text-white text-center"><div className="mx-auto max-w-3xl px-4"><h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Solve Your Tech Problems?</h2><p className="text-indigo-200 mb-8 text-lg">Book a tech, submit a ticket, or call us — we&apos;re here to help.</p><div className="flex flex-wrap justify-center gap-3"><Link href="/booking"><Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold">Book a Tech</Button></Link><Link href="/support"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Submit a Ticket</Button></Link></div></div></section>
  </>);
}
