import { useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Languages, FileSearch, ChartNoAxesCombined, Check, BrainCircuit, CircleDashed } from 'lucide-react';
import { assetUrl } from '../data.js';
import External from './External.jsx';

const icons = { languages: Languages, invoice: FileSearch, shopping: ChartNoAxesCombined, brain: BrainCircuit };

export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = icons[project.visual] || ChartNoAxesCombined;
  const image = project.image;
  const reduced = useReducedMotion();
  const FeatureIcon = project.featureStage === 'planned' ? CircleDashed : Check;
  const imageVisual = image && (
    <motion.div className={`project-media ${image.kind === 'screenshot' ? 'project-media-screenshot' : 'project-media-illustration'}`}
      initial="rest" animate="rest" whileHover="hover">
      <motion.img src={image.src.startsWith('https://') ? image.src : assetUrl(image.src)}
        alt={image.alt} loading="lazy" decoding="async" width={image.width || 960} height={image.height || 540}
        variants={{ rest: { scale: 1 }, hover: { scale: reduced ? 1 : 1.035 } }}
        transition={{ duration: reduced ? 0 : 0.35, ease: 'easeOut' }}
        onError={() => setImageFailed(true)} />
      <span className="project-media-overlay" aria-hidden="true" />
    </motion.div>
  );
  return (
    <article className={`panel project-card ${project.featured ? 'project-card-featured' : ''}`}  aria-labelledby={`project-${project.id}`}>
      {project.featured && <div className="project-featured-banner"><span>{project.featuredLabel || 'Featured Project'}</span>{project.status && <span className="project-status">{project.status}</span>}</div>}
      {image && !imageFailed ? (
        <figure className="project-figure">
          {image.source ? <External href={image.source} className="project-image-link">{imageVisual}</External> : imageVisual}
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : (
        <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
          <span className="project-visual-ring" /><span className="project-visual-ring project-visual-ring-inner" />
          <Icon size={52} strokeWidth={1.2} />
          <span className="project-number">PROJECT / {project.number}</span>
          <span className="project-visual-label">{project.category}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.academicLabel && <p className="project-academic-label">{project.academicLabel}</p>}
        {!project.featured && project.status && <p className="project-status mb-3">{project.status}</p>}
        <p className="eyebrow">{project.category}</p>
        <h3 id={`project-${project.id}`} className="mt-3 text-xl font-semibold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
        {project.planningNote && <p className="project-planning-note">{project.planningNote}</p>}
        <div className="mt-6">
          <h4 className="project-meta-heading">{project.featuresLabel || 'Key features'}</h4>
          <ul className="mt-3 grid gap-2.5">
            {project.features.map(feature => <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-300" key={feature}><FeatureIcon size={14} className="mt-0.5 shrink-0 text-violet-400" aria-hidden="true" />{feature}</li>)}
          </ul>
        </div>
        <div className="mt-6 mb-7">
          <h4 className="project-meta-heading">{project.techLabel || 'Built with'}</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
            {project.tech.map(tech => <li className="project-tech" key={tech}>{tech}</li>)}
          </ul>
        </div>
        {(project.github || (project.demo && project.demoVerified)) && <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5">
          {project.github && <External href={project.github} className="project-action" ><Github size={16} aria-hidden="true" /><span className="sr-only">{project.title}: </span>GitHub<ArrowUpRight size={14} aria-hidden="true" /></External>}
          {project.demo && project.demoVerified && <External href={project.demo} className="project-action project-demo"><ExternalLink size={15} aria-hidden="true" /><span className="sr-only">{project.title}: </span>Live Demo<ArrowUpRight size={14} aria-hidden="true" /></External>}
        </div>}
      </div>
    </article>
  );
}
