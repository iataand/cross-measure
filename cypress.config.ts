import { defineConfig } from "cypress";
import admin from "firebase-admin";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";
import serviceAccount from "./serviceAccount.json" with { type: "json" };

export default defineConfig({
  env: {},
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cypressFirebasePlugin(on, config, admin, {
        // Here is where you can pass special options.
        // If you have not set the GCLOUD_PROJECT environment variable, give the projectId here, like so:
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      });
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
