import { m as motion, useReducedMotion } from 'framer-motion';
export default function Reveal({
  children,
  className = ''
}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : {
    opacity: 0,
    y: 25
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.12
  }} transition={{
    duration: reduced ? 0 : 0.55,
    ease: 'easeOut'
  }}>{children}</motion.div>;
}
