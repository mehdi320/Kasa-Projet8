import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import json from "@rollup/plugin-json";

export default defineConfig({
  plugins: [react(), json()],
});
