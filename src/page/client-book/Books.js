import { list } from "../../api/book";
import Footer from "../../conponents/Footer";
import Header from "../../conponents/Header";
import ListBooks from "../../conponents/ListBook";

const BookPage = {
    async render() {
        const response = await list()
        return `
        ${Header.render()}
        ${await ListBooks.render()}
        ${Footer.render()}
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};
export default BookPage;