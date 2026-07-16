/** Scientific editorial shell: compact wordmark, high-contrast sticky navigation, institutional footer. */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const links = [["Research","/research"],["Capabilities","/capabilities"],["Projects","/projects"],["Government","/government"],["About","/about"]];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }, [location]);
  return <div className="site-frame">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><div className="container nav-wrap">
      <Link className="brand" href="/"><img className="brand-wordmark" src="/assets/brand/athoth-wordmark.svg" alt="Athoth Innovations" /></Link>
      <nav className={open ? "primary-nav open" : "primary-nav"} aria-label="Primary navigation">{links.map(([label,href]) => <Link className={location === href ? "active" : ""} href={href} key={href}>{label}</Link>)}<Link className="nav-cta" href="/contact">Partner with us <ArrowUpRight size={15} /></Link></nav>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div></header>
    <div id="main-content">{children}</div>
    <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><div className="footer-logo"><img src="/assets/brand/athoth-orbital-mark.svg" alt="" /><span>ATHOTH<br /><b>INNOVATIONS</b></span></div><p>Applied AI research and systems for preserving expertise, strengthening human capability, and supporting accountable decisions.</p></div><div><h4>Explore</h4><Link href="/research">Research</Link><Link href="/capabilities">Capabilities</Link><Link href="/projects">Projects</Link></div><div><h4>Work with us</h4><Link href="/government">Government</Link><Link href="/contact">Partnerships</Link><a href="/assets/documents/athoth-capability-statement.pdf" target="_blank" rel="noreferrer">Capability statement</a></div><div><h4>Company</h4><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Athoth Innovations LLC</span><span>Little Rock, Arkansas</span></div></div></footer>
  </div>;
}
