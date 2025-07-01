// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // root of the project
  build: {
    outDir: "dist", // folder where the production build will be generated
    emptyOutDir: true, // clean the 'dist' folder before each build
  },
  server: {
    open: true, // automatically open the browser on `npm run dev`
    host: true, //enable local access
  },
});
