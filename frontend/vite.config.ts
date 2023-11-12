import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // develop server configuration
  server: {
    // for hot reloading
    watch: { usePolling: true },
    host: true,
    strictPort: true,
    port: 5173,
  },
});
