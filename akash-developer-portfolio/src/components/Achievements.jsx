import { Terminal, Lightbulb, Goal } from 'lucide-react';
import { achievements, achievementsSection } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const icons = { terminal: Terminal, builders: Lightbulb, football: Goal };

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-label="Achievements and activities">
      <div className="container-width">
        <SectionHeading {...achievementsSection} />
        <ul className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[achievement.icon] || Goal;
            return (
              <li key={achievement.id} className="min-w-0">
                <Reveal className="h-full">
                  <article className="panel achievement-card h-full p-7" aria-labelledby={`achievement-${achievement.id}`}>
                    <span className={`category-icon ${index === 1 ? 'category-icon-blue' : ''}`}><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
                    <p className="eyebrow mt-6">{achievement.category}</p>
                    <h3 id={`achievement-${achievement.id}`} className="mt-3 text-lg font-semibold leading-7 tracking-tight">{achievement.title}</h3>
                    {achievement.detail && <p className="mt-3 text-sm leading-7 text-muted">{achievement.detail}</p>}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
