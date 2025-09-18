import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Répertoire où les rapports seront enregistrés  
    charts: true, // Active les graphiques dans le rapport
    reportPageTitle: 'custom-title', // Définit un titre personnalisé pour la page du rapport
    embeddedScreenshots: true, // Intègre les captures d'écran directement dans le rapport
    inlineAssets: true, // Intègre les fichiers CSS et JS dans le rapport HTML
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
