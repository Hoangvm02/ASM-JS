import Navigo from "navigo";
import BookDetailPage from "./page/client-book/bookDetail";
import BookPage from "./page/client-book/Books";
import Home from "./page/Home";
// import router
import router from './helpers/router'
import BookCate from "./conponents/bookCate";



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
    "/books/:id": (data) => render(BookDetailPage, (data.data.id)),
    "/category/:id": (data) => render(BookCate, (data.data.id)),


})

router.resolve();
