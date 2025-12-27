import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    nunjucks({
      templatesDir: resolve(__dirname, './src/templates'),
      variables: {
        siteName: 'TechFlow',
        email: 'anagandulashailaja163@gmail.com',
        phone: '+91 7989463828',
        location: 'Telangana, India',
        year: new Date().getFullYear()
      }
    })
  ],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  },
  server: {
    port: 5173
  }
});