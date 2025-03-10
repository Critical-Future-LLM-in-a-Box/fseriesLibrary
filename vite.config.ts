import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  assetsInclude: ["**/*.png", "**/*.gif"],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "fserieslib",
      fileName: "fserieslib",
      formats: ["es"]
    }
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode)
  }
}));
