import { getAll } from "../../api/category";
import BookCate from "../../conponents/bookCate";
import Footer from "../../conponents/Footer";
import Header from "../../conponents/Header";

const BookPage = {
    async render() {
        const response = await getAll()
        return `
        ${Header.render()}
        ${await BookCate.render()}
        ${Footer.render()}
        `;
    },
};
export default BookPage;