import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { importScripts: ['push-handler.js'] },
      includeAssets: ['apple-touch-icon.png', 'og-image.png'],
      manifest: {
        name: 'REVINANCE',
        short_name: 'REVINANCE',
        description: 'Personal finance tracker — income, expenses, debt, and investment planning.',
        theme_color: '#0d0b09',
        background_color: '#0d0b09',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
});
