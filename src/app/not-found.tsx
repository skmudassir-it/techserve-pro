import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound(){return (<section className="py-20 dark:bg-slate-950"><div className="mx-auto max-w-xl px-4 text-center"><div className="text-8xl font-bold text-indigo-100 dark:text-indigo-950 mb-4">404</div><h1 className="text-2xl font-bold tracking-tight dark:text-white mb-2">Page Not Found</h1><p className="text-slate-400 dark:text-slate-500 mb-8">Error 404: This page does not exist. Have you tried turning it off and on again?</p><div className="flex flex-wrap justify-center gap-4"><Link href="/"><Button><FontAwesomeIcon icon={faHouse} className="mr-2 size-4"/>Back Home</Button></Link><Link href="/support"><Button variant="outline"><FontAwesomeIcon icon={faHeadset} className="mr-2 size-4"/>Get Support</Button></Link></div></div></section>);}
