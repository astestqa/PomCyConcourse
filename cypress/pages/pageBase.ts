// type definitions for Cypress object "cy"
/// <reference types="cypress" />


let timeWait = 500;

export class PageBase {

    // Méthodes de base pour interagir avec la page
    // Navigation et interactions

    visit(urlApplication: string) {
        cy.visit(urlApplication);
        cy.wait(timeWait);
    }
    
    typeText(selector: string, value: string) {
        cy.get(selector, { timeout:10000 })
        .should("exist").and("be.visible")
        .click()
        .clear()
        .then(e => { if (value !== '') cy.wrap(e).type(value) })
        cy.wait(timeWait);
    }

    click(selector: string) {
        cy.get(selector)
        .should("exist").and("be.visible")
        .click();
        cy.wait(timeWait);
    }

    clickForce(selector: string) {
        cy.get(selector)
        .click({ force: true });
        cy.wait(timeWait);
    }

    getWebElement(selector: string) {
        return cy.get(selector);
    }

    getWebElementValided(selector: string) {
        return cy.get(selector).should("exist").and("be.visible")
    }

    getText(selector: string) {
        return cy.get(selector).should("exist").and("be.visible").invoke('text')
    }

    getValue(selector: string) {
        return cy.get(selector).should("exist").and("be.visible").invoke('val')
    }

    selectWebElement(selector: string, value: string) {
        cy.get(selector)
        .should("be.visible")
        .select(value);
        cy.wait(timeWait);
    }
	
	getSelectedDD(selector: string) {
        return cy.get(selector).should("be.visible").find("option:selected")
    }

    getUrlPage() {
        return cy.url();
    }

}
