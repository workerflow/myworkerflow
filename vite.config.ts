import { defineConfig } from 'vite';

import reactJsx from 'vite-react-jsx';
import reactRefresh from '@vitejs/plugin-react-refresh';


export default defineConfig({
  build: {
    manifest: true,
    chunkSizeWarningLimit: 2048,
  },
  plugins: [reactJsx(), reactRefresh()]
});
