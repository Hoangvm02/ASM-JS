import Navigo from "navigo";
import BookDetailPage from "./page/client-book/bookDetail";
import BookPage from "./page/client-book/Books";
import Home from "./page/Home";
// import router
import router from './helpers/router'
import BookCate from "./conponents/bookCate";
import AdminPage from "./page/admin/dashboard";
import CartPage from "./page/Cart";
import Books from "./page/admin/book";
import BookAdd from "./page/admin/book/add";
import CategoryPage from "./page/admin/category";
import BooksEdit from "./page/admin/book/edit";
import CategoryAdd from "./page/admin/category/add";
import CategoryEdit from "./page/admin/category/edit";
import Signin from "./page/signin";
// import Cart from "./conponents/Cart";


// Khởi tạo đối tượng navigo

// const router = new Navigo('/', {linksSelector: "a"});
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    // document.querySelector('#content').innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => render(Home),
    "books": () => render(BookPage),
    "signin": () => render(Signin),
    "/admin": () => render(AdminPage),
    "/admin/books": () => render(Books),
    "/admin/books/add": () => render(BookAdd),
    "/admin/books/edit/:id": (data) => render(BooksEdit, (data.data.id)),
    "/admin/category": () => render(CategoryPage),
    "/admin/category/add": () => render(CategoryAdd),
    "/admin/categories/edit/:id": (data) => render(CategoryEdit, (data.data.id)),
    "/books/:id": (data) => render(BookDetailPage, (data.data.id)),
    "/category/:id": (data) => render(BookCate, (data.data.id)),
    "/cart": () => render(CartPage)


})

router.resolve();
