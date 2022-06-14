import axios from 'axios';
import { remove } from '../../../api/category';
import CateList from '../../../conponents/cateList';
import dashboard from '../../../conponents/DashboardList';
import reRender from '../../../helpers/reRender';
const CategoryPage = {
    async render() {
        return `
        ${dashboard.render()}
        ${await CateList.render()}
        </div>
        `;
    },
    afterRender(){
        // Lấy danh sách button
        const deleteBtns = document.querySelectorAll('.btn');
        deleteBtns.forEach((btn) => {
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                // Tìm xem chúng ta muốn xoá thằng nào
                // const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
                const btnId = btn.dataset.id;
                // Thực hiện xoá
                await remove(btnId);
                // window.location.reload();
                await reRender('#content', CategoryPage );
            });

        });
    }
};
export default CategoryPage;