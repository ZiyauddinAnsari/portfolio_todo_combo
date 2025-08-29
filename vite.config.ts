import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio_todo_combo/", // matches your repo name for GitHub Pages
});
