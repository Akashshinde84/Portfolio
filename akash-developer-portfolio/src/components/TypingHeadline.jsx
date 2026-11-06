import { useEffect, useState } from 'react';

export const roles = ['Software Developer', 'Python Developer', 'AI/ML Enthusiast'];

export default function TypingHeadline({ paused = false, reduced = false }) {
  const [state, setState] = useState({ index: 0, count: roles[0].length, deleting: true });
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    if (paused || reduced || hidden) return;
    const word = roles[state.index];
    const complete = state.count === word.length;
    const delay = complete ? 2100 : state.count === 0 ? 300 : state.deleting ? 45 : 85;
    const timer = window.setTimeout(() => {
      setState(current => {
        if (current.deleting && current.count === 0) {
          return { index: (current.index + 1) % roles.length, count: 0, deleting: false };
        }
        if (!current.deleting && current.count === roles[current.index].length) {
          return { ...current, deleting: true, count: current.count - 1 };
        }
        return { ...current, count: current.count + (current.deleting ? -1 : 1) };
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [state, paused, reduced, hidden]);

  return (
    <div className="hero-role">
      <span className="sr-only">{roles.join(' | ')}</span>
      <span aria-hidden="true">{reduced ? roles[0] : roles[state.index].slice(0, state.count)}<span className="hero-cursor" /></span>
    </div>
  );
}
