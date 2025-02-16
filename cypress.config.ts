import { defineConfig } from "cypress";
import admin from "firebaseAdmin.config";
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
        projectId: "cross-measure-dev",
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
        // if your databaseURL is not just your projectId plus ".firebaseio.com", then you _must_ give it here, like so:
        //    databaseURL: 'some-project-default-rtdb.europe-west1.firebasedatabase.app',
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
