// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { PageBase } from "./pageBase"

import D from "../data/dataTests.json"

export class PageConnexion extends PageBase {

    // Selecteurs et valeurs spécifiques à la page de connexion
    
    selUsername = D.selUsername
    selPassword = D.selPassword
    selBtnLogin = D.selBtnLogin
    selMsgErreurConnexion = D.selMsgErreurConnexion

    // Méthodes de la page de connexion

    visiterApplication() {
        //this.visit(D.urlApplication);
        this.visit(Cypress.env('baseUrl'));
    }

    seConnecter(Username: string, Password: string) {
        this.typeText(this.selUsername,Username);
        this.typeText(this.selPassword,Password);
        this.click(this.selBtnLogin);
    }

    obtenirMsgErreurConnexion() {
        return this.getText(this.selMsgErreurConnexion);
    }

    // ValiderTitreHomePage(value: string) {
    //     this.getText(this.selTitreHomePage).should("eq",value);
    //     this.getWebElement(this.selTitreHomePage).should("have.text",value);
    //     this.getWebElement(this.selTitreHomePage).should("contain",value);
    //     this.getWebElement(this.selTitreHomePage).should("contain.text",value);
    // }

};
