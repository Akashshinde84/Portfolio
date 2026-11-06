import { GraduationCap, School, MapPin } from 'lucide-react';
import { education, educationSection } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="section border-y border-white/5 bg-surface-raised/30" aria-label="Education">
      <div className="container-width">
        <SectionHeading {...educationSection} />
        <ol className="education-timeline">
          {education.map(entry => {
            const Icon = entry.icon === 'graduation' ? GraduationCap : School;
            return (
              <li key={entry.id} className="education-timeline-entry">
                <span className="education-timeline-node" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                <Reveal>
                  <article className="panel education-card p-6 sm:p-8" aria-labelledby={`education-${entry.id}`}>
                    <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:gap-8">
                      <div className="min-w-0">
                        <p className="education-date">{entry.date}</p>
                        <h3 id={`education-${entry.id}`} className="mt-3 max-w-2xl text-lg font-semibold leading-relaxed tracking-tight sm:text-xl">{entry.title}</h3>
                        <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-muted"><MapPin size={15} className="mt-1.5 shrink-0" aria-hidden="true" /><span>{entry.place}</span></p>
                      </div>
                      <dl className="education-result">
                        <dt>{entry.resultLabel}</dt>
                        <dd>{entry.result}</dd>
                      </dl>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
