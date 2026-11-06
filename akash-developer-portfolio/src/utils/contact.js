export const contactLimits = { name: 100, email: 254, subject: 150, message: 2000 };

export function validateContact(values) {
  const errors = {};
  for (const field of Object.keys(contactLimits)) {
    const value = (values[field] || '').trim();
    if (!value) errors[field] = `Please enter your ${field}.`;
    else if (value.length > contactLimits[field]) errors[field] = `Keep your ${field} to ${contactLimits[field]} characters or fewer.`;
  }
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!errors.subject && /[\r\n]/.test(values.subject)) errors.subject = 'Please enter the subject on one line.';
  return errors;
}

export function buildContactMailto(recipient, values) {
  const body = `Name: ${values.name.trim()}\r\nEmail: ${values.email.trim()}\r\n\r\n${values.message.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
}
