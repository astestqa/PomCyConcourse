// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { PageConnexion } from "../../pages/pageConnexion"
import { PageAccueil } from "../../pages/pageAccueil"

import D from "../../data/dataTests.json"

// Test suite Page Connexion
describe("Test Suite: Page Connexion", () => {

    // Déclaration des variables
    let pageConnexion: PageConnexion
    let pageAccueil: PageAccueil

    // Initialisation des pages
    // S'exécute une fois avant tous les tests du block
    // Création des instances des classes de pages
    before(function() {
      pageConnexion = new PageConnexion()
      pageAccueil = new PageAccueil()
    })

    // S'exécute avant chaque test dans le bloc it
    beforeEach(function() {
      pageConnexion.visiterApplication();
    })

    // Connexion valide (Cas positifs)
    it("Test-1: Connexion valide (Cas positifs)", () => {
      // Connexion
      pageConnexion.seConnecter(D.valUsername,D.valPassword);

      // Validations ASSERTS
      pageAccueil.obtenirUrlPage().should("include", D.valUrlPageAccueil);
      pageAccueil.obtenirTitrePage().should("eq", D.valTitrePageAccueil);

    });

    // Connexion invalide (Cas négatifs) Data-Driven forEach interne
    it("Test-2 (forEach interne): Connexion invalide (Cas négatifs)", () => {

      // Déclaration des données de test
      let data = D.invalide_connexion
      // Boucle sur les données de test
      data.forEach((user) => {
        // Connexion
        pageConnexion.seConnecter(user.username,user.password);

        // Validations ASSERTS
        if (user.username == "" && user.password == "") {
            pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgUsernameInvalide)
        } else if (user.username == D.valUsername && (user.password != D.valPassword || user.password == "")) {
            pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgPasswordInvalide)
        } else {
            pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgUsernameInvalide)
        }
      })
    });

    // Connexion invalide (Cas négatifs) Data-Driven forEach externe
    // Déclaration des données de test
    let data = D.invalide_connexion;
    // Boucle sur les données de test
    data.forEach((user) => {
      // Test de connexion invalide
      it(`Test-3 (forEach externe): Connexion invalide (${user.username}, ${user.password})`, () => {
        // Connexion
        pageConnexion.seConnecter(user.username,user.password);

        // Validations ASSERTS
          if (user.username == "" && user.password == "") {
              pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgUsernameInvalide)
          } else if (user.username == D.valUsername && (user.password != D.valPassword || user.password == "")) {
              pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgPasswordInvalide)
          } else {
              pageConnexion.obtenirMsgErreurConnexion().should("eq",D.msgUsernameInvalide)
          }
        });
    });

});