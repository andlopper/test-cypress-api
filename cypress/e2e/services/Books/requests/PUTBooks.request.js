/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook) {
    return cy.request({

        method: 'PUT',
        url: `Books/${idBook}`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        body: payloadChangeBook

    })
}

export {changeBook};