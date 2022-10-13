/// <reference types="cypress" />

function delBooks(id) {
    return cy.request({

        method: 'DELETE',
        url: `Books/${id}`,
        failOnStatusCode: false,

    })
}

export {delBooks};