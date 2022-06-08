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
    return instance.detele(url);
}
export const add = (category) => {
    const url = `/categories`;
    return instance.post(url, category);
}
export const edit = (category) => {
    const url = `/categories/${category.id}`;
    return instance.put(url, category);
}