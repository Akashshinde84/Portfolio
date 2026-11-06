import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profile } from '../data.js';

const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = 120;
        let current = 'home';
        for (const id of sections) {
          if (document.getElementById(id)?.getBoundingClientRect().top <= offset) current = id;
        }
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'contact';
        setActive(current);
      });
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) {
        if (document.activeElement?.closest('#mobile-navigation')) headerRef.current?.querySelector('.brand')?.focus();
        setOpen(false);
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = event => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);

  const navigate = (event, id) => {
    setOpen(false);
    // Move keyboard focus to the destination when collapsing the mobile menu.
    if (event.currentTarget.closest('#mobile-navigation')) {
      const target = document.getElementById(id);
      target?.setAttribute('tabindex', '-1');
      target?.focus({ preventScroll: true });
    }
  };

  const links = mobile => sections.map(id => (
    <a key={id} href={`#${id}`} className={`nav-link ${mobile ? 'mobile-nav-link' : ''}`}
      aria-current={active === id ? 'location' : undefined} onClick={event => navigate(event, id)}>
      {active === id && <motion.span aria-hidden="true" className="nav-active" layoutId={mobile ? 'mobile-active' : 'desktop-active'} transition={{ duration: reduced ? 0 : 0.2 }} />}
      <span className="relative">{id}</span>
      {active === id && <span className="nav-dot" aria-hidden="true" />}
    </a>
  ));

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header ref={headerRef} className="site-header" onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
        <div className="container-width navbar-inner">
          <a href="#home" className="brand" aria-label="Akash.dev — Home">Akash<span>.dev</span></a>
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">{links(false)}</nav>
          <div className="flex items-center gap-1">
            <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={19} /></a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={19} /></a>
            <button ref={toggleRef} type="button" className="icon-link menu-toggle ml-1" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} onClick={() => setOpen(value => !value)}>
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && <motion.nav key="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation lg:hidden"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
            <div className="container-width grid gap-1 py-4">{links(true)}</div>
          </motion.nav>}
        </AnimatePresence>
      </header>
    </>
  );
}
