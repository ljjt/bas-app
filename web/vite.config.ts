import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Här kan du använda proxy lokalt, så att /api pekar mot Azure Functions
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/api": "http://localhost:7071" // dev: Functions lokalt
    }
  },
  build: {
    outDir: "dist"
  }
});