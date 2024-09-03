import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __filename = import.meta.url.substring(
  import.meta.url.lastIndexOf("/") + 1
);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
});
