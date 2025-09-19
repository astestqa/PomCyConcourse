import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Répertoire où les rapports seront enregistrés  
    charts: true, // Active les graphiques dans le rapport
    reportPageTitle: 'custom-title', // Définit un titre personnalisé pour la page du rapport
    embeddedScreenshots: true, // Intègre les captures d'écran directement dans le rapport
    inlineAssets: true, // Intègre les fichiers CSS et JS dans le rapport HTML
    saveAllAttempts: false, // Enregistre toutes les tentatives de test, pas seulement la dernière
  },
  e2e: {
    testIsolation: false, // Désactive l'isolation des tests pour partager l'état entre les tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    //defaultCommandTimeout: 10000, // Temps d'attente par défaut pour les commandes
    //pageLoadTimeout: 60000, // Temps d'attente pour le chargement des pages
  },
});
