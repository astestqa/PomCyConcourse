// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

before(() => {
  const envNom = Cypress.env('ENV') || 'dev';
  cy.log(`Environnement sélectionné : ${envNom}`);

  cy.fixture(`../configs/config.${envNom}.json`).then((config) => {
    Cypress.env('baseUrl', config.baseUrl);
  })
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
