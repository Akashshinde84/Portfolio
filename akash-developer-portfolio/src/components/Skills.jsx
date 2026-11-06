import { Code2, PanelsTopLeft, Server, BrainCircuit, ChartNoAxesCombined, Database, Wrench } from 'lucide-react';
import { skills, skillsSection } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const categoryIcons = {
  Programming: Code2,
  Frontend: PanelsTopLeft,
  Backend: Server,
  'AI / Machine Learning': BrainCircuit,
  'Data Analysis': ChartNoAxesCombined,
  Databases: Database,
  'Developer Tools': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section border-y border-white/5 bg-surface-raised/30" aria-label="Technical skills">
      <div className="container-width">
        <SectionHeading {...skillsSection} />
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, technologies], index) => {
            const Icon = categoryIcons[category] || Code2;
            return (
              <Reveal key={category} className="h-full min-w-0">
                <article className="panel technical-skill-card h-full p-6 sm:p-7" aria-labelledby={`skill-category-${index}`}>
                  <div className="flex items-center gap-4">
                    <span className={`category-icon ${index % 2 ? 'category-icon-blue' : ''}`}><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3 id={`skill-category-${index}`} className="text-base font-semibold tracking-tight">{category}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category} technologies`}>
                    {technologies.map(technology => <li key={technology} className="skill-chip technical-skill-chip">{technology}</li>)}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
