import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api': 'https://api-pokedex.onrender.com',
      // '/api': 'http://localhost:3333',
    },
  },
  plugins: [react()],
});
