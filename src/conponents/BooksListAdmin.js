import axios from "axios";
import {list} from "../api/book"
const BooksListAmin = {
  async render() {
    const response = await axios.get("http://localhost:3000/books?_expand=category");
    return `
    <div class="w-11/12 mx-auto">
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý sản phẩm
                </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/books/add" class="sm:ml-3">
                    <button type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Thêm mới
                    </button>
                </a>
                </div>
            </div>
        </div>
    </header>
    <main>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                  </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PRICE
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SALE
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DANH MỤC
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SỬA
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Xóa
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${response.data.map((product, index) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${index + 1}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="">
                  </div>
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="${product.img}" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        ${product.name}
                      </div>
                    
                    </div>
                  </div>
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${product.price}
                </span>
              </td>
              <td class="px-6 py-4 mx-auto">
                <p class="max-w-full px-2 text-xs font-semibold">
                  ${product.priceSale}
                </p>
              </td>
              <td class="px-6 py-4 mx-auto">
                <p class="max-w-full px-2 text-xs font-semibold">
                  ${product.category.name}
                </p>
              </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <a href="/admin/books/edit/${product.id}" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</a>
                </td>
                <td>
                <button data-id="${product.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                </td>
                `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </main>
  </div>
        `;
  },
};
export default BooksListAmin;
