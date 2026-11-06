import { useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Code2, Braces, BrainCircuit, GraduationCap, Pause, Play } from 'lucide-react';
import { profile, assetUrl } from '../data.js';
import TypingHeadline from './TypingHeadline.jsx';

export default function Hero() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const still = reduced || paused;
  const entrance = delay => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: 'easeOut' },
  });
  const hover = { whileHover: still ? undefined : { y: -3 }, whileTap: still ? undefined : { scale: 0.98 } };

  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section relative overflow-hidden">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="container-width relative grid items-center hero-layout gap-16 lg:gap-12">
        <div className="min-w-0">
          <motion.div {...entrance(0)} className="hero-availability"><span aria-hidden="true" />Open to Opportunities</motion.div>
          <motion.p {...entrance(0.08)} className="mt-8 text-lg font-medium text-slate-300">Hello, I'm</motion.p>
          <motion.h1 {...entrance(0.16)} id="hero-title" className="hero-name"><span className="gradient-text">{profile.name}</span></motion.h1>
          <motion.div {...entrance(0.24)}><TypingHeadline paused={paused} reduced={Boolean(reduced)} /></motion.div>
          <motion.p {...entrance(0.32)} className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Building intelligent applications, scalable software solutions, and meaningful digital experiences.</motion.p>
          <motion.p {...entrance(0.38)} className="mt-5 flex max-w-xl items-start gap-3 text-sm leading-7 text-muted">
            <GraduationCap size={20} className="mt-1 shrink-0 text-violet-400" aria-hidden="true" />
            <span>Final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Sanjay Ghodawat University, Kolhapur.</span>
          </motion.p>
          <motion.div {...entrance(0.44)} className="mt-8 flex flex-wrap gap-3">
            <motion.a {...hover} className="btn-primary hero-cta" href="#projects">View My Projects <ArrowUpRight size={18} aria-hidden="true" /></motion.a>
            <motion.a {...hover} className="btn-secondary hero-cta" href={assetUrl(profile.resume)} download="Akash_Shinde_Resume.pdf"><Download size={18} aria-hidden="true" />Download Resume</motion.a>
          </motion.div>
          <motion.div {...entrance(0.5)} className="mt-7 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-xs font-medium text-muted">Find me on</span>
            <motion.a {...hover} className="icon-link hero-social" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={20} /></motion.a>
            <motion.a {...hover} className="icon-link hero-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={20} /></motion.a>
            {!reduced && <button className="hero-motion-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume hero animations' : 'Pause hero animations'} aria-pressed={paused}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'Resume motion' : 'Pause motion'}</span></button>}
          </motion.div>
        </div>
        <motion.div {...entrance(0.25)} className="hero-portrait-stage">
          <motion.div className="hero-photo-glow" aria-hidden="true" animate={{ opacity: still ? 0.75 : [0.65, 0.9, 0.65] }} transition={still ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="hero-photo-orbit" aria-hidden="true" />
          <motion.div className="hero-photo-frame hero-professional-portrait" animate={{ y: still ? 0 : [0, -7, 0] }} transition={still ? { duration: 0.2 } : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            {photoFailed ? <div className="hero-photo-fallback" role="img" aria-label="Akash Shinde; profile photo unavailable">AS</div> : <img src={assetUrl(profile.image)} alt="Akash Shinde - Software Developer" width={1105} height={1423} fetchPriority="high" decoding="async" onError={() => setPhotoFailed(true)} />}
          </motion.div>
          <motion.div aria-hidden="true" className="hero-tech-badge hero-badge-python" animate={{ y: still ? 0 : [0, -9, 0] }} transition={still ? { duration: 0.2 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}><Braces size={19} className="text-sky-400" /><span>Python</span></motion.div>
          <motion.div aria-hidden="true" className="hero-tech-badge hero-badge-react" animate={{ y: still ? 0 : [0, 7, 0] }} transition={still ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}><Code2 size={19} className="text-violet-400" /><span>React</span></motion.div>
          <div aria-hidden="true" className="hero-tech-badge hero-badge-ai"><BrainCircuit size={19} className="text-sky-400" /><span>AI / ML</span></div>
          <p className="hero-photo-caption"><span />Code. Learn. Build.</p>
        </motion.div>
      </div>
    </section>
  );
}
