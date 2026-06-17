import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "TechServe Pro — IT Support, Repair & Digital Services", template: "%s | TechServe Pro" },
  description: "Professional computer repair, smart home installation, IT support for small businesses, and website/social media management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark')}catch(e){}})()`}} />
      </body>
    </html>
  );
}
