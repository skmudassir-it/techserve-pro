import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="border-t border-indigo-100 dark:border-slate-800 bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2"><h3 className="text-white font-bold text-lg mb-3">TechServe<span className="text-cyan-400">Pro</span></h3><p className="text-sm leading-relaxed mb-4">Professional tech services — computer repair, smart home installation, IT support, and digital growth for local businesses.</p><div className="flex gap-3"><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className="size-5 hover:text-cyan-400 transition-colors"/></a><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="size-5 hover:text-cyan-400 transition-colors"/></a><a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} className="size-5 hover:text-cyan-400 transition-colors"/></a></div></div>
          <div><h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4><div className="flex flex-col gap-2">{["Home","Services","Plans","Portfolio","Booking","Support","Pricing","About","Reviews","Contact"].map(l=><Link key={l} href={l==="Home"?"/":`/${l.toLowerCase()}`} className="text-sm hover:text-white transition-colors">{l}</Link>)}</div></div>
          <div><h4 className="text-white font-semibold text-sm mb-3">Services</h4><div className="flex flex-col gap-2"><Link href="/services/computer-phone-repair" className="text-sm hover:text-white transition-colors">Computer & Phone Repair</Link><Link href="/services/smart-home-installation" className="text-sm hover:text-white transition-colors">Smart Home Installation</Link><Link href="/services/it-support-small-business" className="text-sm hover:text-white transition-colors">IT Support for Business</Link><Link href="/services/website-social-media-management" className="text-sm hover:text-white transition-colors">Web & Social Media</Link></div></div>
          <div><h4 className="text-white font-semibold text-sm mb-3">Contact</h4><div className="flex flex-col gap-2.5 text-sm"><span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="size-3.5 text-lime-400"/>(555) 123-TECH</span><span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-lime-400"/>hello@techservepro.com</span><span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="size-3.5 text-lime-400"/>Metro Area — On-Site & Remote</span><span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faClock} className="size-3.5 text-lime-400"/>Mon-Fri 8AM-8PM · Sat 9AM-5PM</span></div></div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-700 dark:border-slate-800 text-center text-xs">© 2026 TechServe Pro. Certified Technicians · Data Privacy Committed · Satisfaction Guaranteed.</div>
      </div>
    </footer>
  );
}
