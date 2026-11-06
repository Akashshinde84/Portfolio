import { useRef, useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile, contactSection, assetUrl } from '../data.js';
import { buildContactMailto, contactLimits, validateContact } from '../utils/contact.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import External from './External.jsx';

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What would you like to discuss?' },
  { name: 'message', label: 'Message', placeholder: 'Tell me about the opportunity or your project...' },
];

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const formRef = useRef(null);

  const submit = event => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setAttempted(true);
    const firstError = fields.find(field => nextErrors[field.name]);
    if (firstError) {
      formRef.current?.elements.namedItem(firstError.name)?.focus();
      return;
    }
    window.location.href = buildContactMailto(profile.email, values);
  };

  return (
    <section id="contact" className="section relative overflow-hidden" aria-label="Contact Akash Shinde">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container-width relative">
        <SectionHeading eyebrow={contactSection.eyebrow} title={contactSection.title} description={contactSection.message} />
        <div className="grid items-start gap-7 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal className="min-w-0">
            <div className="panel p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight">Connect with me</h3>
              <ul className="mt-6 space-y-3">
                <li><a href={`mailto:${profile.email}`} className="contact-detail"><span className="category-icon"><Mail size={20} aria-hidden="true" /></span><span className="min-w-0"><span className="contact-detail-label">Email</span><span className="contact-detail-value break-all">{profile.email}</span></span><ArrowUpRight size={16} className="ml-auto shrink-0 text-muted" aria-hidden="true" /></a></li>
                <li><a href={profile.phoneHref} className="contact-detail"><span className="category-icon category-icon-blue"><Phone size={20} aria-hidden="true" /></span><span><span className="contact-detail-label">Phone</span><span className="contact-detail-value">{profile.phone}</span></span><ArrowUpRight size={16} className="ml-auto shrink-0 text-muted" aria-hidden="true" /></a></li>
                <li className="contact-detail"><span className="category-icon"><MapPin size={20} aria-hidden="true" /></span><span><span className="contact-detail-label">Location</span><span className="contact-detail-value">{profile.location}</span></span></li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <External href={profile.linkedin} className="project-action"><Linkedin size={17} aria-hidden="true" />LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></External>
                <External href={profile.github} className="project-action"><Github size={17} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></External>
              </div>
              <a className="btn-secondary mt-5 w-full" href={assetUrl(profile.resume)} download="Akash_Shinde_Resume.pdf"><Download size={18} aria-hidden="true" />Download Resume</a>
            </div>
          </Reveal>
          <Reveal className="panel min-w-0 p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight">{contactSection.formTitle}</h3>
            <p id="contact-form-note" className="mt-3 text-xs leading-6 text-muted">{contactSection.formNote} You can also email me directly using the link alongside this form.</p>
            <form ref={formRef} onSubmit={submit} noValidate aria-describedby="contact-form-note" className="mt-6 grid gap-5 sm:grid-cols-2">
              {attempted && Object.keys(errors).length > 0 && <p className="contact-form-error sm:col-span-2" role="alert">Please check the highlighted fields before opening your email draft.</p>}
              {fields.map(field => {
                const shared = {
                  id: `contact-${field.name}`, name: field.name, required: true,
                  value: values[field.name], maxLength: contactLimits[field.name],
                  placeholder: field.placeholder, autoComplete: field.autoComplete,
                  'aria-invalid': Boolean(errors[field.name]),
                  'aria-describedby': errors[field.name] ? `contact-${field.name}-error` : undefined,
                  className: 'contact-input',
                  onChange: event => {
                    const nextValues = { ...values, [field.name]: event.target.value };
                    setValues(nextValues);
                    if (attempted) setErrors(validateContact(nextValues));
                  },
                };
                return <div key={field.name} className={['subject', 'message'].includes(field.name) ? 'sm:col-span-2' : ''}>
                  <label htmlFor={shared.id} className="contact-label">{field.label}<span className="ml-1 text-muted" aria-hidden="true">*</span></label>
                  {field.name === 'message' ? <textarea {...shared} rows={5} /> : <input {...shared} type={field.type} />}
                  {errors[field.name] && <p id={`contact-${field.name}-error`} className="contact-field-error">{errors[field.name]}</p>}
                </div>;
              })}
              <div className="sm:col-span-2"><button type="submit" className="btn-primary w-full sm:w-auto"><Mail size={17} aria-hidden="true" />Open Email Draft<ArrowUpRight size={16} aria-hidden="true" /></button><p className="mt-3 text-xs leading-6 text-muted">Requires a configured email app. All fields are required.</p></div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
