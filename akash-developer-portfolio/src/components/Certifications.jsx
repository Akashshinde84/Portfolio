import { ArrowUpRight, Award, BrainCircuit, ChartNoAxesCombined, CalendarDays, FileBadge, GraduationCap, Microscope, Terminal } from 'lucide-react';
import { certifications, certificationsSection, assetUrl } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import External from './External.jsx';

const certificateIcons = {
  data: GraduationCap,
  linux: Terminal,
  research: Microscope,
  ml: BrainCircuit,
  analytics: ChartNoAxesCombined,
  learning: Award,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section border-y border-white/5 bg-surface-raised/30" aria-label="Certifications gallery">
      <div className="container-width">
        <SectionHeading {...certificationsSection} />
        <ul className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => {
            const Icon = certificateIcons[certificate.icon] || Award;
            return (
              <li key={certificate.id} className="min-w-0">
                <Reveal className="h-full">
                  <article className="panel certificate-card" aria-labelledby={`certificate-${certificate.id}`}>
                    <div className="certificate-card-top">
                      <span className={`category-icon ${index % 2 ? 'category-icon-blue' : ''}`}><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
                      <span className="certificate-format"><FileBadge size={13} aria-hidden="true" />{certificate.format}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-0 sm:p-7 sm:pt-0">
                      <h3 id={`certificate-${certificate.id}`} className="text-lg font-semibold leading-7 tracking-tight">{certificate.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{certificate.issuer}</p>
                      {certificate.support && <p className="mt-1 text-xs leading-6 text-muted">{certificate.support}</p>}
                      {certificate.type && <p className="mt-1 text-xs leading-6 text-muted">{certificate.type}</p>}
                      <p className="mt-5 flex items-center gap-2 text-xs leading-6 text-muted"><CalendarDays size={14} aria-hidden="true" />{certificate.date}</p>
                      {certificate.result && <p className="certificate-result">{certificate.result}</p>}
                      <div className="mt-auto pt-6">
                        <External href={assetUrl(certificate.url)} className="certificate-link">
                          View Certificate<span className="sr-only">: {certificate.title} (opens in a new tab)</span><ArrowUpRight size={17} aria-hidden="true" />
                        </External>
                      </div>
                    </div>
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
