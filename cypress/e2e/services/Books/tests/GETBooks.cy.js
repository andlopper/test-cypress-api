import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('Lista todos livros', () => {
        GETBooks.allBooks().should((response) => {

            cy.log(response.status);
            cy.log(response.statusText);

        })
    });
});