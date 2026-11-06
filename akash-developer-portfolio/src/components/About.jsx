import { ArrowUpRight, Code2 } from 'lucide-react';
import { about } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container-width">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <div className="grid items-start gap-6 lg:grid-cols-[1.65fr_1fr]">
          <Reveal className="panel about-story p-6 sm:p-8 md:p-10">
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'about-intro' : 'about-paragraph'}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="panel relative overflow-hidden p-7 sm:p-8">
            <div aria-hidden="true" className="about-focus-glow" />
            <div className="relative">
              <span className="category-icon mb-7"><Code2 size={23} aria-hidden="true" /></span>
              <p className="eyebrow">{about.focus.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{about.focus.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{about.focus.description}</p>
              <a className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white" href={about.focus.linkHref}>
                {about.focus.linkLabel}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
