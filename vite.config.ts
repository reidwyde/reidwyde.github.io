import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The Last Consultant — served at the domain root (thelastconsultant.com)
export default defineConfig({
    plugins: [react()],
    base: '/',
    // legacy ml_course pages import uppercase-extension images
    assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
    build: {
        outDir: 'dist',
        // keep the app in one bundle; it's small
        chunkSizeWarningLimit: 2000,
    },
    server: {
        port: 3000,
    },
});
