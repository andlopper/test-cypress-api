import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

describe('DELETE Books', () => {
    it('Deletar livro', () => {
        
        GETBooks.allBooks().then((resAllBooks) => {

            cy.log(resAllBooks.body[0].id);

        })
    });
});