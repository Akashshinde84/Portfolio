import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { portfolioSeo } from './seo.config.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'SITE_');
  return { plugins: [react(), tailwindcss(), portfolioSeo(process.env.SITE_URL || env.SITE_URL)] };
});
