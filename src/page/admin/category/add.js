import { add } from "../../../api/category";
import dashboard from "../../../conponents/DashboardList";
import router from "../../../helpers/router";

const CategoryAdd = {
    render: () => {
        return `
        <div>${dashboard.render()}</div>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg min-h-fit">
                <div class="mt-10 sm:mt-0">
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <form id="formAddCate">
                      <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-4">
                              <label for="name" class="block text-sm font-medium text-gray-700">Tên danh mục</label>
                              <input type="text" name="name" id="name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            </div>                 
                          </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button class="btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
                </div>
            </div>
        </div>
    </main>
        `
    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn');
        submitBtn.addEventListener('click', () => {
            const name = document.querySelector('#name').value;
            // const submitData = {
            //     name: name,
            //     msv: msv,
            //     avatar: avatar,
            // };
            const submitData = {name}
  
            // console.log(submitData);
            add(submitData)
            router.navigate('/admin/category')
        });
      }
}
export default CategoryAdd