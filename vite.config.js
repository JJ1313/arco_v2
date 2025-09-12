import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'release/staging';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, 
});
