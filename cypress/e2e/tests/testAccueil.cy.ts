// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { PageConnexion } from "../../pages/pageConnexion"
import { PageAccueil } from "../../pages/pageAccueil"

import D from "../../data/dataTests.json"

// Test Suite: Page Accueil
describe("Test Suite: Page Accueil", () => {

    // Déclaration des variables
    let pageConnexion: PageConnexion
    let pageAccueil: PageAccueil

    // Initialisation des pages
    // S'exécute une fois avant tous les tests du block
    // Création d'objet pour la classe de page PageObject
    before(function() {
      pageConnexion = new PageConnexion()
      pageAccueil = new PageAccueil()
    })

    // S'exécute avant chaque test dans le bloc it
    beforeEach(function() {
      pageConnexion.visiterApplication();
    })

    // Test de validation du contenu de la page d'accueil
    it("Test-1: Valider contenu Page Accueil", () => {
      // Connexion
      pageConnexion.seConnecter(D.valUsername,D.valPassword);

      // Validations ASSERTS
      pageAccueil.obtenirUrlPage().should("include", D.valUrlPageAccueil);

      pageAccueil.obtenirTitrePage().should("eq", D.valTitrePageAccueil);
      pageAccueil.obtenirSubTitrePage().should("contain", D.valTxtCongratulations);
      pageAccueil.obtenirSubTitrePage().should("contain", D.valTxtSuccessfully);
      
      pageAccueil.estBoutonLogOutAffiche().should("exist").and("be.visible");
      pageAccueil.estMenuHomeAffiche().should("exist").and("be.visible");
      pageAccueil.estMenuPracticeAffiche().should("exist").and("be.visible");

    });                                                          

});