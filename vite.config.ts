import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion"],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "~/": `${process.cwd()}/src/`,
    },
  },
  server: {
    host: "0.0.0.0",
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
