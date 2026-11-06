import Reveal from './Reveal.jsx';
export default function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return <Reveal className="mb-11"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="mt-4 max-w-2xl text-slate-400 leading-7">{description}</p>}</Reveal>;
}
