import axios from 'axios';
import { list } from '../api/book';

const ListBooks = {
    async render() {
        const response = await list()
        const cate = await axios.get('http://localhost:3000/categories')
        return `
        <section>
        <div class="mt-2 max-w-7xl m-auto">
            <div class="grid grid-cols-4">
                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div class="2xl:container 2xl:mx-auto">
                        <div id="filterSection"
                            class="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">
                            <div>
                                <div class="space-x-2 text-gray-800 dark:text-white">
                                    <p class="text-xl lg:leading-6 leading-5 font-medium">Danh mục</p>
                                </div>
                                <div class="mt-8 flex-wrap">

                                ${cate.data.map((cate) => `
                                <div
                                class="1 space-x-2 mb-2 md:justify-center md:items-center items-center justify-end">
                                <a href="/category/${cate.id}" class="text-base leading-4 dark:text-gray-300 text-gray-600 hover:text-gray-500 font-normal">${cate.name}</a>
                                </div>

                                `).join("")}
                                </div>
                            </div>

                            <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="bg-white">
                        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm</h2>

                            <div
                                class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            ${response.data.map((books) => `
            <div class="group relative">
            <div
                class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="${books.img}"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <a href="/books/${books.id}">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${books.name}
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">${books.priceSale} <span>%</span></p>
                </div>
                <p class="text-sm font-medium text-gray-900">${books.price}<u>đ</u></p>
            </div>
        </div>
            `).join("")}
            </div>
            </div>
        </div>
    </div>
</div>
</div>

</section>
        `;
    },
};
export default ListBooks;