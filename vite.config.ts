import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const templateName = "irinazaueras";

export default defineConfig({
  plugins: [react()],
  base: `/${templateName}/`
});
