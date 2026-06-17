'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faHeadset, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/', label: 'Home' },{ href: '/services', label: 'Services' },{ href: '/plans', label: 'Plans' },
  { href: '/portfolio', label: 'Portfolio' },{ href: '/booking', label: 'Book a Tech' },{ href: '/support', label: 'Support' },
  { href: '/pricing', label: 'Pricing' },{ href: '/about', label: 'About' },{ href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains('dark')); }, []);
  const toggleDark = () => { const d = !dark; setDark(d); document.documentElement.classList.toggle('dark', d); localStorage.setItem('theme', d ? 'dark' : 'light'); };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-100 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.svg" alt="TechServe Pro" className="h-9 w-9" />
          <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400">TechServe<span className="text-cyan-500">Pro</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (<Link key={l.href} href={l.href} className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname===l.href?'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300':'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'}`}>{l.label}</Link>))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="text-slate-500 dark:text-slate-400" title="Toggle theme"><FontAwesomeIcon icon={dark?faSun:faMoon} className="size-4"/></Button>
          <a href="/support"><Button size="sm" className="hidden sm:inline-flex bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600"><FontAwesomeIcon icon={faHeadset} className="mr-1.5 size-3.5"/>Get Support</Button></a>
          <a href="tel:+1555123TECH"><Button size="sm" className="hidden sm:inline-flex bg-lime-500 hover:bg-lime-600 text-slate-900"><FontAwesomeIcon icon={faPhone} className="mr-1.5 size-3.5"/>Call</Button></a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden"><Button variant="ghost" size="icon"><FontAwesomeIcon icon={faBars} className="size-5"/></Button></SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12 dark:bg-slate-950">
              <nav className="flex flex-col gap-1">
                {links.map(l => (<Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className={`px-4 py-2.5 rounded-lg text-base font-medium ${pathname===l.href?'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300':'text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'}`}>{l.label}</Link>))}
                <div className="mt-4 flex flex-col gap-2">
                  <Link href="/support"><Button className="bg-indigo-700 hover:bg-indigo-800" onClick={()=>setOpen(false)}>Get Support</Button></Link>
                  <a href="tel:+1555123TECH"><Button variant="outline">Call (555) 123-TECH</Button></a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
