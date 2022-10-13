import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar livro', () => {
        
        GETBooks.allBooks().then((resAllBooks) => {
            //Apaga o primeiro da lista
            DELETEBooks.delBooks(resAllBooks.body[0].id).should((resDelBooks) => {

                expect(resDelBooks.status).to.eq(200);

            })

        })
    });

    it('Adicionar e deletar livro', () => {
        POSTBooks.addBooks().then((resAddBook) => {

            DELETEBooks.delBooks(resAddBook.body.id).should((resDelBooks) => {

                expect(resDelBooks.status).to.eq(200)

            })

        })
    });
});