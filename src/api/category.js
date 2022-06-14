import instance from './instance';

export const getAll = () => {
    const url = '/categories';
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const add = (category) => {
    const url = `/categories`;
    return instance.post(url, category);
}
export const edit = (post) => {
    const url = `/categories/${post.id}`;
    return instance.put(url, post);
}