import Navigo from "navigo";
import Header from "./conponents/Header";
import Home from "./page/Home";




// Khởi tạo đối tượng navigo

const router = new Navigo('/', {linksSelector: "a"});
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
};

router.on({
    "/": () => print(Home)

})

router.resolve();
