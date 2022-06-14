
const reRender = async (elementRender, content, id) => {
    // content sẽ là toàn bộ component
    // cần thêm tham số vào hàm này để truyền id cho những phần detail
    document.querySelector(elementRender).innerHTML = await content.render(id);

    // Sau khi content đã render xong thì afterRender mới được chạy
    if (content.afterRender) {
        content.afterRender();
    }
};

export default reRender;