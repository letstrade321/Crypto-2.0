import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "stream": "stream-browserify",
      "crypto": "crypto-browserify"
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}));

