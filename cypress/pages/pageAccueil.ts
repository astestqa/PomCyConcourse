// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { PageBase } from "./pageBase"

import D from "../data/dataTests.json"

export class PageAccueil extends PageBase {

    // Selecteurs et valeurs spécifiques à la page d'accueil

    selTitrePageAccueil = D.selTitrePageAccueil;
    selSubTitrePageAccueil = D.selSubTitrePageAccueil;
    selBtnLogOut = D.selBtnLogOut;
    selMenuHome = D.selMenuHome;
    selMenuPractice = D.selMenuPractice;
    
    // Méthodes de la page d'accueil
    
    obtenirUrlPage() {
        return this.getUrlPage();
    }

    obtenirTitrePage() {
        //return this.getWebElementValided(this.selTitrePageAccueil)
        //pageAccueil.obtenirTitrePage().should("contain", D.valTitrePageAccueil);
        return this.getText(this.selTitrePageAccueil);
    }

    obtenirSubTitrePage() {
        return this.getText(this.selSubTitrePageAccueil);
    }
    
    estBoutonLogOutAffiche() {
        return this.getWebElement(this.selBtnLogOut);
    }

    estMenuHomeAffiche() {
        return this.getWebElement(this.selMenuHome);
    }

    estMenuPracticeAffiche() {
        return this.getWebElement(this.selMenuPractice);
    }

    
    // ValiderTitreHomePage(value: string) {
    //     comm.GetText(D.locTitreHomePage).should("eq",value);
    //     comm.GetText(D.locTitreHomePage).should("contain",value);
    //  
    //     comm.GetWebElement(D.locTitreHomePage).should("contain",value);
    //     comm.GetWebElement(D.locTitreHomePage).should("contain.text",value);
    //     comm.GetWebElement(D.locTitreHomePage).should("have.text",value);
    // }


}
