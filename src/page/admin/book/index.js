import axios from "axios";
import BooksListAmin from "../../../conponents/BooksListAdmin";
import dashboard from "../../../conponents/DashboardList";
import router from "../../../helpers/router";

const BooksPage = {
    async render() {

        return /* html */`
        ${dashboard.render()}
        ${await BooksListAmin.render()}
        </div>
        `;
    },
    afterRender(){
        // Lấy danh sách button
        const btns = document.querySelectorAll('.btn');
        // tạo vòng lặp và lấy ra từng button
        btns.forEach(btn => {
            const id = btn.dataset.id;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener('click', function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
                if(confirm){
                    axios.delete(`http://localhost:3000/books/${id}`)
                    router.navigate('/admin/books')
                }
               
                    // document.location.href = "/students"
            })
        })
    }
};
export default BooksPage;