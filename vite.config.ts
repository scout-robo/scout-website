import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' ensures assets are loaded relatively, 
  // which prevents 404s if the site is at sahayai.com/scout-website/
  base: './', 
  server: {
    port: 3000
  }
});