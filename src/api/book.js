import instance from "./instance"

export const list = () => {
    const url =  "/books";
    return instance.get(url)
}
export const listD = (id) => {
    const url = `/books/${id}`
    return instance.get(url)
}
export const remove = (id) => {
    const url = `/books/${id}`
    return instance.delete(url)
}
export const Add = (data) =>{
    const url = `/books`
    return instance.post(url, data)
}
export const edit = (post) => {
    const url = `/books/${post.id}`;
    return instance.put(url, post);
}