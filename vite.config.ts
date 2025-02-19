import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  	server: {
    	open: false,
   		port: 3141,
		watch: {
			usePolling: true
		}
  	},
	
  	preview: {
    	open: true,
   		port: 3140,
  	},
});
