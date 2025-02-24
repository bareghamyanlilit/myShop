import axiosInstance from './axiosInstance';

export const productApi = {
    signUp: (data) => axiosInstance.post(`/auth/register`, data),
    loginUser: (data,token) => axiosInstance.post(`/auth/login`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    verify: (data) => axiosInstance.post(`/auth/verify`, data),
    getProduct: () => axiosInstance.get(`/product`),
    addToBasket: (token, id) => axiosInstance.post(`/basket/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getBasket: (token) => axiosInstance.get(`/basket`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteBasket: (id, token) => axiosInstance.delete(`/basket/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteAllBasket: (token) => axiosInstance.delete(`/basket`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
};
