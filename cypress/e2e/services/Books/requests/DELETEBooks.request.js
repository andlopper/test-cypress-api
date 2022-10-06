/// <reference types="cypress" />

function delBooks() {
    return cy.request({

        method: 'DELETE',
        url: 'Books',
        failOnStatusCode: false,

    })
}

export {delBooks};