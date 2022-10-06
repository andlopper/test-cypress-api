import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('Lista todos livros', () => {
        GETBooks.allBooks().should((response) => {

            cy.log(response.status);
            expect(response.status).to.eq(200);
            cy.log(response.statusText);
            cy.log(response.body);
            expect(response.body).to.be.not.null;

        })
    });
});