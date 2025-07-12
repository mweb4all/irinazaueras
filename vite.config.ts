import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const templateName = "Irina-Zaueras-Hair-Design";

export default defineConfig({
  plugins: [react()],
  base: `/${templateName}/`
});
