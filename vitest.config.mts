import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    env: {
      NEXT_PUBLIC_FIREBASE_API_KEY: "MOCKED_API_KEY",
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "MOCKED_AUTH_DOMAIN",
    },
  },
});
