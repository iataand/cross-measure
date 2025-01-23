import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENTID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
