import { useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profile, projectsSection, filterProjects } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import External from './External.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const [category, setCategory] = useState('All Projects');
  const reduced = useReducedMotion();
  const visible = filterProjects(category);
  return (
    <section id="projects" className="section" aria-label="Featured projects">
      <div className="container-width">
        <SectionHeading eyebrow={projectsSection.eyebrow} title={projectsSection.title} description={projectsSection.description} />
        <div role="group" aria-label="Filter projects by category" className="mb-5 flex flex-wrap gap-2">
          {projectsSection.filters.map(filter => <button key={filter} type="button" aria-pressed={category === filter} aria-controls="project-results" className="project-filter" onClick={() => setCategory(filter)}>{filter}</button>)}
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="mb-6 text-xs text-muted">Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}{category !== 'All Projects' ? ` in ${category}` : ''}</p>
        <div id="project-results" className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map(project => <motion.div key={project.id} layout={!reduced} transition={{ duration: reduced ? 0 : 0.25 }} className={`min-w-0 h-full ${project.featured ? 'md:col-span-2 xl:col-span-3' : ''}`}><Reveal className="h-full"><ProjectCard project={project} /></Reveal></motion.div>)}
        </div>
        {visible.length === 0 && <p className="panel p-8 text-muted">No projects in this category yet.</p>}
        <Reveal className="mt-10"><External href={profile.github} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white">Explore more on GitHub <ArrowUpRight size={17} aria-hidden="true" /></External></Reveal>
      </div>
    </section>
  );
}
