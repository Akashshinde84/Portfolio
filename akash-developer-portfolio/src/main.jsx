import React from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, MotionConfig } from 'framer-motion';
import App from './App.jsx';
import './index.css';

const loadMotionFeatures = () => import('./motionFeatures.js').then(module => module.default);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict><App /></LazyMotion>
    </MotionConfig>
  </React.StrictMode>
);
