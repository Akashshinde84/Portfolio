import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { footerNavigation, profile } from '../data.js';
import External from './External.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-raised/30">
      <div className="container-width py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="w-fit text-xl font-bold tracking-tight">{profile.name}<span className="text-violet-400">.</span></a>
          <div className="flex items-center gap-2">
            <External href={profile.github} className="icon-link"><Github size={19} aria-hidden="true" /><span className="sr-only">GitHub (opens in a new tab)</span></External>
            <External href={profile.linkedin} className="icon-link"><Linkedin size={19} aria-hidden="true" /><span className="sr-only">LinkedIn (opens in a new tab)</span></External>
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email Akash Shinde"><Mail size={19} aria-hidden="true" /></a>
          </div>
        </div>
        <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
          {footerNavigation.map(section => <a key={section} className="inline-flex min-h-11 items-center text-xs capitalize text-muted hover:text-white" href={`#${section}`}>{section}</a>)}
        </nav>
        <div className="mt-7 flex flex-col gap-5 border-t border-white/8 pt-6 text-xs leading-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
          <a href="#home" className="inline-flex min-h-11 w-fit items-center gap-2 hover:text-white">Back to top<ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
