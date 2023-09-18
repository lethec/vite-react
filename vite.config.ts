import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@src": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  optimizeDeps: {
    include: ["esm-dep > cjs-dep"],
  },
});
